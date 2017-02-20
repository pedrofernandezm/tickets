class TicketsController < ApplicationController

  def index
    @tickets = Ticket.all
    render json: @tickets
  end

  def show
    @ticket = Ticket.find(params[:id])
    render json: @ticket
  end

  def create
    ticket = current_user.tickets.create(ticket_params)
    if ticket.save
      render json: ticket, status: :created
    else
      render_error(ticket, :unprocessable_entity)
    end
  end

  private

  def ticket_params
    params.permit(:subject, :desciption)
  end
end
