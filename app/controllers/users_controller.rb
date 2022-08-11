class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def create 
        user = User.create!(user_params)
        session[:user_id] = user.id 
        render json: user, status: :created
    end

    def show 
        render :json => @current_user.to_json( :include => [:lists])
    end

    def general_show 
        user = User.find_by(id: params[:id])
        if user
            render :json => user.to_json( :include => [:lists ) 
        else  
            render json: { error: 'User not found' }, status: :not_found
        end
    end

    private 

    def user_params 
        params.permit(:username, :password, :password_confirmation, :user_image_url)
    end
end
