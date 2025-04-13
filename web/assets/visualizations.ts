import type { IVisualizationData } from "~/components/Visuals/VisualizationIFrame.vue";

export default [
  {
    fileNameNoExt: "datasetVisualization",
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
    fileNameNoExt: "outage_length_vs_distance",
    showTitle: "Mean Power Outage Length vs Distance to Various Locations in BC",
    showDescription: "Shows the relationship between the distance to various locations in BC and the mean duration of power outages",
    sources: [
      {
        author: "Statistics Canada",
        name: "Urban and rural areas - 'Urban' versus 'rural' variant",
        url: "https://www23.statcan.gc.ca/imdb/p3VD.pl?Function=getVD&TVD=113331&CVD=113332&CLV=0&MLV=2&D=1&adm=0&dis=0"
      }
    ]
  },
  {
    fileNameNoExt: "preCleanOutageCauses",
    showDescription: "Shows the cause of power outages in BC before filtering the data.",
  },
  {
    fileNameNoExt: "postCleanOutageCauses",
    showDescription: "Shows the cause of power outages in BC after filtering the data.",
  },
  {
    fileNameNoExt: "regions_table"
  }
] satisfies IVisualizationData[];