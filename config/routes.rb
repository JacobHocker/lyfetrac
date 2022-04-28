Rails.application.routes.draw do
  
  # ! MOVIES
  get '/single/:movie_id/:api_key', to: "movies#get_single_movie"
  get '/movie-search/:api_key/:search_term', to: "movies#get_movie_search"
  get '/upcoming/:api_key/:page_number', to: "movies#get_upcoming_movies"
  get '/top-rated/:api_key/:page_number', to: "movies#get_top_rated_movies"
  get '/now-playing/:api_key/:page_number', to: "movies#get_now_playing_movies"
  get '/popular/:api_key/:page_number', to: "movies#get_popular_movies"
  get '/credits/:movie_id/:api_key', to: "movies#get_movie_credits"
  get '/recommendations/:movie_id/:api_key/:page_number', to: "movies#get_movie_recommend"
  get '/reviews/:movie_id/:api_key/:page_number', to: "movies#get_movie_reviews"
  get '/similar/:movie_id/:api_key/:page_number', to: "movies#get_similar_movies"
  
  # ! PEOPLE
  get '/popular-people/:api_key/:page_number', to: "persons#get_popular_people"
  get '/single-person/:person_id/:api_key', to: "persons#get_person_details"
  get '/combined-credits/:person_id/:api_key', to: "persons#get_combined_credits"
  get '/person-images/:person_id/:api_key', to: "persons#get_person_images"
  get '/person-socials/:person_id/:api_key', to: "persons#get_person_socials"
  get '/person-search/:api_key/:search_term', to: "persons#get_person_search"
  
  
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
