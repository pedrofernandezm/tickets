class UserSerializer < ActiveModel::Serializer
  attributes :id, :email

  has_many :tickets

  def id
    object.uuid
  end

end
