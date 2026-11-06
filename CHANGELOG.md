# Changelog

All notable changes to the Adaptasia project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [0.1.0-beta] - 2026-11-06

### Added
- **Core Game Engine**:
  - Single-file HTML5 Canvas + Vanilla JavaScript architecture.
  - Native 640x448 resolution with crisp integer scaling.
  - Custom 3x5 blocky pixel font atlas engine.
  - 24-color retro palette for consistent pixel art styling.
- **Procedural World Generation**:
  - Seed-based deterministic PRNG (`mulberry32`).
  - Meandering river generation and organic coastline shaping.
  - 2D value noise elevation modeling and distance-to-water BFS gradient.
  - Dynamic biome classification: river, sea, coastline sand, floodplain, hills, and buildable land.
- **City Simulation & Economy**:
  - Road connectivity algorithm (Chebyshev radius = 2) for residential and commercial zones.
  - Dual revenue stream: \$2.50 tax per resident, \$2.00 tax per job.
  - Ongoing upkeep system for gray and nature infrastructure.
  - Dynamic migration model driven by attractiveness, job availability, and happiness.
  - Hill construction cost penalty (1.5x) reflecting real-world topography challenges.
- **Climate Hazard System**:
  - Compound flood mechanics: riverine and coastal surge routing into low elevation tiles.
  - Escalating hazard trendlines over the 30-year simulation timeframe.
  - Extreme event modeling with levee overtopping, structural breach (15%), and storm drain clogging (25%).
  - Building abandonment mechanics triggered by repeated flooding (2 floods in 3 years).
  - Urban Heat Island (UHI) simulation with localized warming around roads/buildings and cooling buffers around wetlands, parks, water, and green roofs.
  - Heat harm thresholds and cooling center protection radius.
- **Infrastructure Catalog**:
  - *Gray Infrastructure*: Levee / Seawall, Storm Drain, Cooling Center.
  - *Nature-Based Solutions*: Wetland, Park / Trees, Green Roof, Bioswale.
  - *Development & Tools*: Road, Residential Zone, Commercial Zone, Inspect Tool, Demolish Tool.
  - Multi-year maturation curves for green infrastructure.
- **User Interface & Analysis**:
  - Real-time HUD showing Budget, Population, Jobs, Year, Happiness, Resilience, Recreation, and Attractiveness.
  - Interactive Overlays for Flood Risk (Design Flood), Heat Island Score, and Land Value.
  - Yearly forecast bar displaying predicted flood and heat probabilities.
  - 4-part illustrated tutorial with skip and navigation options.
  - LocalStorage game saving and loading (`adaptasia_save_v1`).
  - Auto-play toggle (1 year every 5 seconds) and manual turn progression (Spacebar / "END YEAR").
  - Post-game reflection report with automated tailored lessons learned and infrastructure spending breakdown.
- **Developer & Debug Tooling**:
  - Debug mode via URL param `?debug=1` or keybindings.
  - On-canvas tile metric inspection (`V`), instant flood trigger (`F`), heat trigger (`H`), and budget boost.
  - `module.exports` interface for automated headless simulation testing.
