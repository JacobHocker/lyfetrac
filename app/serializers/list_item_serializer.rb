class ListItemSerializer < ActiveModel::Serializer
  attributes :id, :list_item_content, :priority, :completion, :list_id
end
