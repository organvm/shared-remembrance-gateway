import {
  MEMORIAL_ARCHIVE_FORMAT,
  MEMORIAL_ARCHIVE_VERSION,
  MemorialArchive,
  MemorialArchiveError,
  createMemorial,
  deserialize,
  isMemorialArchive,
  serialize,
  validate,
} from "../src/memorial-archive";

/** A maximally-populated memorial exercising every optional field. */
function fullMemorial(): MemorialArchive {
  return {
    format: MEMORIAL_ARCHIVE_FORMAT,
    version: MEMORIAL_ARCHIVE_VERSION,
    name: "In Memory of David Chen",
    relationship: "parent",
    template: "garden",
    accessPolicy: "family",
    dedication: "He kept the porch light on.",
    createdAt: "2026-03-15T09:00:00.000Z",
    ipfsCid: "bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi",
    metadata: { curator: "the Chen family", locale: "en-US" },
    ambientAudio: ["ipfs://gentle-rain", "ipfs://dad-favorite-jazz"],
    anniversaries: [
      { date: "2026-03-15", message: "Remembering David — one year" },
      { date: "1958-07-04", message: "His birthday" },
    ],
    items: [
      {
        id: "photo-grad",
        kind: "photo",
        ref: "dad-graduation.jpg",
        caption: "Graduation, 1980",
        createdAt: "1980-06-01T00:00:00.000Z",
        placement: { position: { x: 0.3, y: 1.5, z: 0 }, wall: "north", rotation: 0, scale: 1 },
        annotations: { source: "family album" },
      },
      {
        id: "obj-chair",
        kind: "object",
        ref: "ipfs://favorite-armchair-glb",
        placement: { position: { x: 2.5, y: 0, z: 3 }, rotation: 45 },
      },
      { id: "text-letter", kind: "text", ref: "letters/last-note.txt", caption: "His last note" },
    ],
  };
}

describe("memorial-archive: lossless round-trip", () => {
  test("a fully-populated memorial round-trips through JSON with zero loss", () => {
    const original = fullMemorial();
    const restored = deserialize(serialize(original));
    // Deep structural equality — the archive's load-bearing guarantee.
    expect(restored).toEqual(original);
  });

  test("round-trip survives an arbitrary number of repetitions (idempotent)", () => {
    const original = fullMemorial();
    let json = serialize(original);
    for (let i = 0; i < 5; i++) {
      json = serialize(deserialize(json));
    }
    expect(deserialize(json)).toEqual(original);
  });

  test("a minimal memorial from createMemorial round-trips", () => {
    const original = createMemorial({ name: "For Mittens", relationship: "pet" });
    expect(deserialize(serialize(original))).toEqual(original);
  });

  test("serialization is canonical: key order does not affect output", () => {
    const original = fullMemorial();
    const shuffled: MemorialArchive = {
      items: original.items,
      name: original.name,
      version: original.version,
      ambientAudio: original.ambientAudio,
      relationship: original.relationship,
      format: original.format,
      template: original.template,
      anniversaries: original.anniversaries,
      accessPolicy: original.accessPolicy,
      metadata: original.metadata,
      dedication: original.dedication,
      createdAt: original.createdAt,
      ipfsCid: original.ipfsCid,
    };
    // Same content, different key insertion order → byte-identical JSON.
    expect(serialize(shuffled)).toBe(serialize(original));
  });
});

describe("memorial-archive: createMemorial", () => {
  test("applies sensible defaults", () => {
    const m = createMemorial({ name: "For Mittens", relationship: "pet" });
    expect(m.format).toBe(MEMORIAL_ARCHIVE_FORMAT);
    expect(m.version).toBe(MEMORIAL_ARCHIVE_VERSION);
    expect(m.template).toBe("custom");
    expect(m.accessPolicy).toBe("personal");
    expect(m.items).toEqual([]);
    expect(m.anniversaries).toEqual([]);
    expect(m.ambientAudio).toEqual([]);
    expect(isMemorialArchive(m)).toBe(true);
  });

  test("omits optional fields when not provided (no undefined keys)", () => {
    const m = createMemorial({ name: "For Mittens", relationship: "pet" });
    expect("dedication" in m).toBe(false);
    expect("createdAt" in m).toBe(false);
  });
});

describe("memorial-archive: validation", () => {
  test("accepts a valid archive", () => {
    expect(validate(fullMemorial())).toEqual({ valid: true, errors: [] });
  });

  test("rejects non-objects", () => {
    expect(validate(null).valid).toBe(false);
    expect(validate("nope").valid).toBe(false);
    expect(validate([]).valid).toBe(false);
  });

  test("flags a wrong format tag", () => {
    const bad = { ...fullMemorial(), format: "something-else" };
    const r = validate(bad);
    expect(r.valid).toBe(false);
    expect(r.errors.some((e) => e.includes("format"))).toBe(true);
  });

  test("flags an unknown relationship / template / access policy", () => {
    const r = validate({ ...fullMemorial(), relationship: "robot", template: "dungeon", accessPolicy: "public" });
    expect(r.valid).toBe(false);
    expect(r.errors.some((e) => e.includes("relationship"))).toBe(true);
    expect(r.errors.some((e) => e.includes("template"))).toBe(true);
    expect(r.errors.some((e) => e.includes("accessPolicy"))).toBe(true);
  });

  test("flags duplicate item ids", () => {
    const m = fullMemorial();
    m.items.push({ id: "photo-grad", kind: "text", ref: "dupe.txt" });
    const r = validate(m);
    expect(r.valid).toBe(false);
    expect(r.errors.some((e) => e.includes("duplicate ids"))).toBe(true);
  });

  test("flags a malformed item placement", () => {
    const m = fullMemorial();
    // @ts-expect-error — deliberately invalid coordinate for the test
    m.items[0].placement = { position: { x: "left", y: 0, z: 0 } };
    const r = validate(m);
    expect(r.valid).toBe(false);
    expect(r.errors.some((e) => e.includes("position.x"))).toBe(true);
  });

  test("flags missing required arrays", () => {
    const { items, anniversaries, ambientAudio, ...rest } = fullMemorial();
    const r = validate(rest);
    expect(r.valid).toBe(false);
    expect(r.errors).toEqual(
      expect.arrayContaining([
        expect.stringContaining("items"),
        expect.stringContaining("anniversaries"),
        expect.stringContaining("ambientAudio"),
      ]),
    );
  });
});

describe("memorial-archive: serialize / deserialize errors", () => {
  test("serialize throws MemorialArchiveError on an invalid archive", () => {
    const bad = { ...fullMemorial(), name: "" } as MemorialArchive;
    expect(() => serialize(bad)).toThrow(MemorialArchiveError);
  });

  test("deserialize throws on malformed JSON", () => {
    expect(() => deserialize("{ not json")).toThrow(MemorialArchiveError);
  });

  test("deserialize throws on valid JSON that fails the schema", () => {
    expect(() => deserialize(JSON.stringify({ format: "x" }))).toThrow(MemorialArchiveError);
  });

  test("the error carries the structured list of problems", () => {
    try {
      deserialize(JSON.stringify({ format: MEMORIAL_ARCHIVE_FORMAT }));
      throw new Error("expected deserialize to throw");
    } catch (e) {
      expect(e).toBeInstanceOf(MemorialArchiveError);
      expect((e as MemorialArchiveError).errors.length).toBeGreaterThan(0);
    }
  });

  test("pretty serialization still round-trips", () => {
    const original = fullMemorial();
    expect(deserialize(serialize(original, true))).toEqual(original);
  });
});
