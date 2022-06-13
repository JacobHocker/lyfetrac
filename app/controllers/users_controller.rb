class UsersController < ApplicationController

    def create 
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        render :json => @current_user.to_json
    end

    private 

    def user_params
        params.permit(:username, :password, :password_confirmation, :user_image_url)
    end
end
