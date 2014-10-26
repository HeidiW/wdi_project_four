class Comment < ActiveRecord::Base
	belongs_to :shows :users
end
