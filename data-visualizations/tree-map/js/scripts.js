var kickstarterJson =
  "https://cdn.rawgit.com/freeCodeCamp/testable-projects-fcc/a80ce8f9/src/data/tree_map/kickstarter-funding-data.json";

var movieDataJson =
  "https://cdn.rawgit.com/freeCodeCamp/testable-projects-fcc/a80ce8f9/src/data/tree_map/movie-data.json";

var videoGameSalesJson =
  "https://cdn.rawgit.com/freeCodeCamp/testable-projects-fcc/a80ce8f9/src/data/tree_map/video-game-sales-data.json";

//save json data in array for Promises
var dataFiles = [kickstarterJson, movieDataJson, videoGameSalesJson];

Promise.all(dataFiles.map(url => d3.json(url))).then(function(values) {
  //test json data
  let data = values[1];

  //define margin, width, height, color
  const margin = { top: 40, right: 10, bottom: 10, left: 10 },
    width = 960 - margin.right - margin.left,
    height = 600 - margin.top - margin.bottom,
    color = d3.scaleOrdinal(d3.schemeCategory10);

  //Define tooltip
  var tooltip = d3
    .select("body")
    .append("div")
    .attr("id", "tooltip")
    .style("position", "absolute")
    .style("padding", "0 10px")
    .style("background", "white")
    .style("opacity", 0)
    .style("visibilty", "hidden");

  //draw svg
  var map = d3
    .select("#tree")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("background", "#C9D7D6");

  //add group to svg
  map.append("g");

  var treemapLayout = d3.treemap().size([width, height]);

  var root = d3
    .hierarchy(data)
    .sum(d => d.value)
    .sort((a, b) => b.height - a.height || b.value - a.value);

  var tree = treemapLayout(root);

  var nodes = d3
    .select("#tree svg g")
    .selectAll("g")
    .data(root.descendants())
    .enter()
    .append("g")
    .attr("transform", d => "translate(" + d.x0 + "," + d.y0 + ")");

  nodes
    .append("rect")
    .attr("class", "tile")
    .attr("width", d => d.x1 - d.x0)
    .attr("height", d => d.y1 - d.y0)
    .attr("data-name", function(d) {
      return d.data.name;
    })
    .attr("data-category", function(d) {
      return d.data.category;
    })
    .attr("data-value", function(d) {
      return d.data.value;
    })
    .attr("fill", d => color(d.data.category))
    .on("mouseover", function(d) {
      tooltip
        .transition()
        .duration(200)
        .style("opacity", 0.9)
        .style("visibility", "visible");
      tooltip
        .html(d.data.value)
        .attr("data-value", d.data.value)
        .style("left", d3.event.pageX + "px")
        .style("top", d3.event.pageY + "px");
    })
    .on("mouseout", function(d) {
      tooltip.html("").style("visibility", "hidden");
    });

  nodes
    .append("text")
    .attr("dx", 4)
    .attr("dy", 14)
    .text(d => d.data.name);
});
