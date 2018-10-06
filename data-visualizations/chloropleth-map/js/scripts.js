var topologyJson =
  "https://raw.githubusercontent.com/no-stack-dub-sack/testable-projects-fcc/master/src/data/choropleth_map/counties.json";

var educationJson =
  "https://raw.githubusercontent.com/no-stack-dub-sack/testable-projects-fcc/master/src/data/choropleth_map/for_user_education.json";

//save json data in array for Promises
var data = [topologyJson, educationJson];

Promise.all(data.map(url => d3.json(url))).then(function(values) {
  //topology json
  var us = values[0];

  var width = 960,
    height = 700,
    path = d3.geoPath();

  //define svg area
  var choropleth = d3
    .select("#chloropleth")
    .append("svg")
    .attr("height", height)
    .attr("width", width);

  //define group for drawing topology
  choropleth
    .append("g")
    .attr("class", "counties")
    .selectAll("path")
    .data(topojson.feature(us, us.objects.counties).features)
    .enter()
    .append("path")
    .attr("d", path);

  //add borders to counties
  choropleth
    .append("path")
    .attr("class", "county-borders")
    .attr(
      "d",
      path(
        topojson.mesh(us, us.objects.counties, function(a, b) {
          return a !== b;
        })
      )
    );
});
