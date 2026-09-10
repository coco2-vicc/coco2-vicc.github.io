---
layout: about
title: about
permalink: /about
subtitle: 
nav: true
nav_order: 1
images:
  slider: true

profile:
  align: right
  #image: COCO_logo_final.pgn
  #image_circular: false
  more_info: 

selected_papers: false
social: false

announcements:
  enabled: false
  scrollable: true
  limit: 3

latest_posts:
  enabled: false
  scrollable: true
  limit: 3
---
The ocean is central to the global carbon cycle and provides a critical service to humanity by absorbing more than a quarter of anthropogenic CO<sub>2</sub> emissions every year. Despite tremendous efforts by the global scientific community, the lack of optimal observing tools to date has led to significant uncertainty in the ocean CO<sub>2</sub> sink and left gaps in our understanding of the underlying processes. COCO<sub>2</sub> will rapidly address the knowledge gaps currently preventing progress on constraining the ocean CO<sub>2</sub> sink by implementing a novel and scalable observing approach in the Southern Ocean. We will pair state-of-the-art technology in air-sea CO<sub>2</sub> observing on uncrewed surface vehicles (USVs) with adaptive, flexible observing design informed by our evolving understanding, explainable artificial intelligence methods, and Observing System Simulation Experiments (OSSEs) with numerical models. This new, open-source approach for optimizing ocean observing in the Southern Ocean has potential to accelerate solutions for a wide range of ocean observing challenges. COCO<sub>2</sub> will deliver critical data targeted to reduce the observation-based ocean CO<sub>2</sub> sink estimates in the annual Global Carbon Budget by 25% and advance our understanding of the processes driving air-sea CO<sub>2</sub> flux variability.

<p> <br> </p>

## Modeling

We have developed a proposed USV sampling strategy (Figure 1) based on observing system simulation experiments (OSSEs) using ocean models as a testbed (Heimdal et al., 2024). Testbeds allow assessment of reconstruction skill in the context of the available observations and the machine learning (ML) approach for interpolating sparse observations (Gloege et al., 2021). In a testbed, model pCO<sub>2</sub> output is sampled as the real-world observations and modeled driver data, such temperature, salinity, and ocean color, are used to train and reconstruct full-field pCO2. Comparison of the testbed-based reconstruction to the original full-field pCO<sub>2</sub> output indicates reconstruction skill. Using our pCO<sub>2</sub>-residual methodology (Bennington et al., 2022) with only the ship-based observations available in the Surface Ocean CO<sub>2</sub> Atlas (SOCAT), the mean 2018-2022 global ocean sink is too large by 0.2 Gt C/yr. With the additional USV sampling shown in Figure 1 (right), the global bias is reduced by 60%, to 0.08 Gt C/yr. In the Southern Ocean, the SOCAT-only bias (0.1 Gt C/yr) is reduced by 70%. Adding four USVs to the Southern Ocean can be expected to yield a 25% reduction in the GCB total estimated ocean CO<sub>2</sub> sink (SOCEAN) uncertainty of ±0.4 Gt C/yr. 

<p> <br> </p>

<div style="height: 40px;"></div>

{% include figure.liquid
loading="eager"
path="assets/img/about_gallery/COCO_map_Heimdal2024.png"
class="img-fluid rounded z-depth-1 mx-auto d-block w-100"
%}

Figure 1. Reducing bias in air-sea CO<sub>2</sub> fluxes by adding four USVs in austral winter. (left) In our model testbed, we perform an OSSE to assess bias of 2018-2022 air-sea CO<sub>2</sub> fluxes reconstructed with machine learning. Significant reconstruction biases (green) are found in the Southern Ocean with only ship-based SOCAT sampling (light gray for 1-3 months of ship sampling, dark gray for 4+ months in 2018-2022) . (right) Adding four USVs (red) from mid-May through mid-October in these 5 years significantly reduces these biases. In this proposed work, we would re-optimize the USV sampling pattern each year, which may include targeting additional regions of bias in the Southern Ocean.

<p> <br> </p>

As part of this project, the ML techniques developed at Columbia/LDEO and CSIR/SU will be used to build interpolated maps of surface ocean pCO<sub>2</sub> based on predictor parameters with global coverage from satellites, like sea surface temperature and ocean color. Changes to the empirical relationships between predictor variables and new pCO<sub>2</sub> observations will be interrogated with XAI methods to probe the evolving relationships of physical and biological drivers, providing insights on the underlying processes and modes of variability. Taking into account these insights, OSSEs with these two methods will be performed to optimize our sampling strategy, allowing adjustments to the following year’s observational campaign. Our adaptive observing methodology will be repeated annually to rapidly demonstrate when and where data are most needed to quickly and efficiently reduce ocean CO<sub>2</sub> sink uncertainty. We will also make our cloud-based OSSE platform freely-available to other groups developing ML estimates of SOCEAN so they can contribute their ML methodologies to further improve these assessments.

<p> <br> </p>

## Observing

COCO<sub>2</sub> will deploy four USVs in the Southern Ocean during austral winter months from 2026 to 2030 to make direct measurements of air-sea CO<sub>2</sub> and related variables. We will plan USV routes each year using OSSEs to determine which data can most improve machine learning based data products, with the first year guided by the design of Heimdal et al. 2024 (Figure 1). The data collected in COCO2 will be shared with minimal latency via the SOCAT data product so that everyone can work with them to reduce critical uncertainties in the ocean carbon sink. COCO<sub>2</sub> data will first appear in SOCAT version 2027.





