class Reply < ApplicationRecord

  has_secure_token :uuid

  belongs_to :user
  belongs_to :ticket

end
