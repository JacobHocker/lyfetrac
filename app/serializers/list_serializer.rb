class ListSerializer < ActiveModel::Serializer
  attributes :id, :list_name, :list_description, :user_id
end
