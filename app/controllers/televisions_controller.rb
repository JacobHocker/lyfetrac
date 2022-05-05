require 'dotenv'
class TelevisionsController < ApplicationController
    # ! SINGLE TV SHOW = TV ID # & API KEY
    def get_television_single
        url = "https://api.themoviedb.org/3/tv/#{params[:tv_id]}?api_key=#{params[:api_key]}"
        response = HTTParty.get(url)
        render json: response
    end
    # ! TV CREDITS = TV ID & API KEY
    def get_television_credits
        url = "https://api.themoviedb.org/3/tv/#{params[:tv_id]}/credits?api_key=#{params[:api_key]}"
        response = HTTParty.get(url)
        render json: response
    end
    # ! TV RECOMMENDATIONS = TV ID & API KEY
    def get_television_recommendations
        url = "https://api.themoviedb.org/3/tv/#{params[:tv_id]}/recommendations?api_key=#{params[:api_key]}&page=1"
        response = HTTParty.get(url)
        render json: response
    end
    # ! TV TOP RATED = API KEY & PAGE NUMBER
    def get_television_top_rated
        url = "https://api.themoviedb.org/3/tv/top_rated?api_key=#{params[:api_key]}&page=#{params[:page_number]}"
        response = HTTParty.get(url)
        render json: response
    end
    # ! TV POPULAR = API KEY & PAGE NUMBER
    def get_television_popular
        url = "https://api.themoviedb.org/3/tv/popular?api_key=#{params[:api_key]}&page=#{params[:page_number]}"
        response = HTTParty.get(url)
        render json: response
    end
    # ! TV ON THE AIR = API KEY & PAGE NUMBER
    def get_television_ota
        url = "https://api.themoviedb.org/3/tv/on_the_air?api_key=#{params[:api_key]}&page=#{params[:page_number]}"
        response = HTTParty.get(url)
        render json: response
    end
    # ! TV REVIEWS = TV ID & API KEY
    def get_television_reviews
        url = "https://api.themoviedb.org/3/tv/#{params[:tv_id]}/reviews?api_key=#{params[:api_key]}&page=1"
        response = HTTParty.get(url)
        render json: response
    end
    # ! TV SEASONS = TV ID & SEASON ID & API KEY
    def get_television_season
        url = "https://api.themoviedb.org/3/tv/#{params[:tv_id]}/season/#{params[:season_number]}?api_key=#{params[:api_key]}"
        response = HTTParty.get(url)
        render json: response
    end
    # ! TV TRENDING = API KEY
    def get_tv_trending_day
        url = "https://api.themoviedb.org/3/trending/tv/day?api_key=#{params[:api_key]}"
        response = HTTParty.get(url)
        render json: response
    end
    def get_tv_trending_week
        url = "https://api.themoviedb.org/3/trending/tv/week?api_key=#{params[:api_key]}"
        response = HTTParty.get(url)
        render json: response
    end
    
    
    
end