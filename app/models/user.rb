class User < ApplicationRecord

  has_secure_password

  has_secure_token :uuid

  has_many :tickets

  validates :email, presence: true

end
