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
  let data = values[0];

  //define margin, width, height, color
  const margin = { top: 40, right: 10, bottom: 10, left: 10 },
    width = 960 - margin.right - margin.left,
    height = 600 - margin.top - margin.bottom,
    color = d3.scaleOrdinal(d3.schemeCategory20);

  //draw svg
  var map = d3
    .select("#tree")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("background", "#C9D7D6");

  //add group to svg
  map.append("g");

  //error check
  console.log(tree);
});
