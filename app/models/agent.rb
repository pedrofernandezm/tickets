class Agent < User

  def self.tickets
    Ticket.all
  end
end
