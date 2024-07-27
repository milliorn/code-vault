import { width, height } from "./constants.js";

const formatTime = d3.timeFormat("%M:%S");
const x = d3.scaleLinear().range([0, width]);
const y = d3.scaleTime().range([0, height]);
const schemePaired = d3.scaleOrdinal(d3.schemePaired);

export { formatTime, x, y, schemePaired };
