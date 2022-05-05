Rails.application.routes.draw do

  # ! HOME PAGE 
  get '/movie-trending-day/:api_key', to: "movies#get_movie_trending_day"
  get '/movie-trending-week/:api_key', to: "movies#get_movie_trending_week"
  get '/tv-trending-day/:api_key', to: "televisions#get_tv_trending_day"
  get '/tv-trending-week/:api_key', to: "televisions#get_tv_trending_week"
  get '/people-trending-day/:api_key', to: "persons#get_person_trending_day"
  get '/people-trending-week/:api_key', to: "persons#get_person_trending_week"
  
  
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
  
  # ! TELEVISION
  get '/single-tv/:tv_id/:api_key', to: "televisions#get_television_single"
  get '/tv-credits/:tv_id/:api_key', to: "televisions#get_television_credits"
  get '/tv-recommendations/:tv_id/:api_key', to: "televisions#get_television_recommendations"
  get '/tv-top-rated/:api_key/:page_number', to: "televisions#get_television_top_rated"
  get '/tv-popular/:api_key/:page_number', to: "televisions#get_television_popular"
  get '/tv-ota/:api_key/:page_number', to: "televisions#get_television_ota"
  get '/tv-reviews/:tv_id/:api_key', to: "televisions#get_television_reviews"
  get '/tv-season/:tv_id/:season_number/:api_key', to: "televisions#get_television_season"
  get '/tv-episode/:tv_id/:season_number/:episode_number/:api_key', to: "televisions#get_tv_episode"



  # ! PEOPLE
  get '/popular-people/:api_key/:page_number', to: "persons#get_popular_people"
  get '/single-person/:person_id/:api_key', to: "persons#get_person_details"
  get '/combined-credits/:person_id/:api_key', to: "persons#get_combined_credits"
  get '/person-images/:person_id/:api_key', to: "persons#get_person_images"
  get '/person-socials/:person_id/:api_key', to: "persons#get_person_socials"
  get '/person-search/:api_key/:search_term', to: "persons#get_person_search"
  
  # ! MOVIE COLLECTIONS
  get '/single-collection/:collection_id/:api_key', to: "collections#get_collection"
  get '/collection-search/:api_key/:search_term', to: "collections#get_collection_search"
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
