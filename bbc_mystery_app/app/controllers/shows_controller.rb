class ShowsController < ApplicationController

	before_filter :authorize

	def index
		@shows = Show.all

		respond_to do |format|
		  format.html
		  format.xml  { render :xml => @shows }
		  format.json { render :json => @shows }
		end
end

	def show
		@show = Show.find(params[:id])
		respond_to do |format|
		  format.html # show.html.erb
		  format.json { render :json => @show }
		end
	end

	def search
	end
end