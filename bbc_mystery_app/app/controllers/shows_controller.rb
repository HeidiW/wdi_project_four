class ShowsController < ApplicationController

	def search
	end

	def results
		@genre = params[:genre]
		@results = Show.search_by_genre(@genre).map do |show|
			title = show["program"]["title"]
			genre = show["program"]["genres"].join(", ")
			desc = show["program"]["short_description"]
			Show.new(

				title: title,
				description: desc,
				genre: genre,
				network: network,
				airtime: start,
				duration: duration

			)
		end
	end
end