<script setup lang="ts">
import type { IVisualizationData } from './components/Visuals/VisualizationIFrame.vue';


const visualizations = [
  {
    fileName: "datasetVisualization.html",
    showTitle: "Visualization of Used Datasets",
    showDescription: "Shows the geospatial datasets we used in our analysis.",
    sources: [
      {
        author: "Government of Canada",
        name: "Geographical Names in Canada",
        url: "https://natural-resources.canada.ca/maps-tools-publications/maps/geographical-names-canada/download-geographical-names-data",
      },
      {
        author: "Statistics Canada",
        name: "Population and dwelling counts: Canada, provinces and territories, and census subdivisions (municipalities)",
        url: "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=9810000202&pickMembers%5B0%5D=1.4568"
      },
      {
        author: "BC Hydro",
        name: "Power Outages in BC (Collected by @outages/bchydro-outages on Github)",
        url: "https://github.com/outages/bchydro-outages",
      },
      {
        author: "Unknown Author (ESRI)",
        name: "Substations in BC",
      }
    ]
  },
  {
    fileName: "outage_duration_by_distance.html",
    showTitle: "Outage Duration by Distance to Nearest Substation",
  }
] satisfies IVisualizationData[];
</script>

<template>
  <Header />

  <div
    v-for="visualization in visualizations"
    :key="visualization.fileName"
    class="visualization"
  >
    <LazyVisualsVisualizationIFrame
      v-bind="visualization"
      hydrateOnVisible
    />
  </div>
</template>

<style>
:root {
  font-family: "Inter", sans-serif;
}

body {
  margin: 0 !important;
}

.visualization {
  margin: 20px;
  border-radius: 18px;
}
</style>
