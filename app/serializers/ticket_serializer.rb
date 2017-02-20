class TicketSerializer < ActiveModel::Serializer
  attributes :id, :subject, :description

  belongs_to :user

  def id
    object.uuid
  end

end
