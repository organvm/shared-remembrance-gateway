/**
 * Memorial Archive format — the portable, platform-independent atom of the
 * Shared Remembrance Gateway concept.
 *
 * This module realizes the README's two load-bearing guarantees:
 *   1. "every memorial can be exported as a self-contained archive independent
 *       of the platform"  (data portability for the dead is a right, not a feature)
 *   2. "Memorial data export/import must round-trip without loss"  (hard quality gate)
 *
 * A {@link MemorialArchive} is a pure data structure: memorial metadata plus a
 * list of placed items (photo / audio / text / object), spatial arrangement,
 * anniversaries, and an optional IPFS anchor. It deliberately holds *references*
 * to content (paths, URIs, or IPFS CIDs) rather than embedding binary blobs, so
 * the archive stays small, diffable, and content-addressable — and so the same
 * format can describe a memorial whether its photos live on disk, in S3, or on
 * IPFS. No Unity, no blockchain, no computer-vision dependency: just the
 * defensible interoperability substrate the rest of the estate can consume.
 */

/** Stable format identifier embedded in every archive. */
export const MEMORIAL_ARCHIVE_FORMAT = "organvm.memorial-archive" as const;

/** Format version (semver). Bump on breaking schema changes. */
export const MEMORIAL_ARCHIVE_VERSION = "1.0.0" as const;

/** Relationship of the memorialised subject to the memorial's author. */
export type Relationship =
  | "parent"
  | "partner"
  | "sibling"
  | "child"
  | "friend"
  | "pet"
  | "collective"
  | "other";

/** Spatial room template the memorial is rendered into. */
export type RoomTemplate = "chapel" | "garden" | "living-room" | "library" | "custom";

/** Who may visit the memorial. */
export type AccessPolicy = "personal" | "family" | "community";

/** Kind of content an item carries. */
export type ItemKind = "photo" | "audio" | "text" | "object";

/** A 3D coordinate within the memorial room. */
export interface Vec3 {
  x: number;
  y: number;
  z: number;
}

/** Spatial placement of an item within the room. */
export interface Placement {
  position: Vec3;
  /** Yaw rotation in degrees. */
  rotation?: number;
  /** Named wall anchor (e.g. "north"), when wall-mounted rather than free-placed. */
  wall?: string;
  /** Uniform scale factor; defaults to 1 when absent. */
  scale?: number;
}

/** A single placed memory within the memorial. */
export interface MemorialItem {
  /** Stable identifier, unique within the archive. */
  id: string;
  kind: ItemKind;
  /** Reference to the content: a path, URI, or `ipfs://<cid>`. */
  ref: string;
  caption?: string;
  placement?: Placement;
  /** ISO-8601 timestamp of when the underlying memory was created. */
  createdAt?: string;
  /** Free-form, user-owned annotations. */
  annotations?: Record<string, string>;
}

/** A recurring date the memorial surfaces (e.g. a death anniversary). */
export interface Anniversary {
  /** ISO-8601 date. */
  date: string;
  message: string;
}

/** A complete, self-contained memorial. This is the portable archive. */
export interface MemorialArchive {
  format: typeof MEMORIAL_ARCHIVE_FORMAT;
  version: string;
  /** Display name, e.g. "In Memory of David Chen". */
  name: string;
  relationship: Relationship;
  template: RoomTemplate;
  accessPolicy: AccessPolicy;
  items: MemorialItem[];
  anniversaries: Anniversary[];
  /** Refs to ambient soundscape clips played in the room. */
  ambientAudio: string[];
  /** Optional dedication text. */
  dedication?: string;
  /** ISO-8601 timestamp of archive creation. */
  createdAt?: string;
  /** IPFS CID when the memorial has been anchored for platform-independent persistence. */
  ipfsCid?: string;
  /** Free-form, user-owned metadata. */
  metadata?: Record<string, string>;
}

/** Fields required to create a memorial; the rest default to empty/sensible values. */
export interface MemorialConfig {
  name: string;
  relationship: Relationship;
  template?: RoomTemplate;
  accessPolicy?: AccessPolicy;
  dedication?: string;
  createdAt?: string;
}

/** Error thrown when an archive fails validation during {@link deserialize}. */
export class MemorialArchiveError extends Error {
  readonly errors: readonly string[];
  constructor(message: string, errors: readonly string[]) {
    super(`${message}: ${errors.join("; ")}`);
    this.name = "MemorialArchiveError";
    this.errors = errors;
  }
}

/** Result of validating an unknown value against the archive schema. */
export interface ValidationResult {
  valid: boolean;
  errors: string[];
}

const RELATIONSHIPS: readonly Relationship[] = [
  "parent",
  "partner",
  "sibling",
  "child",
  "friend",
  "pet",
  "collective",
  "other",
];
const TEMPLATES: readonly RoomTemplate[] = ["chapel", "garden", "living-room", "library", "custom"];
const ACCESS_POLICIES: readonly AccessPolicy[] = ["personal", "family", "community"];
const ITEM_KINDS: readonly ItemKind[] = ["photo", "audio", "text", "object"];

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isStringRecord(value: unknown): value is Record<string, string> {
  return isPlainObject(value) && Object.values(value).every((v) => typeof v === "string");
}

function validateVec3(value: unknown, path: string, errors: string[]): void {
  if (!isPlainObject(value)) {
    errors.push(`${path} must be an object`);
    return;
  }
  for (const axis of ["x", "y", "z"] as const) {
    if (typeof value[axis] !== "number" || !Number.isFinite(value[axis])) {
      errors.push(`${path}.${axis} must be a finite number`);
    }
  }
}

function validatePlacement(value: unknown, path: string, errors: string[]): void {
  if (!isPlainObject(value)) {
    errors.push(`${path} must be an object`);
    return;
  }
  validateVec3(value.position, `${path}.position`, errors);
  if (value.rotation !== undefined && (typeof value.rotation !== "number" || !Number.isFinite(value.rotation))) {
    errors.push(`${path}.rotation must be a finite number`);
  }
  if (value.wall !== undefined && typeof value.wall !== "string") {
    errors.push(`${path}.wall must be a string`);
  }
  if (value.scale !== undefined && (typeof value.scale !== "number" || !Number.isFinite(value.scale))) {
    errors.push(`${path}.scale must be a finite number`);
  }
}

function validateItem(value: unknown, path: string, errors: string[]): void {
  if (!isPlainObject(value)) {
    errors.push(`${path} must be an object`);
    return;
  }
  if (typeof value.id !== "string" || value.id.length === 0) {
    errors.push(`${path}.id must be a non-empty string`);
  }
  if (!ITEM_KINDS.includes(value.kind as ItemKind)) {
    errors.push(`${path}.kind must be one of ${ITEM_KINDS.join(", ")}`);
  }
  if (typeof value.ref !== "string" || value.ref.length === 0) {
    errors.push(`${path}.ref must be a non-empty string`);
  }
  if (value.caption !== undefined && typeof value.caption !== "string") {
    errors.push(`${path}.caption must be a string`);
  }
  if (value.placement !== undefined) {
    validatePlacement(value.placement, `${path}.placement`, errors);
  }
  if (value.createdAt !== undefined && typeof value.createdAt !== "string") {
    errors.push(`${path}.createdAt must be a string`);
  }
  if (value.annotations !== undefined && !isStringRecord(value.annotations)) {
    errors.push(`${path}.annotations must be a string-to-string map`);
  }
}

function validateAnniversary(value: unknown, path: string, errors: string[]): void {
  if (!isPlainObject(value)) {
    errors.push(`${path} must be an object`);
    return;
  }
  if (typeof value.date !== "string" || value.date.length === 0) {
    errors.push(`${path}.date must be a non-empty string`);
  }
  if (typeof value.message !== "string") {
    errors.push(`${path}.message must be a string`);
  }
}

/**
 * Validate an arbitrary value against the Memorial Archive schema.
 * Never throws; returns the full list of problems found.
 */
export function validate(value: unknown): ValidationResult {
  const errors: string[] = [];

  if (!isPlainObject(value)) {
    return { valid: false, errors: ["archive must be an object"] };
  }

  if (value.format !== MEMORIAL_ARCHIVE_FORMAT) {
    errors.push(`format must be "${MEMORIAL_ARCHIVE_FORMAT}"`);
  }
  if (typeof value.version !== "string" || value.version.length === 0) {
    errors.push("version must be a non-empty string");
  }
  if (typeof value.name !== "string" || value.name.length === 0) {
    errors.push("name must be a non-empty string");
  }
  if (!RELATIONSHIPS.includes(value.relationship as Relationship)) {
    errors.push(`relationship must be one of ${RELATIONSHIPS.join(", ")}`);
  }
  if (!TEMPLATES.includes(value.template as RoomTemplate)) {
    errors.push(`template must be one of ${TEMPLATES.join(", ")}`);
  }
  if (!ACCESS_POLICIES.includes(value.accessPolicy as AccessPolicy)) {
    errors.push(`accessPolicy must be one of ${ACCESS_POLICIES.join(", ")}`);
  }

  if (!Array.isArray(value.items)) {
    errors.push("items must be an array");
  } else {
    value.items.forEach((item, i) => validateItem(item, `items[${i}]`, errors));
    const ids = value.items.filter(isPlainObject).map((item) => item.id);
    const dupes = ids.filter((id, i) => typeof id === "string" && ids.indexOf(id) !== i);
    if (dupes.length > 0) {
      errors.push(`items contain duplicate ids: ${[...new Set(dupes)].join(", ")}`);
    }
  }

  if (!Array.isArray(value.anniversaries)) {
    errors.push("anniversaries must be an array");
  } else {
    value.anniversaries.forEach((a, i) => validateAnniversary(a, `anniversaries[${i}]`, errors));
  }

  if (!Array.isArray(value.ambientAudio) || !value.ambientAudio.every((r) => typeof r === "string")) {
    errors.push("ambientAudio must be an array of strings");
  }

  if (value.dedication !== undefined && typeof value.dedication !== "string") {
    errors.push("dedication must be a string");
  }
  if (value.createdAt !== undefined && typeof value.createdAt !== "string") {
    errors.push("createdAt must be a string");
  }
  if (value.ipfsCid !== undefined && typeof value.ipfsCid !== "string") {
    errors.push("ipfsCid must be a string");
  }
  if (value.metadata !== undefined && !isStringRecord(value.metadata)) {
    errors.push("metadata must be a string-to-string map");
  }

  return { valid: errors.length === 0, errors };
}

/** Type guard: true when `value` is a valid {@link MemorialArchive}. */
export function isMemorialArchive(value: unknown): value is MemorialArchive {
  return validate(value).valid;
}

/** Create a new, empty memorial archive from a minimal config. */
export function createMemorial(config: MemorialConfig): MemorialArchive {
  return {
    format: MEMORIAL_ARCHIVE_FORMAT,
    version: MEMORIAL_ARCHIVE_VERSION,
    name: config.name,
    relationship: config.relationship,
    template: config.template ?? "custom",
    accessPolicy: config.accessPolicy ?? "personal",
    items: [],
    anniversaries: [],
    ambientAudio: [],
    ...(config.dedication !== undefined ? { dedication: config.dedication } : {}),
    ...(config.createdAt !== undefined ? { createdAt: config.createdAt } : {}),
  };
}

/**
 * Recursively sort object keys so that {@link serialize} is canonical: the same
 * archive always produces byte-identical JSON, regardless of key insertion
 * order. This makes archives diffable and content-addressable (a stable hash /
 * IPFS CID), which is exactly what the memorial-persistence guarantee needs.
 */
function canonicalize(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map(canonicalize);
  }
  if (isPlainObject(value)) {
    const sorted: Record<string, unknown> = {};
    for (const key of Object.keys(value).sort()) {
      const v = value[key];
      if (v !== undefined) {
        sorted[key] = canonicalize(v);
      }
    }
    return sorted;
  }
  return value;
}

/**
 * Serialize a memorial to a canonical JSON string.
 * @throws {MemorialArchiveError} if the archive is not valid.
 */
export function serialize(archive: MemorialArchive, pretty = false): string {
  const result = validate(archive);
  if (!result.valid) {
    throw new MemorialArchiveError("cannot serialize invalid memorial archive", result.errors);
  }
  return JSON.stringify(canonicalize(archive), null, pretty ? 2 : undefined);
}

/**
 * Parse and validate a memorial archive from a JSON string.
 * @throws {MemorialArchiveError} if the JSON is malformed or fails validation.
 */
export function deserialize(json: string): MemorialArchive {
  let parsed: unknown;
  try {
    parsed = JSON.parse(json);
  } catch (e) {
    throw new MemorialArchiveError("invalid JSON", [(e as Error).message]);
  }
  const result = validate(parsed);
  if (!result.valid) {
    throw new MemorialArchiveError("invalid memorial archive", result.errors);
  }
  return parsed as MemorialArchive;
}
