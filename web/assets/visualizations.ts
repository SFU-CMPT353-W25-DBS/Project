import type { IVisualizationData } from "~/components/Visuals/VisualizationIFrame.vue";

const knownSources = {
  geographicalNames: {
    author: "Government of Canada",
    name: "Geographical Names in Canada",
    url: "https://natural-resources.canada.ca/maps-tools-publications/maps/geographical-names-canada/download-geographical-names-data",
  },
  populationCensus: {
    author: "Statistics Canada",
    name: "Population and dwelling counts: Canada, provinces and territories, and census subdivisions (municipalities)",
    url: "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=9810000202&pickMembers%5B0%5D=1.4568",
  },
  outages: {
    author: "BC Hydro",
    name: "Power Outages in BC (Collected by @outages/bchydro-outages on GitHub)",
    url: "https://github.com/outages/bchydro-outages",
  },
  substations: {
    author: "ja22_sk9655 (ESRI)",
    name: "Substations in BC",
    url: "https://www.arcgis.com/home/item.html?id=ef04dc8231c9491e804a008e5faa7d3a#overview",
  },
  urbanRural: {
    author: "Statistics Canada",
    name: "Urban and rural areas - 'Urban' versus 'rural' variant",
    url: "https://www23.statcan.gc.ca/imdb/p3VD.pl?Function=getVD&TVD=113331&CVD=113332&CLV=0&MLV=2&D=1&adm=0&dis=0",
  },
} as const satisfies Record<
  string,
  NonNullable<IVisualizationData["sources"]>[number]
>;

export default [
  {
    fileNameNoExt: "outageCauses",
    showDescription:
      "Shows the cause of power outages in BC before and after filtering the data.",
    sources: [knownSources.outages],
  },
  {
    fileNameNoExt: "datasetVisualization",
    showTitle: "Visualization of Used Datasets",
    showDescription: "Shows the geospatial datasets we used in our analysis.",
    sources: [
      knownSources.outages,
      knownSources.substations,
      knownSources.geographicalNames,
      knownSources.populationCensus,
      knownSources.urbanRural,
    ],
  },
  {
    fileNameNoExt: "outage_length_vs_distance",
    showTitle:
      "Mean Power Outage Length vs Distance to Various Locations in BC",
    showDescription:
      "Shows the relationship between the distance to various locations in BC and the mean duration of power outages",
    sources: [
      knownSources.outages,
      knownSources.substations,
      knownSources.geographicalNames,
      knownSources.populationCensus,
      knownSources.urbanRural,
    ],
  },
  {
    fileNameNoExt: "outageCountVsDistance",
    showTitle: "Number of Power Outages vs Distance to Various Locations in BC",
    sources: [
      knownSources.outages,
      knownSources.substations,
      knownSources.geographicalNames,
      knownSources.populationCensus,
      knownSources.urbanRural,
    ],
  },
  {
    fileNameNoExt: "regions_table",
    showTitle: "Pairwise Games-Howell post-hoc Test Results",
    showDescription:
      "Shows the results of the Games-Howell test comparing the distribution of outage durations for different regions",
  },
  {
    fileNameNoExt: "mapOfDistanceApril2025",
    showTitle: "Visualization of Datasets",
    showDescription:
      "Shows the power outages that have occured in the month of April 2025, prior to April 12th.",
    sources: [
      knownSources.outages,
      knownSources.substations,
      knownSources.geographicalNames,
      knownSources.populationCensus,
      knownSources.urbanRural,
    ],
  },
  {
    fileNameNoExt: "regions_timeouts",
    showTitle: "Outages Duration per Region",
    showDescription:
      "Shows the distribution of the outage durations in different BC regions.",
  },
  {
    fileNameNoExt: "outagesPerCapitaVsDistance",
    showTitle: "Outages per Capita vs Distances",
    showDescription:
      "Shows the relationship between outages to various locations in BC and the expected number of outages each person would experience.",
    sources: [
      knownSources.outages,
      knownSources.substations,
      knownSources.geographicalNames,
      knownSources.populationCensus,
      knownSources.urbanRural,
    ],
  },
  {
    fileNameNoExt: "outagesByRegion",
    showDescription: "Shows the raw number of outages in each of the 7 regions of BC defined by BC Hydro",
    sources: [
      knownSources.outages
    ]
  }
] satisfies IVisualizationData[];
