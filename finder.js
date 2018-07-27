/* TODO: ADD TRACK VIA https://github.com/ddanninger/node-gracenote
*/
var Gracenote = require("node-gracenote");
/* Auth info */
var client_id =  1739837544-B5D728286C459FD6DF9650917CB4829F
var client_tag = B5D728286C459FD6DF9650917CB4829F
var userId = null;
var api = new Gracenote(client_id, client_tag, userId);
api.register(function (err, uid) {
  // todo: store user id somewhere for next session
})

window.onload = function() {
  document.getElementById("button") = function() {

api.searchArtist("Kings of Leon", function(err, result) {
  console.log(result);
});
    // /* Load the HTTP library */
    // var http = require("http");
    //
    // /* Create an HTTP server to handle responses */
    // http.createServer(function(request, response) {
    //   response.writeHead(200, {"Content-Type": "text/plain"});
    //   response.write("Hello World");
    //   response.end();
    // }).listen(8888);

  }
});
