# Contributing to Adaptasia

Thank you for your interest in contributing to **Adaptasia**! Adaptasia is an open-source, educational climate-adaptation city builder designed to teach urban resilience, hazard mitigation, and nature-based solutions through interactive gameplay.

---

## Table of Contents

- [Core Design Philosophy](#core-design-philosophy)
- [How Can I Contribute?](#how-can-i-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Features](#suggesting-features)
  - [Code & Game Design Contributions](#code--game-design-contributions)
- [Development Setup](#development-setup)
- [Architecture & Coding Guidelines](#architecture--coding-guidelines)
  - [Modular Architecture](#modular-architecture)
  - [Visual Style & Pixel Art](#visual-style--pixel-art)
  - [Balancing & Climate Fidelity](#balancing--climate-fidelity)
- [Pull Request Process](#pull-request-process)
- [Community Guidelines](#community-guidelines)

---

## Core Design Philosophy

Before making changes, please keep in mind Adaptasia's key architectural constraints:

1. **Zero External Dependencies**: The game runs on vanilla HTML5 Canvas + JavaScript. No frameworks (React, Vue, Phaser), external fonts, CSS libraries, or asset loaders.
2. **Single-File Portability**: The core game is fully playable from a single standalone file (`index.html` / `adaptasia.html`). Anyone should be able to double-click the file or open it over `file://` or any static host and play immediately.
3. **Procedural Pixel Art**: All art and fonts are drawn programmatically using canvas rectangles (`fillRect`) and a fixed 24-color palette.
4. **Educational Accuracy**: Game mechanics reflect real-world urban climate science (e.g., FEMA hazard mitigation ROI, the "levee effect", urban heat island dynamics, maturity curves of nature-based solutions).

---

## How Can I Contribute?

### Reporting Bugs

- Search existing issues to confirm the bug hasn't already been reported.
- Open a new issue using our [Bug Report Template](.github/ISSUE_TEMPLATE/bug_report.md).
- Include your browser, OS, screen resolution, reproducible steps, and any console errors (`F12`).
- If applicable, mention whether `?debug=1` was active.

### Suggesting Features

- Open a new issue using our [Feature Request Template](.github/ISSUE_TEMPLATE/feature_request.md).
- Explain the gameplay goal and the pedagogical/climate-adaptation reasoning behind the feature.
- See the [Roadmap in README.md](README.md#roadmap--future-vision) to check planned future systems (e.g., drought, sea-level rise, policy zoning).

### Code & Game Design Contributions

We welcome contributions in several areas:
- **Simulation balancing**: Tuning costs, hazard frequencies, or growth rates in `CONFIG`.
- **Educational content**: Adding or refining real-world climate adaptation facts and post-game lessons.
- **Accessibility & UI**: Keyboard controls, color-contrast considerations, mobile touch interactions.
- **New infrastructure**: Additional nature-based solutions (e.g., permeable pavement, retention ponds) or gray infrastructure.
- **Performance optimizations**: Keeping canvas rendering crisp and fast on low-spec hardware.

---

## Development Setup

Because Adaptasia has zero build steps, setting up a local development environment takes seconds:

### Option A: Local Python Server (Recommended)
```bash
# In the project root directory:
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

### Option B: Node / NPX
```bash
npx serve .
```

### Option C: Direct File Open
You can also open `index.html` directly in any modern browser (Chrome, Firefox, Safari, Edge). Note that some browsers restrict `localStorage` or module exports when run strictly via `file://`.

### Running Tests
To run simulation and code integrity checks:
```bash
# Node-based test:
npm test

# Or Python-based integrity test:
python tests/test_integrity.py
```

---

## Architecture & Coding Guidelines

### Modular Architecture
The code is organized into distinct logical modules inside the script tag:
- `CONFIG`: All gameplay variables, costs, probabilities, and thresholds.
- `UTIL`: Helper functions, deterministic PRNG (`mulberry32`), array math, coordinate helpers.
- `MAP`: Procedural terrain generation (elevation, river, coast, floodplain, hills).
- `SIMULATION`: City state, zoning, metrics computation, and yearly step evaluation.
- `HAZARDS`: Flood modeling, heat island evaluation, damage, and disaster forecasts.
- `SPRITES`: 16x16 pixel sprites and 3x5 bitmap font atlas built using `fillRect`.
- `RENDER`: Canvas rendering loop, overlays, HUD, panels, tooltips, and popups.
- `UI`: Event handlers, drag-to-paint logic, button management, tutorial, and state save/load.
- `BOOT`: Initialization, responsive integer canvas scaling, and the `requestAnimationFrame` loop.

### Visual Style & Pixel Art
- Stick to the **24-color retro palette** defined in `PAL`. Do not introduce arbitrary hex colors.
- Maintain the **16x16 tile grid** and the native **640x448 logical canvas resolution**.
- Use the built-in 3x5 pixel font for all in-game text.

### Balancing & Climate Fidelity
- Avoid hardcoding simulation constants inside functions. Place all tunable values in `CONFIG`.
- When adding new infrastructure, always define:
  - Capital cost (`cost`) and yearly upkeep (`upkeep`).
  - Flood mitigation capability (`flood`, `radius`) or heat reduction (`heatRed`).
  - Co-benefits (recreation `rec`, attractiveness `attr`, land value boost `lv`).
  - Vulnerability / failure criteria (maturity time `mature`, failure rate in extreme events `fail`).

---

## Pull Request Process

1. Fork the repository and create your branch from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Make your modifications. Keep `index.html` and `adaptasia.html` in sync if modifying the game source.
3. Verify that the game runs without errors in your browser console and that tests pass:
   ```bash
   python tests/test_integrity.py
   ```
4. Test with `?debug=1` to ensure hazard triggering (`F` for flood, `H` for heat, `V` for values) works properly.
5. Commit your changes with clear, descriptive commit messages:
   ```bash
   git commit -m "feat(simulation): add permeable pavement infrastructure option"
   ```
6. Push to your fork and submit a Pull Request against `main`. Fill in the PR description template.

---

## Community Guidelines

Please note that this project is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you agree to uphold this code.
