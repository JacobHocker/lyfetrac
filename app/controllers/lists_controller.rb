class ListsController < ApplicationController
    
    #POST /lists
    def create
        list = List.create(list_params)
        render json: list, status: :created 
    end
    private 
    def list_params
        params.permit(:list_name, :list_description, :user_id)
    end
end
