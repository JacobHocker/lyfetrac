class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :password_confirmation, :movie_list, :music_list, :game_list
end
