/* TODO: ADD TRACK VIA https://github.com/ddanninger/node-gracenote

Lyrics from Genius API
Find streaming api
*/

const PORT = process.env.PORT || 8888;
const express = require('express');
const Gracenote = require("node-gracenote");
/* Auth info */
var client_id =  "1739837544-B5D728286C459FD6DF9650917CB4829F"
var client_tag = "B5D728286C459FD6DF9650917CB4829F"
var userId = "25433196972537149-3F34C6250B9E6292589BD8BDA647998A";
var api = new Gracenote(client_id, client_tag, userId);
var app = express();

/* Enable CORS */
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(__dirname + '/public'));

app.get('/kidzquery.json', function(req, res) {
  console.log("IN SERVER")

  /* Parse query parameters */
  toSearch = req.query.track;
  if (!toSearch) {
    console.log("No track title provided")
  }

  api.searchTrack("Kidz Bop Kids", null, toSearch, function(err, result) {
      if (!err) {
        res.type('json');
        track_result = result[0].tracks[0].track_title;

        if (track_result.toLowerCase() == toSearch.toLowerCase()) {
          console.log("Track exists");
          res.json(result[0].tracks[0]);
        } else {
          console.log("No existing track");
          res.json({"error": "No such track"});
        }
      } else {
        console.log("Something went wrong in the server.");
        res.send(404);
      }
  });
});

app.listen(PORT);
//app.listen(8000);
