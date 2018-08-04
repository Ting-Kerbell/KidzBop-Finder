window.onload = function() {
  document.getElementById("startSearch").onclick = function() {
  	var toSearch = $("#searchSong").val();
    console.log("finder js TO SEARCH: " + toSearch)

    /* New async request */
    url = "https://kidzbop-finder.herokuapp.com/kidzquery.json?track=" + toSearch;
    // url = "http://localhost:8000/kidzquery.json?track=" + toSearch;
    console.log(url);

    request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.onreadystatechange = function() {

      if (request.readyState == 4 && request.status == 200) {
        request = request.responseText;
        parsed = JSON.parse(request);

        console.log(parsed);
      } else if (request.readyState != 4 && request.status == 200) {
        console.log("processing…");
      } else {
        console.log("status code: " + request.status);
        console.log("There is a problem. :-(");
      }
    }

  request.send();
  console.log("sent")
}

$('demo').on('ended', function () {
  this.load();
  this.play();
});
}
