class User < ActiveRecord::Base
	has_many :comments
	self.has_secure_password

	before_save {self.email = email.downcase }

	EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i


	validates :email, presence: true, format: { with: EMAIL_REGEX },
	uniqueness: true, length: { minimum: 6 }
	validates :password, length: { minimum: 6 }


	def self.authenticate_user(email, password)
		user = find_by_email(email)
		if user && user.authenticate(password)
			user
		else
			nil
		end
  	end
end