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

  //Define tooltip
  var tooltip = d3
    .select("body")
    .append("div")
    .style("position", "absolute")
    .style("padding", "0 10px")
    .style("background", "white")
    .style("opcaity", 0);

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
    .attr("height", 0)
    .attr("x", d => xScale(d))
    .attr("y", height)

    .on("mouseover", function(d) {
      //add tooltip
      tooltip
        .transition()
        .duration(200)
        .style("opacity", 0.9);

      //tooltip location
      tooltip
        .html(
          "<div style='fonts-size: 2rem; font-weight: bold'>" + d + "</div>"
        )
        .style("left", d3.event.pageX - 35 + "px")
        .style("top", "350px");

      //add fill on mouseover
      tempColor = this.style.fill;
      d3.select(this).style("fill", "yellow");
    })

    .on("mouseout", function(d) {
      d3.select(this).style("fill", tempColor);
    });

  //Add transition effect for chart
  myChart
    .transition()
    .attr("height", d => yScale(d))
    .attr("y", d => height - yScale(d))
    .delay((d, i) => i * 20)
    .duration(1000)
    .ease(d3.easeBounceOut);
});
