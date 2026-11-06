# Adaptasia Gameplay & Strategy Guide

Welcome to **Adaptasia**, an educational city builder where your goal is to grow a vibrant, thriving riverfront city while preparing for escalating climate hazards over a 30-year planning horizon.

---

## Table of Contents

1. [Game Overview & Objectives](#game-overview--objectives)
2. [Interface & Controls](#interface--controls)
3. [HUD Metrics & City Health](#hud-metrics--city-health)
4. [Terrain & Biomes](#terrain--biomes)
5. [Infrastructure & Tool Catalog](#infrastructure--tool-catalog)
   - [Development Tools](#development-tools)
   - [Gray Infrastructure](#gray-infrastructure)
   - [Nature-Based Solutions (NBS)](#nature-based-solutions-nbs)
   - [Utility Tools](#utility-tools)
6. [Climate Hazards & Mechanics](#climate-hazards--mechanics)
   - [Riverine & Coastal Flooding](#riverine--coastal-flooding)
   - [Urban Heat Island & Heat Waves](#urban-heat-island--heat-waves)
7. [Analytical Overlays](#analytical-overlays)
8. [Proven Strategies for Success](#proven-strategies-for-success)
9. [Debug Mode & Testing](#debug-mode--testing)

---

## Game Overview & Objectives

In Adaptasia, you serve as the chief urban planner and resilience officer of a developing coastal and riverine municipality. You start with **\$25,000** and an undeveloped landscape.

### Win Conditions
To win the game before or by the end of **Year 30**, you must simultaneously achieve:
- **Population $\ge$ 5,000** residents.
- **City Resilience Score $\ge$ 70 / 100**.
- **Budget $\ge$ \$0** (must not be in debt).

### Defeat Conditions
You will lose the game if any of the following occur:
- **Bankruptcy**: Budget remains in the red (< \$0) at the end of **3 consecutive years**.
- **Resident Revolt**: City Happiness drops below **20%** for **3 consecutive years**.
- **Time's Up**: Reaching the end of **Year 30** without meeting all win conditions.

---

## Interface & Controls

| Input | Action |
| :--- | :--- |
| **Left Click / Pointer Tap** | Select tool or place selected item on map tile |
| **Click & Drag** | Paint roads or zones rapidly across adjacent tiles |
| **Spacebar** | Advance one year (`END YEAR`) or dismiss popups |
| **Escape** | Deselect tile inspection / switch to Inspect tool |
| **F** *(Debug mode only)* | Trigger an immediate debug flood |
| **H** *(Debug mode only)* | Trigger an immediate debug heat wave |
| **V** *(Debug mode only)* | Toggle numeric tile overlays (elevation, heat, risk) |

---

## HUD Metrics & City Health

The top HUD displays critical city-wide indicators:

| Metric | Target / Range | Formula / Impact |
| :--- | :--- | :--- |
| **Budget** | $\ge \$0$ | Increases via taxes; decreases via construction, upkeep, and disaster repair costs. |
| **Population** | $\ge 5,000$ | Sum of residents across all residential tiles. Driven by migration demand. |
| **Jobs** | Matches worker share | Commercial tiles provide jobs. Ideal ratio: $\sim 0.6 \times \text{Population}$. |
| **Year** | 1 to 30 | Simulation advances one year per turn. Auto-speed advances 1 year every 5s. |
| **Happiness** | $\ge 60\%$ (Alert < 30%) | Weighted average of previous happiness and `happyTarget` (recreation, jobs, heat, disasters). |
| **Resilience** | $\ge 70 / 100$ | $40\% \times \text{Protected Pop} + 35\% \times \text{Heat Safety} + 25\% \times \text{Damage Avoided Ratio}$. |
| **Recreation** | Higher is better | Total recreational amenities from parks, wetlands, green roofs, and bioswales. |
| **Attractiveness** | Higher is better | Drives migration. Boosted by parks, water views, and jobs; penalized by flood risk and disasters. |

### Economic Balance
- **Taxes Collected Yearly**:
  $$\text{Revenue} = (\text{Population} \times \$2.50) + (\text{Filled Jobs} \times \$2.00)$$
- **Upkeep Incurred Yearly**: Sum of annual maintenance costs for roads, gray infrastructure, and nature-based amenities.

---

## Terrain & Biomes

Each procedurally generated map includes 6 tile classifications:

```
[Hills]        Elev: 0.72 - 1.00  (Natural flood safety, 1.5x build cost)
[Land]         Elev: 0.22 - 0.72  (Standard buildable terrain)
[Floodplain]   Elev: 0.04 - 0.22  (High flood frequency, wetland-exclusive)
[Coast Sand]   Elev: 0.04 - 0.12  (Adjacent to sea, highly vulnerable)
[River & Sea]  Elev: 0.00         (Water sources where floods originate)
```

1. **Water (River & Sea)**: Non-buildable. Water provides natural cooling (-0.06 heat) to adjacent land and a +0.05 land value boost for scenic waterfront properties, but serves as the origin point for storm surges and river spills.
2. **Floodplain**: Low-elevation ground within 4 tiles of water. High risk of regular inundation. **Only tiles where Wetlands can be restored.**
3. **Coastline Sand**: Sandy borders along the sea. Low elevation, highly prone to coastal flooding.
4. **Hills**: High elevation (> 0.72). Virtually immune to normal floods. **1.5x construction cost penalty** for roads, residential, and commercial zones due to steep grading.
5. **Standard Land**: Flat, fertile ground ideal for initial development and parks.

---

## Infrastructure & Tool Catalog

### Development Tools

| Item | Cost | Upkeep | Capacity | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Road** | \$60 | \$3/yr | Connects zones | **Required**: Residential and commercial zones only grow if within **2 tiles** of a road. Adds minor heat (+0.06). |
| **Residential** | \$300 | \$0 | Up to $\sim 80$ people | Homes generate \$2.50/resident/yr. Capacity scales with local Land Value. Fragile to flooding (\$2,000 repair base). |
| **Commercial** | \$400 | \$0 | Up to $\sim 60$ jobs | Provides employment. Generates \$2.00/filled job/yr and boosts nearby land value (+0.02). Adds heat (+0.08). |

### Gray Infrastructure
*Hard-engineered concrete structures providing immediate, reliable defense against moderate events, but carrying high upkeep and vulnerability to extreme overtopping.*

| Item | Cost | Upkeep | Protection / Effect | Failure Risk | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Levee / Seawall** | \$3,000 | \$250/yr | Blocks floods up to **0.40** deep within **radius 2** | **15% breach rate** in extreme storms | Reduces land value (-0.04) and attractiveness (-3). If breached or overtopped, unleashes a **+0.12 surge penalty**. |
| **Storm Drain** | \$1,500 | \$80/yr | Lowers flood depth by **0.10** within **radius 3** | **25% clogging rate** in extreme storms | Max gray reduction on any tile is capped at 0.20 depth. |
| **Cooling Center** | \$2,000 | \$150/yr | Cuts heat wave harm by **60%** within **radius 4** | 0% | Does not lower ambient air temperatures; protects residents from heat illness. |

### Nature-Based Solutions (NBS)
*Ecological infrastructure that restores natural hydrological and thermodynamic cycles. Low cost and low upkeep, maturing over several years to provide compounding benefits.*

| Item | Cost | Upkeep | Flood Mitigation | Cooling | Maturity | Co-Benefits | Placement |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Wetland** | \$500 | \$10/yr | -0.14 depth (radius 3) | +0.12 cooling | 3 years | +6 Recreation, +4 Attract, +0.06 Land Value | **Floodplain only** |
| **Park / Trees** | \$350 | \$15/yr | -0.03 depth (tile) | +0.20 cooling | 2 years | +10 Recreation, +3 Attract, +0.08 Land Value | Any dry land |
| **Green Roof** | \$200 | \$5/yr | -0.03 depth (tile) | +0.08 cooling | 1 year | +1 Recreation, +1 Attract, +0.03 Land Value | Upgrades Res / Com |
| **Bioswale** | \$120 | \$3/yr | -0.05 depth (radius 1) | +0.03 cooling | 1 year | +1 Recreation, +1 Attract, +0.02 Land Value | Any dry land |

> [!NOTE]
> **Maturity Mechanic**: Nature-based systems start at **25% efficiency** in Year 1 and reach **100% efficiency** after their maturity duration. Plan ahead!

### Utility Tools
- **Inspect**: Click any tile to review detailed data: elevation, raw vs. net flood risk, heat island score, land value, population/jobs, road access, and flood history.
- **Demolish** (\$20): Clears buildings, roads, or ruins. Abandoned buildings must be demolished before the land can be reused.

---

## Climate Hazards & Mechanics

Both floods and heat waves become **more frequent and more intense** with each passing year.

### Riverine & Coastal Flooding
- **Annual Probability**: Starts at **30%** in Year 1 and rises by **+1.5%/year** (up to 75%).
- **Severity**: Base severity increases by **+4.5%/year**.
- **Extreme Events**: The probability of an *Extreme Flood* increases by **+0.7%/year**. Extreme floods multiply severity by **1.5x**.
- **Flood Mechanics**:
  1. Water rises to a calculated level based on severity.
  2. Water spreads from river and sea into connected tiles whose elevation is below water level.
  3. Nature-based absorption (bioswales, wetlands, parks, green roofs) reduces water depth (capped at 0.20).
  4. Storm drains reduce water depth (capped at 0.20).
  5. Levees block water up to 0.40 depth within their 2-tile radius.
- **Levee Overtopping & Breaching**:
  - If flood depth exceeds 0.40, the levee is **overtopped**.
  - In extreme floods, wet levees have a **15% chance to breach**.
  - When a levee fails, it is destroyed, leaves a scar, and unleashes a catastrophic **surge (+0.12 extra depth)** on surrounding tiles.
- **Building Abandonment**:
  - Any residential or commercial building flooded **twice within 3 years** is permanently abandoned.
  - Residents/workers flee, tax revenue drops to zero, and the site becomes a blighted ruin until demolished.

### Urban Heat Island & Heat Waves
- **Annual Probability**: Starts at **25%** in Year 1 and rises by **+2.0%/year** (up to 80%).
- **Intensity**: Increases by **+3.0%/year**.
- **Urban Heat Island (UHI)**:
  - Base heat is 0.25 (cooler on hills: -0.03).
  - Paved roads and commercial buildings generate heat (up to +0.08 per tile).
  - Trees, parks, wetlands, green roofs, and water bodies radiate cooling to neighbors within 2 tiles.
- **Heat Harm**:
  - When a heat wave strikes, tiles with heat scores above the **0.40 harm threshold** suffer population loss and major happiness drops.
  - Cooling centers reduce population loss by **60%** for homes within radius 4.

---

## Analytical Overlays

Use the three overlays on the left panel to assess your city's vulnerabilities:

1. **FLOOD Overlay**: Visualizes water depth during a standard "Design Flood".
   - *Blue (Deep)*: Water depth > 0.05 (damages structures).
   - *Cyan (Shallow)*: Runoff present, but below damage threshold.
   - *Pale Green (Protected)*: Tiles that would flood without your levees, drains, or wetlands.
2. **HEAT Overlay**: Displays surface temperature and UHI intensity.
   - *Cyan*: Cool ($\le 0.35$).
   - *Yellow/Orange*: Moderate warming ($0.35 - 0.65$).
   - *Red*: Extreme heat ($> 0.80$, high health risk during heat waves).
3. **VALUE Overlay**: Displays local land value ($0.0 - 1.0$).
   - Boosted by parks, water views, and commercial proximity.
   - Suppressed by flood risk, heat, and ugly seawalls.

---

## Proven Strategies for Success

### Phase 1: Foundation (Years 1–10)
- **Respect the Topography**: Do not build homes directly on low-elevation floodplains. Reserve floodplains for restored **Wetlands**.
- **Zone on Higher Ground**: Build your first residential neighborhoods on mid-to-high elevation ground near roads.
- **Plant Early**: Wetlands and parks take 2 to 3 years to reach full maturity. Planting them in Years 1–3 ensures they are fully functional when hazards intensify.
- **Balance Jobs and Housing**: For every 10 residential houses, build roughly 1 commercial shop to keep the `jobFactor` healthy ($\approx 0.8 - 1.0$).

### Phase 2: Urban Expansion & Green Upgrades (Years 11–20)
- **Install Green Roofs**: As commercial and residential zones fill up, retrofit them with **Green Roofs** (\$200). They provide immediate cooling, water retention, and happiness boosts without consuming empty land.
- **Deploy Bioswales**: Place bioswales along street corridors to soak up road runoff cheaply (\$120).
- **Establish Cooling Centers**: Position cooling centers near dense residential clusters that lack tree canopy.

### Phase 3: Surviving the Extreme Decades (Years 21–30)
- **Beware the "Levee Trap"**: Do not rely solely on levees to protect massive populations in low-lying bowls. An extreme flood breach will cause catastrophic surges and mass abandonment.
- **Manage Upkeep**: Keep track of annual maintenance costs. Too many storm drains and levees can drain your budget into bankruptcy during calm years.
- **Monitor Resilience**: Maintain resilience above 70 by ensuring at least 80%+ of your population is shielded from flood depths and extreme heat.

---

## Debug Mode & Testing

For testing, sandbox experimentation, or educational demonstrations, launch the game with `?debug=1`:
```
http://localhost:8000/?debug=1
```
or open `index.html?debug=1` in your browser.

### Debug Features
- **FLOOD! (Key: F)**: Forces an immediate 1.3x severity flood event to test defenses.
- **HEAT! (Key: H)**: Forces an immediate 1.2x heat wave event.
- **+10K Button**: Grants an instant \$10,000 budget injection.
- **Values Overlay (Key: V)**: Overlays raw numbers directly on each map tile:
  - Top-left: Elevation ($0 - 9$).
  - Bottom-right (Orange): Heat score ($0 - 9$).
  - Bottom-left (Cyan): Net flood risk depth.
