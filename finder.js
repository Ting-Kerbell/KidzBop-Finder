/* TODO: ADD TRACK VIA https://github.com/ddanninger/node-gracenote

Lyrics from Genius API
Find streaming api
Server shit
Client side stuff
video not looping >:(

*/
const PORT process.env.PORT || 8888;
const express = require('express'); 
const Gracenote = require("node-gracenote");
/* Auth info */
var client_id =  "1739837544-B5D728286C459FD6DF9650917CB4829F"
var client_tag = "B5D728286C459FD6DF9650917CB4829F"
var userId = "25433196972537149-3F34C6250B9E6292589BD8BDA647998A";
var api = new Gracenote(client_id, client_tag, userId);
var app = express();

app.post('/api/foo', foo);

/*
api.register(function (err, uid) {
  
})
*/
api.searchArtist("Kidz Bop", function(err, result) {
  console.log(result[0]);
});

app.listen(PORT);