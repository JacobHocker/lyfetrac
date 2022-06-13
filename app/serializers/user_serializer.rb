class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :user_image_url
end
