require 'dotenv'
class PersonsController < ApplicationController
    
    # ! POPULAR PEOPLE = API KEY & PAGE NUMBER
    def get_popular_people
        url = "https://api.themoviedb.org/3/person/popular?api_key=#{params[:api_key]}&language=en-US&page=#{params[:page_number]}"
        response = HTTParty.get(url)
        render json: response
    end
    # ! SINGLE PERSON DETAILS = PERSON ID & API KEY
    def get_person_details
        url = "https://api.themoviedb.org/3/person/#{params[:person_id]}?api_key=#{params[:api_key]}&language=en-US"
        response = HTTParty.get(url)
        render json: response
    end
    # ! PERSON COMBINED CREDITS = PERSON ID & API KEY
    def get_combined_credits
        url = "https://api.themoviedb.org/3/person/#{params[:person_id]}/combined_credits?api_key=#{params[:api_key]}&language=en-US"
        response = HTTParty.get(url)
        render json: response 
    end
    # ! PERSON IMAGES = PERSON ID & API KEY
    def get_person_images
        url = "https://api.themoviedb.org/3/person/#{params[:person_id]}/images?api_key=#{params[:api_key]}&language=en-US"
        response = HTTParty.get(url)
        render json: response
    end
    # ! PERSON EXTERNAL ID = PERSON ID & API KEY
    def get_person_socials
        url = "https://api.themoviedb.org/3/person/#{params[:person_id]}/external_ids?api_key=#{params[:api_key]}&language=en-US"
        response = HTTParty.get(url)
        render json: response
    end
    # ! SEARCH PERSON = API KEY & SEARCH TERM
    def get_person_search
        url = "https://api.themoviedb.org/3/search/person?api_key=#{params[:api_key]}&language=en-US&query=#{params[:search_term]}&page=1"
        response = HTTParty.get(url)
        render json: response
    end
    # ! PERSON TRENDING = API KEY
    def get_person_trending_day
        url = "https://api.themoviedb.org/3/trending/person/day?api_key=#{params[:api_key]}"
        response = HTTParty.get(url)
        render json: response
    end
    def get_person_trending_week
        url = "https://api.themoviedb.org/3/trending/person/week?api_key=#{params[:api_key]}"
        response = HTTParty.get(url)
        render json: response
    end
end