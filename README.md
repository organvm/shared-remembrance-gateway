# Shared Remembrance Gateway

[![CI](https://github.com/organvm-ii-poiesis/shared-remembrance-gateway/actions/workflows/ci.yml/badge.svg)](https://github.com/organvm-ii-poiesis/shared-remembrance-gateway/actions/workflows/ci.yml)
[![Coverage](https://img.shields.io/badge/coverage-pending-lightgrey)](https://github.com/organvm-ii-poiesis/shared-remembrance-gateway)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/organvm-ii-poiesis/shared-remembrance-gateway/blob/main/LICENSE)
[![Organ II](https://img.shields.io/badge/Organ-II%20Poiesis-EC4899)](https://github.com/organvm-ii-poiesis)
[![Status](https://img.shields.io/badge/status-active-brightgreen)](https://github.com/organvm-ii-poiesis/shared-remembrance-gateway)
[![TypeScript](https://img.shields.io/badge/lang-TypeScript-informational)](https://github.com/organvm-ii-poiesis/shared-remembrance-gateway)


[![CI](https://img.shields.io/github/actions/workflow/status/organvm-ii-poiesis/shared-remembrance-gateway/ci-minimal.yml?branch=main&style=flat-square&label=CI)](https://github.com/organvm-ii-poiesis/shared-remembrance-gateway/actions)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](LICENSE)
[![ORGAN-II: Art](https://img.shields.io/badge/ORGAN--II-Art-6a1b9a?style=flat-square)](https://github.com/organvm-ii-poiesis)
[![Status: DESIGN_ONLY](https://img.shields.io/badge/status-DESIGN__ONLY-lightgrey?style=flat-square)]()
[![C#](https://img.shields.io/badge/C%23-Unity-239120?style=flat-square)]()

> **A privacy-first metaverse platform that centers the digital home as a sanctuary for life simulation, memorial spaces, and creator economy -- combining cozy gameplay, computer vision, AI personalization, and blockchain-enabled digital ownership.**

---

## Table of Contents

1. [Vision](#1-vision)
2. [Solution Overview](#2-solution-overview)
3. [Technical Architecture](#3-technical-architecture)
4. [Installation and Setup](#4-installation-and-setup)
5. [Usage](#5-usage)
6. [Working Examples](#6-working-examples)
7. [Business Model](#7-business-model)
8. [Testing and Quality](#8-testing-and-quality)
9. [Cross-References](#9-cross-references)
10. [Contributing](#10-contributing)
11. [License and Author](#11-license-and-author)

---

## 1. Vision

### The Home as Sanctuary

Every culture in human history has organized social life around the home. The hearth, the kitchen table, the front porch, the guest room -- these are not just architectural features. They are protocols for intimacy, hospitality, remembrance, and identity. When a family sets a place at the table for someone who has died, that is a memorial technology older than writing. When a grandmother arranges photographs on a mantelpiece in a specific order, that is a spatial memory system more intuitive than any file browser. When neighbors visit each other's homes, bringing food and sitting in someone else's living room, that is a social network with physical presence, trust boundaries, and implicit access control.

Digital platforms have not reproduced any of this. Social media flattened the home into a profile page. Virtual worlds built shopping malls and nightclubs but not kitchens. Metaverse platforms optimized for spectacle -- concerts, conferences, brand activations -- while ignoring the fact that the most meaningful human experiences happen in small, domestic, familiar spaces. The result is a digital landscape that is excellent at broadcasting and terrible at dwelling. You can stream to ten thousand people but you cannot sit quietly in a room with your grandmother's recipe book and your father's favorite chair.

Shared Remembrance Gateway exists because the digital home should be more than a 3D lobby. It should be a place where your possessions have meaning, where your memories have spatial presence, where your grief has a dedicated room, and where your friends can visit and feel like guests rather than users. The project treats the home not as a game mechanic or a monetization surface but as the fundamental unit of digital life -- the place from which all other activities (creation, commerce, community, remembrance) naturally extend.

### Grief and Memory in the Digital Age

When someone dies, their digital presence becomes an unresolved problem. Social media profiles freeze into accidental memorials. Cloud storage becomes inaccessible. Shared playlists stop updating. The family inherits a scattered, platform-dependent archive of a person's digital life, with no coherent way to preserve, visit, or share it. Worse, the platforms that host these fragments have no obligation to maintain them, no understanding of their emotional significance, and no design consideration for mourning.

Shared Remembrance Gateway addresses this directly through dedicated Memorial Spaces -- rooms within the digital home that are purpose-built for commemorating the dead. These are not social media memorial pages with a comment section. They are spatial environments where a family can arrange photographs on walls, place meaningful objects on shelves, play music that the person loved, and invite others to visit in a way that feels like visiting a home rather than scrolling a feed. The memorial persists across platform changes because the underlying data is user-owned, exportable, and optionally anchored to decentralized storage. The person being remembered does not become a platform feature. They remain a presence in a home.

---

## 2. Solution Overview

### Four Experience Pillars

The platform is organized around four complementary modes of interaction, each addressing a different dimension of domestic digital life:

**Pillar 1: Cozy Life Simulation.** Inspired by the design philosophy of Animal Crossing and Stardew Valley, the core gameplay loop centers on home customization, leisurely resource management, and seasonal rhythms. Players furnish rooms, tend gardens, arrange collections, and personalize their space through an extensive catalog of objects, textures, and layouts. The pacing is deliberately unhurried. There are no combat mechanics, no failure states, no competitive leaderboards. The home is a place to inhabit, not a problem to solve.

**Pillar 2: Creative Sandbox.** Every object in the home can be user-created. The platform ships with a full UGC (user-generated content) creation toolkit: a 3D object editor, a texture painter, a spatial audio placement tool, and a scripting layer for interactive behaviors. Creators can publish their work to a marketplace, license it under terms they choose, and receive attribution and compensation when others use it. The creative tools are designed for accessibility -- someone who has never opened a 3D modeling program should be able to create a picture frame or a table lamp within thirty minutes.

**Pillar 3: Immersive Social Hub.** Homes are visitable. When you invite a friend to your home, they enter your space as a guest -- they see your arrangements, your collections, your memorial rooms (if you grant access). Multiplayer interaction is synchronous: you can sit together, rearrange furniture collaboratively, share meals from the Intelligent Pantry, and participate in seasonal events. The social model is based on invitation and trust, not public broadcasting. You choose who enters, what they see, and how long they stay.

**Pillar 4: Blended-Reality Meetup.** The platform bridges virtual and physical gathering through hybrid VR/IRL integration. A VR headset user and a phone user can occupy the same virtual space simultaneously. Physical meetup locations can be mapped into the virtual world, so a real-world book club or grief support group can have a persistent digital twin of their meeting room. AR overlays allow users to project virtual objects into physical spaces for mixed-reality decoration and memorial placement.

### Core Features

1. **Intelligent Pantry.** A computer vision pipeline that auto-recognizes household items through the device camera -- groceries, kitchenware, decorations, personal effects. Recognized items are cataloged in a digital registry that mirrors the physical household. The pantry tracks expiration dates, suggests recipes, and generates virtual twins of physical objects for placement in the digital home. This is not a shopping list app. It is a bridge between the physical home and its digital reflection.

2. **Collections and Gardens.** A digital asset management system with virtual gardening mechanics. Users cultivate gardens where plants grow according to real-world time, weather data, and care routines. Collections -- stamps, vinyl records, artwork, vintage cameras, anything -- are organized in spatial displays with provenance tracking. Rare items can be traded between users. The gardening system rewards patience and consistency over grinding.

3. **Memory Palace.** A spatial memory archive built on the mnemonic principle of the method of loci. Users place photographs, documents, audio recordings, journal entries, and video clips at specific locations within their home. Walking through a room triggers associated memories in spatial sequence. The Memory Palace is not a file browser with a 3D skin -- it is a fundamentally spatial approach to personal archiving where the layout itself carries meaning.

4. **Digital Memorials.** Dedicated rooms for commemorating deceased loved ones. Memorial spaces support photograph walls, object displays, ambient soundscapes, visitor guest books, anniversary notifications, and shared access for family members. Memorials can be public (community-accessible), family-private (shared key), or personal (single-user). Data portability is guaranteed: every memorial can be exported as a self-contained archive independent of the platform.

5. **AI Host (Three Phases).** An AI companion that evolves from personal assistant to social coordinator to community facilitator:
   - *Phase 1 -- Personal Home Host:* Learns your preferences, suggests arrangements, manages the Intelligent Pantry, surfaces memories on relevant dates.
   - *Phase 2 -- Social Coordinator:* Facilitates guest visits, manages access permissions, coordinates shared events and seasonal celebrations.
   - *Phase 3 -- Community Coordinator:* Connects households with shared interests, facilitates neighborhood events, moderates community memorial spaces.

---

## 3. Technical Architecture

### System Overview

```
+-------------------------------------------------------------+
|                    CLIENT LAYER (Unity)                       |
|  +------------+  +------------+  +------------+              |
|  |  VR Mode   |  |  Desktop   |  |   Mobile   |              |
|  | (OpenXR)   |  |  (Win/Mac) |  | (iOS/Andr) |              |
|  +------+-----+  +-----+------+  +-----+------+              |
|         |              |               |                      |
|         +-------+------+-------+-------+                      |
|                 |              |                               |
|          +------v------+ +----v--------+                      |
|          | Scene Graph  | | CV Pipeline |                     |
|          | (ECS-based)  | | (on-device) |                     |
|          +------+------+ +------+------+                      |
+-----------------|---------------|-----------------------------+
                  |               |
        +---------v---------------v---------+
        |          API GATEWAY               |
        |  RESTful + GraphQL + WebSocket     |
        +---------+---------------+---------+
                  |               |
    +-------------v--+     +-----v--------------+
    |  CLOUD BACKEND |     | DECENTRALIZED LAYER |
    |  (PostgreSQL,  |     | (IPFS, Smart        |
    |   Redis, S3)   |     |  Contracts, RWA     |
    |                |     |  Tokenization)      |
    +-------+--------+     +--------+-----------+
            |                       |
    +-------v-----------------------v-----------+
    |           AI HOST SERVICE                  |
    |  (LLM inference, preference learning,      |
    |   spatial reasoning, memory surfacing)      |
    +-------------------------------------------+
```

### Unity Engine Pipeline

The client is built in Unity (C#) targeting three platforms simultaneously through a shared ECS (Entity Component System) architecture. VR support uses OpenXR for headset-agnostic compatibility. The scene graph manages thousands of user-placed objects per home using spatial partitioning (octree) for efficient rendering. LOD (level of detail) transitions ensure that a home with 5,000 placed objects renders at 90fps on VR and 60fps on mobile.

The input abstraction layer normalizes interactions across six-degree-of-freedom VR controllers, mouse/keyboard on desktop, and touch on mobile. Object placement, camera movement, and social gestures (waving, pointing, offering items) share a unified interaction model that adapts to the input device without requiring separate control schemes.

### Computer Vision Pipeline

The Intelligent Pantry uses an on-device computer vision pipeline to minimize privacy exposure. Image processing occurs on the user's device; only anonymized feature vectors -- never raw images -- leave the device for cloud-based classification refinement. The pipeline operates in three stages:

1. **Detection.** A lightweight object detection model (MobileNet-based) identifies item boundaries and coarse categories in real time through the device camera.
2. **Classification.** A fine-tuned classification model maps detected items to a product taxonomy (~50,000 categories covering groceries, household items, decorative objects, and personal effects).
3. **Registry Sync.** Classified items are added to the household digital registry with metadata: category, quantity, detection confidence, timestamp, and optional user annotations. The registry syncs to the cloud backend for cross-device access.

Privacy is enforced architecturally: the CV pipeline runs in a sandboxed process with no network access during image processing. Only the classification result -- a category ID and confidence score -- passes through the network boundary.

### Blockchain and Digital Ownership

The decentralized layer provides three capabilities:

- **UGC-to-NFT Pipeline.** Creators mint user-generated objects as NFTs on a low-gas L2 chain. Provenance, licensing terms, and attribution are encoded on-chain. Buyers receive both the NFT (proof of ownership) and the Unity asset bundle (the actual 3D object). The platform never takes custody of the NFT.
- **RWA Tokenization.** Physical collectibles can be tokenized as Real World Assets: a user photographs a rare vinyl record, the CV pipeline verifies its condition and edition, and a corresponding RWA token is minted representing the physical item. This enables provenance tracking and peer-to-peer trading of physical collections with digital certificates of authenticity.
- **Memorial Persistence.** Memorial data can be anchored to IPFS with on-chain hash pointers, ensuring that memorial spaces survive platform discontinuation. Families hold the decryption keys. The platform cannot access, modify, or delete IPFS-anchored memorial data.

### AI Host Architecture

The AI Host runs as a microservice with three operational modes corresponding to its three evolution phases. Phase 1 uses a fine-tuned language model for preference learning and conversational interaction, combined with a spatial reasoning module that understands room layouts and object relationships. Phase 2 adds a scheduling and permission engine for social coordination. Phase 3 adds community graph analysis and event recommendation.

The AI Host never stores conversation transcripts. It maintains a preference embedding (a compressed, non-invertible representation of user preferences) and a spatial memory graph (which objects are where, what memories are associated with which locations). Both are user-owned and exportable.

### API Surface

- **RESTful API** for CRUD operations on homes, rooms, objects, collections, and memorials
- **GraphQL API** for complex queries (e.g., "all memorial spaces shared with this family group, with visitor counts from the past 30 days")
- **WebSocket** for real-time multiplayer synchronization during home visits

---

## 4. Installation and Setup

> **Note:** This repository is in DESIGN_ONLY status. The following instructions describe the intended development setup for contributors working on the design specification and prototype.

### Prerequisites

- Unity 2023.3 LTS or later (C# scripting backend)
- .NET 8.0 SDK
- Node.js 20+ (for tooling and API mock server)
- Docker (for local backend services)
- Git LFS (for Unity asset bundles)

### Clone and Configure

```bash
git clone https://github.com/organvm-ii-poiesis/shared-remembrance-gateway.git
cd shared-remembrance-gateway

# Install Git LFS hooks
git lfs install
git lfs pull

# Copy environment template
cp .env.example .env

# Start local backend services (PostgreSQL, Redis, mock blockchain)
docker compose up -d

# Open Unity project
# Unity Hub > Add > Select ./client/ directory
```

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `SRG_API_URL` | Backend API endpoint | `http://localhost:8080` |
| `SRG_CV_MODEL_PATH` | Path to CV model weights | `./models/mobilenet-v3/` |
| `SRG_IPFS_GATEWAY` | IPFS gateway for memorial persistence | `http://localhost:5001` |
| `SRG_CHAIN_RPC` | Blockchain RPC endpoint (L2) | `http://localhost:8545` |
| `SRG_AI_HOST_URL` | AI Host service endpoint | `http://localhost:9090` |

---

## 5. Usage

### Interaction Patterns

The platform supports three primary interaction modes, each mapping to different use cases:

**Domestic Mode** is the default. The user inhabits their home, arranging objects, tending gardens, reviewing the Intelligent Pantry, and browsing their Memory Palace. Interactions are slow, contemplative, and private. The camera defaults to a warm, close perspective. Ambient sound reflects the room's contents and time of day.

**Social Mode** activates when guests are present. The interface expands to show guest avatars, shared interaction zones (co-op furniture arrangement, collaborative cooking from the Pantry), and a guest-appropriate view of the home that respects the host's visibility settings. Memorial rooms require explicit per-visit permission grants.

**Creative Mode** opens the UGC creation toolkit. The user enters a workshop space where they can model, texture, script, and test objects before placing them in their home or publishing them to the marketplace. Creative Mode uses a simplified parametric modeling interface rather than full polygon editing -- the system generates the underlying mesh from high-level shape operations (extrude, bevel, boolean, mirror).

### Memorial Creation

Creating a memorial space follows a guided workflow:

1. **Dedication.** Name the memorial and select the relationship (parent, partner, sibling, friend, pet, collective).
2. **Space Selection.** Choose a room template (chapel, garden, living room, library, custom) or convert an existing room.
3. **Population.** Add photographs (drag from device or Memory Palace), objects (physical items scanned via CV or virtual objects), audio (voice recordings, favorite songs, ambient sounds), and text (letters, poems, stories).
4. **Arrangement.** Place items spatially within the room. The AI Host suggests arrangements based on chronological order, emotional grouping, or thematic clustering.
5. **Access Policy.** Set visibility: personal (only you), family (shared key distribution), community (public with optional guest book).
6. **Persistence.** Optionally anchor to IPFS for platform-independent longevity.

---

## 6. Working Examples

> **Reference implementation (shipping today).** While the Unity client remains a
> design specification, the concept's most defensible atom — the **portable
> Memorial Archive format** — is implemented and tested in this repository
> (`src/memorial-archive.ts`). It is a dependency-free TypeScript library that
> turns the README's guarantee *"every memorial can be exported as a
> self-contained archive independent of the platform"* into executing code with a
> proven lossless round-trip. See [`DISCOVERY.md`](DISCOVERY.md) for the value thesis.
>
> ```ts
> import { createMemorial, serialize, deserialize } from "shared-remembrance-gateway";
>
> const memorial = createMemorial({ name: "In Memory of David Chen", relationship: "parent" });
> memorial.items.push({ id: "photo-grad", kind: "photo", ref: "dad-graduation.jpg", caption: "Graduation, 1980" });
>
> const exported = serialize(memorial);       // canonical, content-addressable JSON
> const reimported = deserialize(exported);   // validates on the way in; throws on loss/corruption
> // reimported deep-equals memorial — lossless, platform-independent.
> ```

### Home Customization

```csharp
// Create a new room and furnish it
var kitchen = HomeManager.CreateRoom("Kitchen", RoomTemplate.Farmhouse);
kitchen.SetLighting(LightingPreset.WarmAfternoon);

// Place an object from the catalog
var table = ObjectCatalog.Instantiate("rustic-dining-table-oak");
kitchen.Place(table, position: new Vector3(2.5f, 0f, 3.0f), rotation: 45f);

// Add a Memory Palace anchor to the table
var anchor = MemoryPalace.CreateAnchor(
    location: table.transform.position,
    memory: new PhotoMemory("family-dinner-2024.jpg",
        caption: "Last Thanksgiving with Dad")
);
kitchen.AttachAnchor(table, anchor);
```

### Memorial Workflow

```csharp
// Create a memorial for a parent
var memorial = MemorialManager.Create(new MemorialConfig {
    Name = "In Memory of David Chen",
    Relationship = Relationship.Parent,
    Template = MemorialTemplate.Garden,
    AccessPolicy = AccessPolicy.Family
});

// Add photographs with spatial placement
memorial.AddPhoto("dad-graduation.jpg", wall: "north", position: 0.3f);
memorial.AddPhoto("dad-fishing-trip.jpg", wall: "north", position: 0.6f);

// Add ambient audio
memorial.SetAmbientAudio(new AudioClip[] {
    AudioLibrary.Load("gentle-rain"),
    AudioLibrary.Load("dad-favorite-jazz-playlist")
});

// Configure anniversary notification
memorial.AddAnniversary(new DateTime(2024, 3, 15),
    message: "Remembering David -- one year");

// Anchor to IPFS for persistence
var cid = await memorial.AnchorToIPFS();
Debug.Log($"Memorial anchored: ipfs://{cid}");
```

### Intelligent Pantry Scan

```csharp
// Start a pantry scan session
var scanner = IntelligentPantry.StartScan(CameraSource.RearFacing);

// Process camera frames (runs on-device)
scanner.OnItemDetected += (DetectedItem item) => {
    Debug.Log($"Detected: {item.Category} ({item.Confidence:P0})");

    // Auto-add high-confidence detections to registry
    if (item.Confidence > 0.85f) {
        PantryRegistry.Add(new RegistryEntry {
            Category = item.Category,
            Quantity = item.EstimatedQuantity,
            ExpirationEstimate = item.ExpirationDate,
            DetectedAt = DateTime.UtcNow
        });
    }
};

// Generate virtual twin for placement in digital kitchen
var virtualApple = scanner.GenerateDigitalTwin("organic-fuji-apple");
kitchen.Place(virtualApple, position: CounterTop.NextAvailableSlot());
```

---

## 7. Business Model

### Revenue Streams

| Stream | Model | Target |
|--------|-------|--------|
| **Core Platform** | Freemium subscription (Free / Plus $9.99/mo / Family $14.99/mo) | All users |
| **Creator Economy** | 8% platform commission on NFT marketplace trades | Creators and collectors |
| **Intelligent Pantry** | Premium CV features (nutrition tracking, recipe generation, expiry alerts) | Households |
| **Memorial Services** | IPFS persistence anchoring fee ($2.99/memorial/year) | Families |
| **Enterprise/B2B** | White-label memorial platform for funeral homes, hospices, religious organizations | Institutions |
| **RWA Certification** | Verification and tokenization service for physical collectibles | Collectors |

### Competitive Positioning

| Dimension | Shared Remembrance Gateway | Roblox / Fortnite | Decentraland / Sandbox | Gather Town |
|-----------|---------------------------|-------------------|----------------------|-------------|
| **Primary space** | Home | Arena / Map | Land parcel | Office |
| **Emotional register** | Intimacy, grief, memory | Entertainment, competition | Speculation, creation | Productivity |
| **Social unit** | Household / Family | Squad / Server | DAO / Community | Team / Org |
| **Object meaning** | Sentimental, memorial | Cosmetic, status | Speculative, tradable | Functional |
| **AI role** | Personal host, memory steward | NPC, opponent | None | None |
| **Privacy model** | Invitation-based, on-device CV | Public by default | Public by default | Link-based |
| **Persistence** | User-owned, IPFS-anchored | Platform-dependent | On-chain | Platform-dependent |

The core differentiator is emotional register. Existing metaverse platforms optimize for entertainment or speculation. Shared Remembrance Gateway optimizes for dwelling -- the experience of living in a digital space that feels like home rather than a venue.

---

## 8. Testing and Quality

### Testing Strategy

| Layer | Framework | Coverage Target |
|-------|-----------|-----------------|
| Unity Client (C#) | Unity Test Framework (EditMode + PlayMode) | 70% |
| API Backend | xUnit + Testcontainers | 85% |
| CV Pipeline | pytest + synthetic image datasets | 80% (mAP@0.5) |
| Smart Contracts | Hardhat + Foundry | 100% (critical paths) |
| Integration | Playwright (WebSocket) + Unity automation | E2E happy paths |

### Quality Gates

- All PRs require passing CI (lint, unit tests, build verification)
- CV model updates require benchmark regression testing against the synthetic household dataset (10,000 annotated images)
- Smart contract changes require formal verification of ownership transfer and access control functions
- Memorial data export/import must round-trip without loss (verified by automated serialization tests)
- Performance budget: 90fps VR, 60fps desktop, 30fps mobile (measured per-PR via automated profiling)

### Privacy Audit

The CV pipeline undergoes quarterly privacy audits verifying:
- No raw images leave the device sandbox
- Feature vectors are non-invertible (cannot reconstruct source images)
- Classification results contain no personally identifiable information
- IPFS-anchored memorial data is encrypted at rest with family-held keys

---

## 9. Cross-References

### ORGAN-II Repositories

This project sits within the Art organ of the eight-organ system. Related ORGAN-II repositories:

| Repository | Relationship |
|-----------|-------------|
| [`metasystem-master`](https://github.com/organvm-ii-poiesis/metasystem-master) | Core engine; shared ECS patterns and WebSocket infrastructure |
| [`example-interactive-installation`](https://github.com/organvm-ii-poiesis/example-interactive-installation) | Sensor-driven spatial interaction patterns applicable to AR features |
| [`client-sdk`](https://github.com/organvm-ii-poiesis/client-sdk) | WebSocket client library reusable for real-time home visit synchronization |
| [`a-i-council--coliseum`](https://github.com/organvm-ii-poiesis/a-i-council--coliseum) | Decentralized platform patterns; viewer participation architecture |
| [`audio-synthesis-bridge`](https://github.com/organvm-ii-poiesis/audio-synthesis-bridge) | Audio infrastructure for memorial ambient soundscapes |
| [`showcase-portfolio`](https://github.com/organvm-ii-poiesis/showcase-portfolio) | Aggregated portfolio; this project will be featured upon prototype delivery |

### Cross-Organ Dependencies

| Organ | Repository | Dependency |
|-------|-----------|------------|
| ORGAN-I | [`recursive-engine--generative-entity`](https://github.com/organvm-i-theoria/recursive-engine--generative-entity) | Symbolic system architecture informs AI Host personality and ritual integration |
| ORGAN-III | [`public-record-data-scrapper`](https://github.com/organvm-iii-ergon/public-record-data-scrapper) | Data pipeline patterns applicable to CV classification taxonomy |
| ORGAN-IV | [`orchestration-start-here`](https://github.com/organvm-iv-taxis/orchestration-start-here) | Governance and cross-organ routing protocols |
| ORGAN-V | [`public-process`](https://github.com/organvm-v-logos/public-process) | Building-in-public essays documenting this project's development |

---

## 10. Contributing

This project is in DESIGN_ONLY status. Contributions at this stage focus on specification refinement, UX research, and prototype planning.

### How to Contribute

1. **Design feedback.** Open an issue with the `design` label to propose changes to the experience pillars, feature specifications, or architecture.
2. **UX research.** We particularly welcome contributions from grief counselors, memorial designers, museum professionals, and accessibility specialists. Open an issue with the `ux-research` label.
3. **Technical prototyping.** If you want to prototype a specific subsystem (CV pipeline, AI Host, memorial persistence), open an issue with the `prototype` label describing your approach before submitting code.
4. **Documentation.** Improvements to this README, architecture decision records, and API specifications are always welcome.

### Development Workflow

```bash
# Create a feature branch
git checkout -b feature/your-feature-name

# Make changes and run linting
dotnet format ./client/SharedRemembranceGateway.sln

# Run tests (when prototype code exists)
dotnet test ./client/SharedRemembranceGateway.Tests/

# Open a pull request against main
```

### Code of Conduct

This project involves sensitive topics including grief, death, and memorial practices. All contributors are expected to engage with these subjects respectfully. We follow the [Contributor Covenant](https://www.contributor-covenant.org/) and additionally require cultural sensitivity in discussions about memorial practices across different traditions.

---

## 11. License and Author

**License:** [MIT](LICENSE)

**Author:** [@4444j99](https://github.com/4444j99)

**Part of the Eight-Organ Creative-Institutional System:**

| Organ | Domain | Organization |
|-------|--------|-------------|
| I | Theory | [organvm-i-theoria](https://github.com/organvm-i-theoria) |
| **II** | **Art** | **[organvm-ii-poiesis](https://github.com/organvm-ii-poiesis)** |
| III | Commerce | [organvm-iii-ergon](https://github.com/organvm-iii-ergon) |
| IV | Orchestration | [organvm-iv-taxis](https://github.com/organvm-iv-taxis) |
| V | Public Process | [organvm-v-logos](https://github.com/organvm-v-logos) |
| VI | Community | [organvm-vi-koinonia](https://github.com/organvm-vi-koinonia) |
| VII | Marketing | [organvm-vii-kerygma](https://github.com/organvm-vii-kerygma) |
| Meta | Governance | [meta-organvm](https://github.com/meta-organvm) |

---

*Shared Remembrance Gateway is an ORGAN-II repository within the eight-organ system. For system-wide documentation, see [organvm-corpvs-testamentvm](https://github.com/meta-organvm/organvm-corpvs-testamentvm).*
