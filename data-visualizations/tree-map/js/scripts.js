var kickstarterJson =
  "https://cdn.rawgit.com/freeCodeCamp/testable-projects-fcc/a80ce8f9/src/data/tree_map/kickstarter-funding-data.json";

var movieDataJson =
  "https://cdn.rawgit.com/freeCodeCamp/testable-projects-fcc/a80ce8f9/src/data/tree_map/movie-data.json";

var videoGameSalesJson =
  "https://cdn.rawgit.com/freeCodeCamp/testable-projects-fcc/a80ce8f9/src/data/tree_map/video-game-sales-data.json";

//save json data in array for Promises
var dataFiles = [kickstarterJson, movieDataJson, videoGameSalesJson];

Promise.all(dataFiles.map(url => d3.json(url))).then(function(values) {
  //define margin, width, height, color
  const margin = { top: 40, right: 10, bottom: 10, left: 10 },
    width = 960 - margin.right - margin.left,
    height = 500 - margin.top - margin.bottom,
    color = d3.scaleOrdinal(d3.schemeCategory20);

  //define treemap and its dimensions
  const treeMap = d3.treemap().size([width, height]);

  //draw map area
  const map = d3
    .select("#tree")
    .append("div")
    .style("position", "relative")
    .style("width", width + margin.left + margin.right)
    .style("height", height + margin.top + margin.bottom)
    .style("left", margin.left + "px")
    .style("top", margin.top + "px");

  //error check
  console.log("no errors");
});
