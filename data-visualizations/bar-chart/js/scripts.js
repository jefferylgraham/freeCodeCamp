d3.json(
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json"
).then(function(data) {
  var GDPs = [],
    dates = [],
    height = 400,
    width = 800;

  //Iterate through data object to get GDPs & Dates into array
  for (var i = 0; i < data.data.length; i++) {
    GDPs.push(data.data[i][1]);
    dates.push(new Date(data.data[i][0]));
  }

  //Define y scale
  var yScale = d3
    .scaleLinear()
    .domain([0, d3.max(GDPs)])
    .range([0, height]);

  //Define x scale
  var xScale = d3
    .scaleBand()
    .domain(GDPs)
    .range([0, width]);

  //Add chart of GDPs
  var myChart = d3
    .select("#visual")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .selectAll("rect")
    .data(GDPs)
    .enter()
    .append("rect")
    .attr("fill", "blue")
    .attr("width", xScale.bandwidth())
    .attr("height", d => yScale(d))
    .attr("x", d => xScale(d))
    .attr("y", d => height - yScale(d))

    .on("mouseover", function(d) {
      tempColor = this.style.fill;
      d3.select(this).style("fill", "yellow");
    })

    .on("mouseout", function(d) {
      d3.select(this).style("fill", tempColor);
    });
});
