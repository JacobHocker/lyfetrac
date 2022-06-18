require 'dotenv'
class MoviesController < ApplicationController
    skip_before_action :authorize
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
    # ! POPULAR MOVIES PARAMS = API KEY & PAGE NUMBER
    def get_popular_movies
        url = "https://api.themoviedb.org/3/movie/popular?api_key=#{params[:api_key]}&language=en-US&page=#{params[:page_number]}"
        response = HTTParty.get(url)
        render json: response
    end
    # ! NOW PLAYING MOVIES PARAMS = API KEY & PAGE NUMBER
    def get_now_playing_movies
        url = "https://api.themoviedb.org/3/movie/now_playing?api_key=#{params[:api_key]}&language=en-US&page=#{params[:page_number]}"
        response = HTTParty.get(url)
        render json: response
    end
    # ! UPCOMING MOVIES PARAMS = API KEY & PAGE NUMBER
    def get_upcoming_movies
        url = "https://api.themoviedb.org/3/movie/upcoming?api_key=#{params[:api_key]}&language=en-US&page=#{params[:page_number]}"
        response = HTTParty.get(url)
        render json: response
    end
    # ! MOVIE CREDITS PARAMS = API KEY & MOVIE ID
    def get_movie_credits
        url = "https://api.themoviedb.org/3/movie/#{params[:movie_id]}/credits?api_key=#{params[:api_key]}"
        response = HTTParty.get(url)
        render json: response
    end
    # ! MOVIE RECOMMENDATIONS = MOVIE ID & API KEY & PAGE NUMBER 
    def get_movie_recommend
        url = "https://api.themoviedb.org/3/movie/#{params[:movie_id]}/recommendations?api_key=#{params[:api_key]}&page=#{params[:page_number]}"
        response = HTTParty.get(url)
        render json: response
    end
    # ! MOVIE REVIEWS = MOVIE ID & API KEY & PAGE NUMBER
    def get_movie_reviews
        url = "https://api.themoviedb.org/3/movie/#{params[:movie_id]}/reviews?api_key=#{params[:api_key]}&page=#{params[:page_number]}"
        response = HTTParty.get(url)
        render json: response
    end
    # ! SIMILAR MOVIES = MOVIE ID & API KEY & PAGE NUMBER
    def get_similar_movies
        url = "https://api.themoviedb.org/3/movie/#{params[:movie_id]}/similar?api_key=#{params[:api_key]}&page=#{params[:page_number]}"
        response = HTTParty.get(url)
        render json: response
    end
    # ! PERSON TRENDING = API KEY
    def get_movie_trending_day
        url = "https://api.themoviedb.org/3/trending/movie/day?api_key=#{params[:api_key]}"
        response = HTTParty.get(url)
        render json: response
    end
    def get_movie_trending_week
        url = "https://api.themoviedb.org/3/trending/movie/week?api_key=#{params[:api_key]}"
        response = HTTParty.get(url)
        render json: response
    end
end