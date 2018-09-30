d3.json(
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json"
).then(function(data) {
  var margin = { top: 20, right: 0, bottom: 20, left: 40 },
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom,
    yRaceTimes = [],
    xRaceYears = [];

  var formatYear = d3.timeParse("%Y");

  //Push race years/entries into respective arrays
  for (var i = 0; i < data.length; i++) {
    xRaceYears.push(data[i].Year);
    yRaceTimes.push(data[i].Time);
  }

  //parse times for yRaceTimes
  var specifier = "%M:%S";
  var parsedTimes = yRaceTimes.map(function(d) {
    return d3.timeParse(specifier)(d);
  });

  //parse times for xRaceYears
  var specifier = "%Y";
  var parsedYears = xRaceYears.map(function(d) {
    return d3.timeParse(specifier)(d);
  });

  //define x scale
  var xScale = d3
    .scaleLinear()
    .domain([d3.min(parsedYears), d3.max(parsedYears)])
    .range([0, width]);

  //x axis values
  var xAxisValues = d3
    .scaleTime()
    .domain([d3.min(parsedYears), d3.max(parsedYears)])
    .range([0, width]);

  //x tick marks
  var xTicks = d3.axisBottom(xAxisValues).tickFormat(d3.timeFormat("%Y"));

  //define y scale
  var yScale = d3
    .scaleLinear()
    .domain([d3.min(parsedTimes), d3.max(parsedTimes)])
    .range([0, height]);

  //define y axis values
  var yAxisValues = d3
    .scaleTime()
    .domain([d3.min(parsedTimes), d3.max(parsedTimes)])
    .range([0, height]);

  //y tick marks
  var yTicks = d3.axisLeft(yAxisValues).tickFormat(d3.timeFormat("%M:%S"));

  //define tooltip
  var tooltip = d3
    .select("body")
    .append("div")
    .style("position", "absolute")
    .style("padding", "0 10px")
    .style("background", "white")
    .style("opacity", 0)
    .style("visibiltiy", "hidden");

  //draw the scatter points for the graph
  var myGraph = d3
    .select("#visual")
    .append("svg")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)
    .append("g") //append group for x,y axis values
    .attr("transform", "translate(" + margin.left + "," + margin.right + ")")
    .style("background", "#C9D7D6")
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", (d, i) => 0)
    .attr("cy", (d, i) => 0)
    .attr("r", 0)
    .attr("class", "dot")
    .style("fill", "blue")
    .on("mouseover", function(d) {
      //show tooltip on mouseover
      tooltip
        .transition()
        .duration(200)
        .style("visibility", "visible")
        .style("opacity", 0.9);
      tooltip
        .html(d)
        .style("left", d3.event.pageX - 35 + "px")
        .style("top", d3.event.pageY - 30 + "px");
    })
    .on("mouseout", function(d) {
      //hide tooltip on mouseout
      tooltip.style("visibility", "hidden");
    });

  //add x value guide
  var xGuide = d3
    .select("#visual svg")
    .append("g")
    .attr("id", "x-axis")
    .attr("transform", "translate(40," + height + ")")
    .call(xTicks);

  var yGuide = d3
    .select("#visual svg")
    .append("g")
    .attr("id", "y-axis")
    .attr("transform", "translate(40,0)")
    .call(yTicks);

  //add transition effect
  myGraph
    .transition()
    .attr("cx", (d, i) => xScale(parsedYears[i]))
    .attr("cy", (d, i) => yScale(parsedTimes[i]))
    .attr("r", 6)
    .attr("data-xvalue", (d, i) => parsedYears[i].getFullYear())
    .attr("data-yvalue", (d, i) => parsedTimes[i])
    .duration(1000)
    .ease(d3.easeCircleIn);
});
