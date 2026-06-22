/**
 * shared-remembrance-gateway — Part of the organvm eight-organ system.
 *
 * Public entrypoint. The repo's discovered latent value (see DISCOVERY.md) is
 * the portable Memorial Archive format, re-exported here for consumers.
 */

export const VERSION = "0.1.0";

export * from "./memorial-archive";

export function main(): void {
  console.log(`shared-remembrance-gateway v${VERSION}`);
}
