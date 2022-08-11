class ListItemsController < ApplicationController

    #POST /list_items
    def create 
        list_item = ListItem.create(list_items_params)
        render json: list_item, status: :created 
    end
    private 
    def list_items_params
        params.permit(:list_item_content, :priority, :completion, :list_id)
    end
end
