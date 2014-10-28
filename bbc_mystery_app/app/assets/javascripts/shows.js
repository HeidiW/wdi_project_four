function getShows(jsonUrl, target) {

	// Fetch the shows from our database in JSON format
	$.get(jsonUrl, function(shows) {
		console.log(shows);
		processShows(shows);
	});

	// Process the list of shows, extracting the title for each one
	// and fetching its info from OMDB (using the fetchInfo function
	// defined below)

	// Note that I passed in the ID of the show from the database.
	// This allows me to construct a link to the correct show page later on.
	var processShows = function(shows) {
		if (Array.isArray(shows)) {
			shows.forEach(function(show) {
				fetchInfo(show.title, show.id);
			});
		} else {
			fetchInfo(shows.title, shows.id);
		}
	};


	// Fetches the info for a show from OMDB
	var fetchInfo = function(show, id) {
		show = show.replace(" ", "+");
		var url = 'http://www.omdbapi.com/?t=' + show;
		$.get(url, function(data) {
			appendShow(data, id);
		});
	};

	// Creates an HTML element from a single show from OMDB
	var appendShow = function(showData, id) {
		showData = JSON.parse(showData);

		var title = $("<h2>").text(showData["Title"]);
		var year = $("<p>").text(showData["Year"]);
		var actors = $("<p>").text(showData["Actors"]);
		var plot = $("<p>").text(showData["Plot"]);

		// This is where we use the ID that we were careful to pass along
		// above. Since we have it, we can make a link to the show's show page.
		var link = $("<a>").attr('href', '/shows/' + id);
		var img = $("<img>").attr('src', showData["Poster"]);
		var imgDiv = $("<div class='poster'>")

		var info = $("<div class='info'>")
							.append(title)
							.append(year)
							.append(actors)
							.append(plot);

		var element$ = $("<div class='show'>").append(imgDiv.append(link.append(img))).append(info);


		$(target).append(element$);
	};
}