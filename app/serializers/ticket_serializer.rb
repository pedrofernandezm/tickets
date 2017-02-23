class TicketSerializer < ActiveModel::Serializer
  attributes :id, :subject, :description, :aasm_state, :created_at

  belongs_to :customer

  def id
    object.uuid
  end

end
