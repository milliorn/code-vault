document.addEventListener("DOMContentLoaded", async () => {
  const dataset = await fetch(
    "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json"
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));

  const height = 768;
  const padding = 64;
  const width = 1024;

  const regexHypen = /-[0-9]{2}/;
  const regexMonth = /[0-9]{2}/;
  const regexYear = /[0-9]{4}/;

  const scaleX = d3
    .scaleLinear()
    .domain([1947, 2015.75])
    .range([padding, width - padding]);

  const scaleY = d3
    .scaleLinear()
    .domain([0, d3.max(dataset.data, (d) => d[1])])
    .range([height - padding, padding]);

  const tooltip = d3
    .select("#rendering")
    .append("div")
    .attr("id", "tooltip")
    .style("background-color", "lightgray")
    .style("border-radius", "4px")
    .style("font-size", "1.125rem")
    .style("height", "5rem")
    .style("line-height", "1.75rem")
    .style("opacity", 0)
    .style("position", "absolute")
    .style("width", "9rem");

  const displayDate = d3
    .select("#tooltip")
    .append("div")
    .style("height", "2.5rem")
    .style("padding-top", "0.625rem")
    .style("width", "9rem");

  const displayGdp = d3
    .select("#tooltip")
    .append("div")
    .style("height", "2.5rem")
    .style("padding-bottom", "0.625rem")
    .style("width", "10rem");

  const svg = d3
    .select("#rendering")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("id", "title")
    .style("background-color", "white");

  svg
    .selectAll("rect")
    .data(dataset.data)
    .enter()
    .append("rect")
    .attr("x", (d) => {
      const month = Number(d[0].match(regexHypen)[0].match(regexMonth));
      const year = Number(d[0].match(regexYear));

      if (month === 1) {
        return scaleX(year);
      } else if (month === 4) {
        return scaleX(year + 0.25);
      } else if (month === 7) {
        return scaleX(year + 0.5);
      } else if (month === 10) {
        return scaleX(year + 0.75);
      }
    })
    .attr("class", "bar")
    .attr("data-date", (d) => d[0])
    .attr("data-gdp", (d) => d[1])
    .attr("fill", "green")
    .attr("height", (d) => height - scaleY(d[1]) - padding)
    .attr("width", (width - padding - padding) / dataset.data.length)
    .attr("y", (d) => scaleY(d[1]))
    .on("mouseover", (d) => {
      tooltip
        .data(d)
        .attr("data-date", () => d[0])
        .attr("data-gdp", () => d[1])
        .style("left", () => event.pageX + "px")
        .style("opacity", 1)
        .style("top", () => "24rem");

      const month = Number(d[0].match(regexHypen)[0].match(regexMonth));
      const year = Number(d[0].match(regexYear));

      let quarter;

      if (month === 1) {
        quarter = 1;
      } else if (month === 4) {
        quarter = 2;
      } else if (month === 7) {
        quarter = 3;
      } else if (month === 10) {
        quarter = 4;
      }

      displayDate.data(d).text(`Q${quarter} ${year}`);

      displayGdp.data(d).text(`$${d[1]} Billion`);
    })
    .on("mouseout", () => {
      tooltip.style("opacity", 0);
    });

  svg
    .append("g")
    .attr("transform", `translate(0, ${height - padding})`)
    .call(d3.axisBottom(scaleX).tickFormat(d3.format("d")))
    .attr("class", "tick")
    .attr("id", "x-axis");

  svg
    .append("g")
    .attr("transform", `translate( ${padding}, 0)`)
    .call(d3.axisLeft(scaleY))
    .attr("id", "y-axis")
    .attr("class", "tick");

  d3.select("#gdp").text(
    dataset.frequency.charAt(0).toUpperCase() +
      dataset.frequency.slice(1) +
      " " +
      dataset.source_name
  );

  const formattedDate = new Date(dataset.updated_at).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  d3.select("#updated").text("Updated on " + formattedDate);
});
