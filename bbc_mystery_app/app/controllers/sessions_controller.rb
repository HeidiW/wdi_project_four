class SessionsController < ApplicationController

	def new
	end

	def create
		user = User.authenticate_user(params[:email], params[:password])
		if user 
			session[:user] = user.id
			redirect_to root_url
		else
			flash.now.alert = "Invalid Email or Password"
			render 'new'
		end

		def destroy
			session[:user] = nil
			redirect_to root_url, notice: "Signed out successfully"
		end 
	end
end
	