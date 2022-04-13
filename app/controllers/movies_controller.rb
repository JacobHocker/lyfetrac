require 'dotenv'
class MoviesController < ApplicationController

    # ! SINGLE MOVIE PARAMS = MOVIE ID # & API KEY
    def get_single_movie
        url = "https://api.themoviedb.org/3/movie/#{params[:movie_id]}?api_key=#{params[:api_key]}"
        response = HTTParty.get(url)
        render json: response
    end

    # ! SEARCH MOVIE PARAMS = SEARCH TERM & API KEY
    def get_movie_search
        url = "https://api.themoviedb.org/3/search/movie?api_key=#{params[:api_key]}&language=en-US&query=#{params[:search_term]}&page=1"
        response = HTTParty.get(url)
        render json: response
    end

    # ! TOP RATED MOVIES PARAMS = API KEY & PAGE NUMBER
    def get_top_rated_movies
        url = "https://api.themoviedb.org/3/movie/top_rated?api_key=#{params[:api_key]}&language=en-US&page=#{params[:page_number]}"
        response = HTTParty.get(url)
        render json: response
    end
end