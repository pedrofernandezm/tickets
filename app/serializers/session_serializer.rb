class SessionSerializer < ActiveModel::Serializer
  attributes :access_token, :expires_at

  belongs_to :user

end
