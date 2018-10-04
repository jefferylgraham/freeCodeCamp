d3.json(
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json"
).then(function(data) {
  var margin = { top: 20, right: 10, bottom: 20, left: 70 },
    height = 400 - margin.top - margin.bottom,
    width = 1500 - margin.right - margin.left,
    gridSize = Math.floor(width / 262),
    legendElementWidth = gridSize * 2;

  //Map the years from the data object
  var xYears = d3
    .set(data.monthlyVariance.map(entry => new Date(entry.year, 1, 1)))
    .values();

  var yMonths = d3.set(data.monthlyVariance.map(entry => entry.month)).values();
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  var xScale = d3
    .scaleLinear()
    .domain([new Date(xYears[0]), new Date(xYears[xYears.length - 1])])
    .range([0, width]);

  //Define x axis
  var xAxisValues = d3
    .scaleTime()
    .domain([new Date(xYears[0]), new Date(xYears[xYears.length - 1])])
    .range([0, width]);

  //Define x axis values
  var xAxis = d3
    .axisBottom(xAxisValues)
    .tickFormat(d3.timeFormat("%Y"))
    .ticks(d3.timeYear.every(10));

  //define y scale
  var yScale = d3
    .scaleBand()
    .domain(months)
    .range([0, height]);

  //define y axis values
  var yAxisValues = d3
    .scaleBand()
    .domain(months)
    .range([0, height]);

  //Define y axis values
  var yAxis = d3.axisLeft(yAxisValues);

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

  var colorArray = [
    "rgb(49, 54, 149)",
    "rgb(69, 117, 180)",
    "rgb(116, 173, 209)",
    "rgb(224, 243, 248)",
    "rgb(255, 255, 191)",
    "rgb(254, 224, 144)",
    "rgb(253, 174, 97)",
    "rgb(244, 109, 67)",
    "rgb(215, 48, 39)",
    "rgb(165, 0, 38)"
  ];

  var colors = d3
    .scaleQuantize()
    .domain(d3.extent(data.monthlyVariance, d => d.variance))
    .range([
      "rgb(49, 54, 149)",
      "rgb(69, 117, 180)",
      "rgb(116, 173, 209)",
      "rgb(224, 243, 248)",
      "rgb(255, 255, 191)",
      "rgb(254, 224, 144)",
      "rgb(253, 174, 97)",
      "rgb(244, 109, 67)",
      "rgb(215, 48, 39)",
      "rgb(165, 0, 38)"
    ]);

  //draw svg
  var heatmap = d3
    .select("#heatmap")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g") //append group for x,y axis values
    .attr("transform", "translate(70,0)")
    .selectAll("rect")
    .data(data.monthlyVariance)
    .enter()
    .append("rect")
    .attr("width", width / 262)
    .attr("height", height / 12)
    .attr("class", "cell")
    .attr("data-month", d => d.month - 1)
    .attr("data-year", d => d.year)
    .attr("data-temp", d => (8.66 + d.variance).toFixed(1))
    .attr("x", (d, i) => xScale(new Date(d.year, 1, 1)))
    .attr("y", (d, i) => yScale(months[d.month - 1]))
    .attr("fill", d => colors(d.variance))
    .on("mouseover", function(d, i) {
      //add tooltip
      tooltip
        .transition()
        .duration(200)
        .style("opacity", 0.9)
        .style("visibility", "visible");

      //tooltip location
      tooltip
        .html(d.year)
        .attr("data-year", d.year)
        .style("left", d3.event.pageX - 35 + "px")
        .style("top", d3.event.pageY - 35 + "px");

      //add fill on mouseover
      tempColor = this.style.fill;
      d3.select(this).style("fill", "white");
    })

    .on("mouseout", function(d) {
      tooltip.style("visibility", "hidden");
      d3.select(this).style("fill", tempColor);
    });

  var xGuide = d3
    .select("#heatmap svg")
    .append("g")
    .attr("id", "x-axis")
    .attr("transform", "translate(70," + height + ")")
    .call(xAxis);

  var yGuide = d3
    .select("#heatmap svg")
    .append("g")
    .attr("id", "y-axis")
    .attr("transform", "translate(70,0)")
    .call(yAxis);

  //add legend
  var colorScale = d3
    .scaleQuantile()
    .domain([
      0,
      10,
      d3.max(data, function(d) {
        return d.value;
      })
    ])
    .range(colorArray);

  var legend = d3
    .select("#heatmap svg")
    .selectAll(".legend")
    .data([0].concat(colorScale.quantiles()), function(d) {
      return d;
    });

  legend
    .enter()
    .append("g")
    .attr("class", "legend")
    .attr("id", "legend")
    .attr("transform", "translate(70,20)")
    .append("rect")
    .attr("x", function(d, i) {
      return legendElementWidth * i;
    })
    .attr("y", height)
    .attr("width", legendElementWidth)
    .attr("height", gridSize / 2)
    .style("fill", function(d, i) {
      return colorArray[i];
    });
});
