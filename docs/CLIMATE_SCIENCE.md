# The Climate Adaptation Science of Adaptasia

**Adaptasia** is an educational serious game designed to teach the dynamics of urban resilience, climate hazards, and infrastructure planning. This document outlines the real-world climate science, urban economics, and disaster risk management principles simulated in the game.

---

## Table of Contents

1. [Introduction: Cities on the Frontline](#1-introduction-cities-on-the-frontline)
2. [The Urban Heat Island (UHI) Effect](#2-the-urban-heat-island-uhi-effect)
   - [Thermal Dynamics & Albedo](#thermal-dynamics--albedo)
   - [Heat Equity & Tree Canopy Disparities](#heat-equity--tree-canopy-disparities)
   - [Cooling Interventions: Green vs. Gray](#cooling-interventions-green-vs-gray)
3. [Compound & Non-Stationary Flood Hazards](#3-compound--non-stationary-flood-hazards)
   - [The Breakdown of Stationarity](#the-breakdown-of-stationarity)
   - [Riverine vs. Coastal Flooding](#riverine-vs-coastal-flooding)
   - [Repetitive Losses & Abandonment](#repetitive-losses--abandonment)
4. [Gray Infrastructure vs. Nature-Based Solutions (NBS)](#4-gray-infrastructure-vs-nature-based-solutions-nbs)
   - [Gray Infrastructure: High Capital & Catastrophic Failure](#gray-infrastructure-high-capital--catastrophic-failure)
   - [Nature-Based Solutions: Compounding Benefits & Maturity Curves](#nature-based-solutions-compounding-benefits--maturity-curves)
   - [Soil Saturation & NBS Limitations](#soil-saturation--nbs-limitations)
5. [The "Levee Effect" & Moral Hazard](#5-the-levee-effect--moral-hazard)
6. [The Economics of Resilience: The 6-to-1 ROI](#6-the-economics-of-resilience-the-6-to-1-roi)
7. [Curated Scientific References](#7-curated-scientific-references)

---

## 1. Introduction: Cities on the Frontline

Over 55% of the global population resides in urban areas, a figure projected to reach nearly 70% by 2050. Cities are disproportionately located along coastlines, estuaries, and river valleys—geographies that historically favored commerce and agriculture, but now place concentrated populations in the direct path of intensifying climate hazards.

Adaptasia simulates a municipality grappling with this fundamental 21st-century challenge: how to accommodate population and economic growth without building deeper into harm's way.

---

## 2. The Urban Heat Island (UHI) Effect

### Thermal Dynamics & Albedo
In natural environments, incoming solar radiation is moderated by vegetation and permeable soils through **evapotranspiration**—the process by which plants draw water from the soil and release it as water vapor, cooling the ambient air.

In urban areas:
- **Impervious Surfaces**: Asphalt roads and concrete absorb up to 90% of solar radiation during the day and release this heat slowly through the night.
- **Waste Heat**: Concentrated commercial activities, HVAC systems, and traffic inject anthropogenic heat into the local boundary layer.
- **Microclimate Warming**: In Adaptasia, roads and commercial buildings directly increase a tile's heat score, creating heat islands that warm neighboring blocks.

### Heat Equity & Tree Canopy Disparities
Extreme heat is often referred to as a "silent killer" because it causes more annual fatalities in many countries than hurricanes, tornadoes, and floods combined. 

Furthermore, urban heat is not distributed equally. Historical redlining and inequitable capital allocation have left lower-income neighborhoods with significantly less tree canopy, wider asphalt corridors, and fewer parks. In Adaptasia:
- High-heat zones suffer direct population loss during heat waves when temperatures exceed the harm threshold ($0.40$).
- Residents living in green, well-treed neighborhoods stay protected and experience higher happiness.

### Cooling Interventions: Green vs. Gray
The game models two distinct approaches to heat mitigation:
1. **Source Reduction (Green Infrastructure)**: Shade trees, urban parks, bioswales, and green roofs cool the city physically through shade and evapotranspiration.
2. **Harm Reduction (Cooling Centers)**: Air-conditioned public facilities provide emergency relief for vulnerable populations during extreme events, cutting casualties by 60%, but do not lower ambient temperatures or alleviate the underlying urban heat island.

---

## 3. Compound & Non-Stationary Flood Hazards

### The Breakdown of Stationarity
In traditional civil engineering, flood defenses were designed under the assumption of **climate stationarity**—the idea that historical weather records accurately predict the probability and intensity of future extremes (e.g., the historical "100-year flood").

Under modern climate change, stationarity is no longer valid:
- Warmer air holds approximately **7% more moisture per $1^\circ\text{C}$ of warming** (the Clausius-Clapeyron relationship), leading to more intense, short-duration downpours.
- In Adaptasia, flood probability increases by **+1.5%/year** and severity increases by **+4.5%/year**, forcing the player to plan for future risks rather than relying on past conditions.

### Riverine vs. Coastal Flooding
Adaptasia's procedural map generator models an estuary where a river flows into the sea:
- **Riverine Inundation**: Heavy upstream precipitation causes riverbanks to spill over into low-lying floodplains.
- **Storm Surge**: Coastal winds and sea-level anomalies push marine water inland.
- The game simulates the hydraulic gradient: water flows through contiguous low-elevation cells, demonstrating that proximity and elevation are the primary determinants of raw physical exposure.

### Repetitive Losses & Abandonment
In the real world, the U.S. National Flood Insurance Program (NFIP) identifies **Severe Repetitive Loss (SRL)** structures—properties that flood repeatedly, incurring massive repair costs.

In Adaptasia:
- Any building that floods **twice within a 3-year window** is permanently abandoned.
- This models real-world community burnout, uninsurability, and displacement when development is repeatedly placed in active floodways.

---

## 4. Gray Infrastructure vs. Nature-Based Solutions (NBS)

A central theme in modern urban planning is the debate between "gray" (hard-engineered concrete) and "green" (ecosystem-based) adaptation.

```
┌───────────────────────────────────────┬───────────────────────────────────────┐
│ GRAY INFRASTRUCTURE (Levees / Drains) │ NATURE-BASED SOLUTIONS (Wetlands/Trees)│
├───────────────────────────────────────┼───────────────────────────────────────┤
│ • High upfront capital cost           │ • Lower capital cost                  │
│ • Immediate 100% operational capacity │ • Matures over 1 to 3 years           │
│ • Ongoing maintenance backlog         │ • Low, predictable upkeep             │
│ • Single-purpose (water barrier only) │ • Multi-functional co-benefits        │
│ • Brittle failure modes (surge hazard)│ • Graceful degradation (saturation)   │
└───────────────────────────────────────┴───────────────────────────────────────┘
```

### Gray Infrastructure: High Capital & Catastrophic Failure
- **Levees and Seawalls** are effective barriers up to their design capacity. However, when an extreme flood overtops or breaches a levee, water pours into the protected basin under high velocity, often causing more destruction than if no wall existed.
- **Storm Drains** are sized for a specific "design storm." During torrential events exceeding pipe capacity, or when debris clogs the grates, stormwater backs up into city streets.

### Nature-Based Solutions: Compounding Benefits & Maturity Curves
Nature-based solutions mimic natural hydrological functions:
- **Wetlands**: Act as giant sponges. One acre of natural wetland can store over a million gallons of floodwater, slowly releasing it while filtering contaminants.
- **Bioswales & Green Roofs**: Capture stormwater at the source, preventing street runoff from overwhelming municipal drainage systems.
- **Co-Benefits**: Unlike a concrete floodwall, a park or restored wetland provides daily recreational amenities, elevates adjacent property values, supports biodiversity, and lowers summer air temperatures.

### Soil Saturation & NBS Limitations
Ecosystems have physical limits. A soil or wetland has finite pore space; once saturated during prolonged torrential events, excess water can no longer infiltrate. Adaptasia reflects this by placing a **cap (0.20 depth)** on the maximum flood reduction that nature can provide on any single tile.

---

## 5. The "Levee Effect" & Moral Hazard

In 1945, geographer **Gilbert F. White** published his seminal thesis, *Human Adjustment to Floods*, establishing that:

> *"Floods are acts of God, but flood losses are largely acts of man."*

White identified the **"Levee Effect"**:
1. A municipality builds a concrete floodwall to protect existing farmland or low-density buildings.
2. The wall creates a **false sense of absolute security**.
3. Real estate developers build high-density housing, hospitals, and commercial centers directly behind the wall.
4. When a flood inevitably exceeds the wall's design capacity or causes a structural breach, the resulting damage and loss of life are vastly greater than the losses the wall was initially built to prevent.

Adaptasia simulates this dynamic directly: if a levee fails during an extreme storm, an extra **+0.12 surge depth** strikes the surrounding basin, causing catastrophic losses across any dense development placed in the levee shadow.

---

## 6. The Economics of Resilience: The 6-to-1 ROI

A landmark multi-year study by the **National Institute of Building Sciences (NIBS)** and FEMA examined decades of disaster mitigation grants across the United States. Their finding was definitive:

$$\text{Every } \$1 \text{ invested in pre-disaster hazard mitigation saves an average of } \$6 \text{ in future disaster recovery and replacement costs.}$$

In Adaptasia, this economic reality is demonstrated through the post-game reflection report:
- Players who invest early in wetlands, bioswales, and zoning controls consistently avoid tens of thousands of dollars in disaster repair costs.
- Players who neglect mitigation spend their entire budget repairing damaged buildings and cleaning up blighted ruins, eventually cascading into municipal bankruptcy.

---

## 7. Curated Scientific References

1. **National Institute of Building Sciences (NIBS)** (2019). *Natural Hazard Mitigation Saves: 2019 Report*. Washington, DC: NIBS.
2. **White, Gilbert F.** (1945). *Human Adjustment to Floods: A Geographical Approach to the Flood Problem in the United States*. Department of Geography Research Paper No. 29, University of Chicago.
3. **Intergovernmental Panel on Climate Change (IPCC)** (2022). *Climate Change 2022: Impacts, Adaptation, and Vulnerability. Contribution of Working Group II to the Sixth Assessment Report*. Cambridge University Press.
4. **Oke, T. R.** (1982). "The energetic basis of the urban heat island." *Quarterly Journal of the Royal Meteorological Society*, 108(455), 1–24.
5. **Garrick, D. et al.** (2020). "Managing extreme climate risks through nature-based solutions." *Nature Climate Change*, 10, 1075–1082.
6. **FEMA** (2020). *Building Community Resilience with Nature-Based Solutions: A Guide for Local Communities*. Federal Emergency Management Agency.
