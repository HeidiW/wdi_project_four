class SessionsController < ApplicationController

	def new
	end

	def create
		user = User.authenticate_user(params[:email], params[:password])
		if user 
			session[:user] = user.id
			redirect_to shows_path
		else
			flash.now.alert = "Invalid email or password, please try again."
			render 'new'
		end
	end

	def destroy
		session[:user] = nil
		redirect_to root_url, notice: "Signed out successfully"
	end 
end
	