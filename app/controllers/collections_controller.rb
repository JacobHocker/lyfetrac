require 'dotenv'
class CollectionsController < ApplicationController

    # ! SINGLE COLLECTION = MOVIE ID # & API KEY
    def get_collection
        url = "https://api.themoviedb.org/3/collection/#{params[:collection_id]}?api_key=#{params[:api_key]}"
        response = HTTParty.get(url)
        render json: response
    end
end