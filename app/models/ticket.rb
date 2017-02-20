class Ticket < ApplicationRecord

  has_secure_token :uuid

  belongs_to :user

  validates :subject, presence: true
  validates :description, presence: true

end
