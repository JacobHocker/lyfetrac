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
end