<script type="text/javascript">
//Sherlock tt1475582
//Luther tt1474684
//Case Histories tt1748888
//New Tricks tt0362357
//Inspector Lewis tt0874608

// IMDb ID to Search
var imdbId = "tt1430509";

// Send Request
var http = new ActiveXObject("Microsoft.XMLHTTP");
http.open("GET", "http://www.omdbapi.com/?i=" + imdbId, false);
http.send(null);

// Response to JSON
var omdbData = http.responseText;
var omdbJSON = eval("(" + omdbData + ")");

// Returns Movie Title
alert(omdbJSON.Title);

</script>