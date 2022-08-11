class ListContainer < ApplicationRecord
    belongs_to :user 
    has_many :lists
    
end
