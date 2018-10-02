d3.json(
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json"
).then(function(data) {
  var margin = { top: 0, right: 0, bottom: 0, left: 0 },
    height = 400 - margin.top - margin.bottom,
    width = 1500 - margin.right - margin.left;

  //Map the years from the data object
  var xYears = d3.set(data.monthlyVariance.map(entry => entry.year)).values();

  //Define x scale
  //Define x axis values

  //draw svg
  var svg = d3
    .select("#heatmap")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .style("background", "gray");
});
