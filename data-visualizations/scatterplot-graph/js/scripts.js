d3.json(
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json"
).then(function(data) {
  var margin = { top: 0, right: 0, bottom: 0, left: 0 },
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom,
    yRaceTimes = [],
    xRaceYears = [];

  //Push race years/entries into respective arrays
  for (var i = 0; i < data.length; i++) {
    xRaceYears.push(data[i].Year);
    yRaceTimes.push(data[i].Seconds);
  }

  var xScale = d3
    .scaleLinear()
    .domain([1993, 2016])
    .range([0, width]);

  var yScale = d3
    .scaleLinear()
    .domain([d3.min(yRaceTimes), d3.max(yRaceTimes)])
    .range([0, height]);

  var myGraph = d3
    .select("#visual")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("background", "#C9D7D6")
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", (d, i) => 0)
    .attr("cy", (d, i) => 0)
    .attr("r", 0)
    .style("fill", "blue")
    .on("mouseover", function(d) {
      console.log(this);
    })
    .on("mouseout", function(d) {
      //
    });

  //add transition effect
  myGraph
    .transition()
    .attr("cx", (d, i) => xScale(data[i].Year))
    .attr("cy", (d, i) => yScale(data[i].Seconds))
    .attr("r", 5)
    .duration(1000)
    .ease(d3.easeCircleIn);
});
