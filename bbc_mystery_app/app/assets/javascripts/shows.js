var xhr = new XMLHttpRequest;

xhr.open('GET', 'http://www.omdbapi.com/?t=Sherlock', true);
xhr.send();

xhr.addEventListener('load', function(){
	console.log("Callback in event has been fired");
	var parsedResponse = JSON.parse(xhr.response);
	var ul = document.querySelector("ul");

	for(var i = 0; i < parsedResponse.length; i++){
		var address = parsedResponse[i]["Title"]["Actors"]["Year"]["Plot"];
		var div = document.createElement("div");
		li.innerText = address;
		ul.appendChild(li);
	}

});

for(var i = 0; i < 6; i++){
	console.log(i);
};