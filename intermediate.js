window.onload = function() {
  document.getElementById("startSearch").onclick = function() {
  	var toSearch = $("#searchSong").val();
  	console.log(toSearch);

}
$('demo').on('ended', function () {
  this.load();
  this.play();
});
}