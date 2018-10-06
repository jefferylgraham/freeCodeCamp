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

  var width = 960,
    height = 700,
    path = d3.geoPath();

  var color = d3
    .scaleQuantize()
    .domain([1, 10])
    .range(d3.schemeBlues[9]);

  var xScale = d3
    .scaleLinear()
    .domain(d3.extent(color.domain()))
    .rangeRound([600, 860]);

  //define svg area
  var choropleth = d3
    .select("#chloropleth")
    .append("svg")
    .attr("height", height)
    .attr("width", width);

  //
  var g = choropleth.append("g").attr("transform", "translate(0,40)");

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
    .attr("d", path);

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
