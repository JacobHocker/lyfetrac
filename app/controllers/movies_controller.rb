require 'dotenv'
class StatsController < ApplicationController
    api_key = '4a571a843827a09096250c11596c470d'

    def get_single_movie
        url = "https://api.themoviedb.org/3/movie/#{params[:movie_id]}?api_key=#{api_key}"
        response = HTTParty.get(url)
        render json: response
    end
end