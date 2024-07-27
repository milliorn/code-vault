import { margin, width, height } from "./constants.js";
import { formatTime, x, y, schemePaired } from "./d3-config.js";
import { svg, div } from "./svg.js";

fetch(
  "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/cyclist-data.json"
)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((d) => {
      d.Place = +d.Place;
      const epochTime = d.Time.split(":");
      d.Time = new Date(1970, 0, 1, 0, epochTime[0], epochTime[1]);
    });

    x.domain([
      d3.min(data, (d) => d.Year - 1),
      d3.max(data, (d) => d.Year + 1),
    ]);
    y.domain(d3.extent(data, (d) => d.Time));

    svg
      .append("g")
      .attr("class", "x axis")
      .attr("id", "x-axis")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).tickFormat(d3.format("d")))
      .append("text")
      .attr("class", "x-axis-label")
      .attr("x", width)
      .attr("y", -6)
      .style("text-anchor", "end")
      .text("Year");

    svg
      .append("g")
      .attr("class", "y axis")
      .attr("id", "y-axis")
      .call(d3.axisLeft(y).tickFormat(formatTime))
      .append("text")
      .attr("class", "label")
      .attr("dy", ".71em")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .style("text-anchor", "end")
      .text("Best Time (minutes)");

    svg
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("x", -160)
      .attr("y", -44)
      .style("font-size", 16)
      .style("font-weight", 700)
      .style("line-height", 24)
      .text("Time (Minutes)");

    svg
      .selectAll(".dot")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", "dot")
      .attr("cx", (d) => x(d.Year))
      .attr("cy", (d) => y(d.Time))
      .attr("data-xvalue", (d) => d.Year)
      .attr("data-yvalue", (d) => d.Time.toISOString())
      .attr("r", 6)
      .style("fill", (d) => schemePaired(d.dope !== ""))
      .on("mouseover", (event, d) => {
        div.style("opacity", 0.95);
        div.attr("data-year", d.Year);
        div
          .html(
            d.Name +
              " " +
              "<br/>" +
              "Year: " +
              d.Year +
              ", Time: " +
              formatTime(d.Time) +
              (d.dope ? "<br/><br/>" + d.dope : "")
          )
          .style("left", event.pageX + "px")
          .style("top", event.pageY - 24 + "px");
      })
      .on("mouseout", () => {
        div.style("opacity", 0);
      });

    svg
      .append("text")
      .attr("id", "title")
      .attr("text-anchor", "middle")
      .attr("x", width / 2)
      .attr("y", 0 - margin.top / 2)
      .style("font-size", "36px")
      .text("Alleged Drug Use in Cycling");

    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", 0 - margin.top / 2 + 25)
      .attr("text-anchor", "middle")
      .style("font-size", "24px")
      .text("Tour de France");

    const legend = svg
      .append("g")
      .attr("id", "legend")
      .selectAll("#legend")
      .data(schemePaired.domain())
      .enter()
      .append("g")
      .attr("class", "legend-label")
      .attr(
        "transform",
        (d, i) => "translate(0," + (height / 2 - i * 20) + ")"
      );

    legend
      .append("rect")
      .attr("height", 16)
      .attr("width", 16)
      .attr("x", width - 16)
      .style("fill", schemePaired);

    legend
      .append("text")
      .attr("dy", ".1rem")
      .attr("x", width - 24)
      .attr("y", 9)
      .style("text-anchor", "end")
      .text((d) => {
        return "Riders accused of doping";
      });
  });
