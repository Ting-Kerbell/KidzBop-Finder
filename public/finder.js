window.onload = function() {
  document.getElementById("startSearch").onclick = function() {
  	var toSearch = $("#searchSong").val();

    /* New async request */
    url = "https://kidzbop-finder.herokuapp.com/kidzquery.json"
    request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.onReadyStateChange = function () {
      if (request.readystate == 4 && request.status == 200) {
        request = request.responseText;
        parsed = JSON.parse(request);

        console.log(parsed);
      }
    }
  	// console.log(toSearch);
}

$('demo').on('ended', function () {
  this.load();
  this.play();
});
}
