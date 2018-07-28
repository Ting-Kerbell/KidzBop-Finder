/* TODO: ADD TRACK VIA https://github.com/ddanninger/node-gracenote

Lyrics from Genius API
Find streaming api
Server shit
Client side stuff
video not looping >:(

*/
var Gracenote = require("node-gracenote");
/* Auth info */
var client_id =  "1739837544-B5D728286C459FD6DF9650917CB4829F"
var client_tag = "B5D728286C459FD6DF9650917CB4829F"
var userId = "25433196972537149-3F34C6250B9E6292589BD8BDA647998A";
var api = new Gracenote(client_id, client_tag, userId);
var express = require('express'); 
var app = express();

app.post('/api/foo', foo);

/*
api.register(function (err, uid) {
  
})
*/
api.searchArtist("Kidz Bop", function(err, result) {
  console.log(result[0]);
});
/*
window.onload = function() {
  document.getElementById("button").onclick = function() {


}
}
*/
    // /* Load the HTTP library */
    // var http = require("http");
    //
    // /* Create an HTTP server to handle responses */
    // http.createServer(function(request, response) {
    //   response.writeHead(200, {"Content-Type": "text/plain"});
    //   response.write("Hello World");
    //   response.end();
    // }).listen(8888);

