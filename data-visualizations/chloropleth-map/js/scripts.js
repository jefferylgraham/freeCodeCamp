var topologyUrl =
  "https://raw.githubusercontent.com/no-stack-dub-sack/testable-projects-fcc/master/src/data/choropleth_map/counties.json";

d3.json(topologyUrl).then(function(us) {
  var width = 960,
    height = 700,
    path = d3.geoPath();

  var choropleth = d3
    .select("#chloropleth")
    .append("svg")
    .attr("height", height)
    .attr("width", width);

  choropleth
    .append("g")
    .attr("class", "counties")
    .selectAll("path")
    .data(topojson.feature(us, us.objects.counties).features)
    .enter()
    .append("path")
    .attr("d", path);

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
