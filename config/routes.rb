Rails.application.routes.draw do

  get '/single/:movie_id/:api_key', to: "movies#get_single_movie"
  
  get '/movie-search/:api_key/:search_term', to: "movies#get_movie_search"
  get '/upcoming/:api_key/:page_number', to: "movies#get_upcoming_movies"
  get '/top-rated/:api_key/:page_number', to: "movies#get_top_rated_movies"
  get '/now-playing/:api_key/:page_number', to: "movies#get_now_playing_movies"
  get '/popular/:api_key/:page_number', to: "movies#get_popular_movies"
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
