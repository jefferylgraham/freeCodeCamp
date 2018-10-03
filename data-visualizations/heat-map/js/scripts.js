d3.json(
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json"
).then(function(data) {
  var margin = { top: 20, right: 10, bottom: 20, left: 70 },
    height = 400 - margin.top - margin.bottom,
    width = 1500 - margin.right - margin.left;

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

  console.log(new Date(xYears[0]));
  console.log(new Date(data.monthlyVariance[0].year, 1, 1));

  var color = d3
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
    .attr("x", (d, i) => xScale(new Date(d.year, 1, 1)))
    .attr("y", (d, i) => yScale(months[d.month - 1]))
    .attr("fill", d => color(d.variance));

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

  console.log("here");
});
