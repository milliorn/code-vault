import { margin, width, height } from "./constants.js";

export const div = d3
  .select("body")
  .append("div")
  .attr("class", "tooltip")
  .attr("id", "tooltip")
  .style("opacity", 0);
  
export const svg = d3
  .select("body")
  .append("svg")
  .attr("class", "scatterPlot")
  .attr("height", height + margin.top + margin.bottom)
  .attr("width", width + margin.left + margin.right)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
