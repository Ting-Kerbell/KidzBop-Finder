window.onload = function() {
  document.getElementById("startSearch").onclick = function() {
  	var toSearch = $("#searchSong").val();
    console.log(toSearch)

    /* New async request */
    url = "https://kidzbop-finder.herokuapp.com/kidzquery.json"
    request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.onreadystatechange = function () {

      if (request.readyState == 4 && request.status == 200) {
        console.log("WE HERE iN FIRST IF");
        request = request.responseText;
        parsed = JSON.parse(request);

        console.log(parsed);
      } else if (request.readyState != 4 && request.status == 200) {
        console.log("processing…");
      } else {
        console.log("There is a problem. :-()");
      }
    }
  request.send(toSearch);
  console.log("sent")
}

$('demo').on('ended', function () {
  this.load();
  this.play();
});
}
