module TicketOperations
  extend ActiveSupport::Concern

  included do

    def close
      ticket = current_user.tickets.find_by(uuid: params[:ticket_id])
      ticket.close!
      ticket.reload
      render json: ticket
    end
  end
end
