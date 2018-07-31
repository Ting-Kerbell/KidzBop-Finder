  /* Load the HTTP library */
  var http = require("http");

  /* Create an HTTP server to handle responses */

  http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }).listen(8888);

  function findSong(songName){
  	const RapidAPI = require('rapidapi-connect');
const rapid = new RapidAPI(*PROJECT*, *KEY*);

rapid.call('SpotifyPublicAPI', 'searchTracks', { 


}).on('success', (payload)=>{
	 /*YOUR CODE GOES HERE*/ 
}).on('error', (payload)=>{
	 /*YOUR CODE GOES HERE*/ 
});
  }