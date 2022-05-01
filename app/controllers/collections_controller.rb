require 'dotenv'
class CollectionsController < ApplicationController

    # ! SINGLE COLLECTION = MOVIE ID # & API KEY
    def get_collection
        url = "https://api.themoviedb.org/3/collection/#{params[:collection_id]}?api_key=#{params[:api_key]}"
        response = HTTParty.get(url)
        render json: response
    end
    # ! SEARCH COLLECTIONS = SEARCH TERM & API KEY
    def get_collection_search
        url = "https://api.themoviedb.org/3/search/collection?api_key=#{params[:api_key]}&language=en-US&query=#{params[:search_term]}&page=1"
        response = HTTParty.get(url)
        render json: response
    end
end