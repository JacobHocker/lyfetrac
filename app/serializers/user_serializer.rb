class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :user_image_url, :email, :password, :password_confirmation
end
