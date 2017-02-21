class Session < ApplicationRecord

  DURATION_SECONDS = 1200

  has_secure_token :token
  has_secure_token :uuid

  belongs_to :user

  validates :user_id, presence: true
  validates :expires_at, presence: true

  def access_token
    Token.encode(userId: user_id, token: token, expiresAt: expires_at, type: user.type)
  end

end
