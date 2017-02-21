class User < ApplicationRecord

  has_secure_password

  has_secure_token :uuid

  validates :email, presence: true

end
