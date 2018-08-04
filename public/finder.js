window.onload = function() {
  $("#searchSong").on('keyup', function (e) {
    if (e.keyCode == 13) {
        // Do something
    
    findSong();
  }
  })
  startSearch.onclick = function() {
  	findSong();
}
function findSong(){
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
        showAns(parsed);
        

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
function showAns(parsed){
  if(!parsed.error){
    results = document.getElementById("results");
    Head.innerHTML = "WE FOUND YOUR SONG!";
    results.innerHTML = parsed.track_title;
    document.getElementById("descrip").style.display = "none";
    }else{
      Head.innerHTML = parsed.error;
      results.innerHTML = " ";
   }
}

$('demo').on('ended', function () {
  this.load();
  this.play();
});
}
