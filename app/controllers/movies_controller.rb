require 'dotenv'
class MoviesController < ApplicationController

    def get_single_movie
        url = "https://api.themoviedb.org/3/movie/#{params[:movie_id]}?api_key=#{params[:api_key]}"
        response = HTTParty.get(url)
        render json: response
    end
end