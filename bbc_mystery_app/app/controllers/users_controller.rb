class UsersController < ApplicationController

	def index
		@user = current_user
		@users = User.all
	end

	def new
		@user = User.new
	end

	def create
		@user = User.new(user_params)
		if @user.save
			redirect_to login_path
		else 
			redirect_to root_path, :flash => { :error => @user.errors.full_messages.to_sentence }
		end
	end

	def new
		@user = User.new
	end

	def edit
		@user = User.find(params[:id])
	end

	def show
		@user = User.find(params[:id])
		@users = User.all
	end


    private 
    def user_params 
    	params.require(:user).permit(:email, :password, :password_confirmation, :name)
  end
end



