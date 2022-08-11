class List < ApplicationRecord
    belongs_to :list_container
    has_many :list_items
end
