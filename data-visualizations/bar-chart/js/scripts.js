d3.json(
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json"
).then(function(data) {
  var GDPs = [],
    dates = [],
    height = 400,
    width = 600;

  //Iterate through data object to get GDPs & Dates into array
  for (var i = 0; i < data.data.length; i++) {
    GDPs.push(data.data[i][1]);
    dates.push(new Date(data.data[i][0]));
  }

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
    .attr("width", 1)
    .attr("height", d => d)
    .attr("x", (d, i) => i)
    .attr("y", d => height - d);

  console.log("here");
});
