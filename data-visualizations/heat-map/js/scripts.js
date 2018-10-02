d3.json(
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json"
).then(function(data) {
  var margin = { top: 0, right: 0, bottom: 0, left: 0 },
    height = 400 - margin.top - margin.bottom,
    width = 1500 - margin.right - margin.left;

  //Map the years from the data object
  var xYears = d3.set(data.monthlyVariance.map(entry => entry.year)).values();

  //define x scale
  //Define x axis values
  var xAxisValues = d3
    .scaleTime()
    .domain([new Date(xYears[0]), new Date(xYears[xYears.length - 1])])
    .range([0, width]);

  //define x tick marks
  var xTicks = d3.axisBottom(xAxisValues).ticks(d3.timeYear.every(5));

  //draw svg area
  var myChart = d3
    .select("#heatmap")
    .append("svg")
    .attr("height", height)
    .attr("width", width)
    .append("g")
    .attr("transform", "translate(20,0)")
    .style("background", "orange");

  var xGuide = d3
    .select("#heatmap svg")
    .append("g")
    .attr("id", "x-axis")
    .attr("transform", "translate(40,380)")
    .call(xTicks);
});
