var topologyJson =
  "https://raw.githubusercontent.com/no-stack-dub-sack/testable-projects-fcc/master/src/data/choropleth_map/counties.json";

var educationJson =
  "https://raw.githubusercontent.com/no-stack-dub-sack/testable-projects-fcc/master/src/data/choropleth_map/for_user_education.json";

//save json data in array for Promises
var dataFiles = [topologyJson, educationJson];

Promise.all(dataFiles.map(url => d3.json(url))).then(function(values) {
  //topology json
  var us = values[0];

  //education data
  var data = values[1];

  //create Map of county ids & education rates
  var dataMap = new Map(data.map(d => [d.fips, d.bachelorsOrHigher]));

  var tempColor;

  var width = 960,
    height = 700,
    path = d3.geoPath();

  var color = d3
    .scaleQuantize()
    .domain([2.6, 75.1]) //range of educational attainment
    .range(d3.schemeReds[9]);

  var xScale = d3
    .scaleLinear()
    .domain(d3.extent(color.domain()))
    .rangeRound([600, 860]);

  //define tooltip
  var tooltip = d3
    .select("body")
    .append("div")
    .attr("id", "tooltip")
    .style("position", "absolute")
    .style("padding", "0 10px")
    .style("background", "white")
    .style("opacity", 0)
    .style("visibilty", "hidden");

  //define svg area
  var choropleth = d3
    .select("#chloropleth")
    .append("svg")
    .attr("height", height)
    .attr("width", width);

  //
  var g = choropleth
    .append("g")
    .attr("id", "legend")
    .attr("transform", "translate(0,40)");

  //draw legend
  g.selectAll("g")
    .data(color.range().map(d => color.invertExtent(d)))
    .enter()
    .append("rect")
    .attr("height", 8)
    .attr("x", d => xScale(d[0]))
    .attr("width", d => xScale(d[1]) - xScale(d[0]))
    .attr("fill", d => color(d[0]));

  //define group for drawing topology - draw counties
  choropleth
    .append("g")
    .selectAll("path")
    .data(topojson.feature(us, us.objects.counties).features)
    .enter()
    .append("path")
    .attr("fill", d => color(dataMap.get(d.id))) //add color fill based on educational attainment
    .attr("class", "county")
    .attr("data-fips", d => d.id)
    .attr("data-education", d => dataMap.get(d.id))
    .attr("d", path)
    .on("mouseover", function(d) {
      tooltip
        .transition()
        .duration(200)
        .style("opacity", 0.9)
        .style("visibility", "visible");
      tooltip
        .html(dataMap.get(d.id))
        .attr("data-education", dataMap.get(d.id))
        .style("left", d3.event.pageX - 35 + "px")
        .style("top", d3.event.pageY - 35 + "px");

      //add fill on mouseover
      tempColor = this.style.fill;
      d3.select(this).style("fill", "white");
    })
    .on("mouseout", function(d) {
      tooltip.html("").style("visibility", "hidden");
      d3.select(this).style("fill", tempColor);
    });

  //add white border to states
  choropleth
    .append("path")
    .datum(
      topojson.mesh(us, us.objects.states, function(a, b) {
        return a !== b;
      })
    )
    .attr("fill", "none")
    .attr("stroke", "white")
    .attr("stroke-linejoin", "round")
    .attr("d", path);
});
