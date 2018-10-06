var kickstarterJson =
  "https://cdn.rawgit.com/freeCodeCamp/testable-projects-fcc/a80ce8f9/src/data/tree_map/kickstarter-funding-data.json";

var movieDataJson =
  "https://cdn.rawgit.com/freeCodeCamp/testable-projects-fcc/a80ce8f9/src/data/tree_map/movie-data.json";

var videoGameSalesJson =
  "https://cdn.rawgit.com/freeCodeCamp/testable-projects-fcc/a80ce8f9/src/data/tree_map/video-game-sales-data.json";

//save json data in array for Promises
var dataFiles = [kickstarterJson, movieDataJson, videoGameSalesJson];

Promise.all(dataFiles.map(url => d3.json(url))).then(function(values) {
  console.log(values);
});
