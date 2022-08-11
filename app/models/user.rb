class User < ApplicationRecord
    has_many :lists 

    
    validates :username, presence: true, uniqueness: true 
    validates :password, presence: true, length: {minimum:4, maximum:14}
    validates :password_confirmation, presence: true, length: {minimum:4, maximum:14}
end
