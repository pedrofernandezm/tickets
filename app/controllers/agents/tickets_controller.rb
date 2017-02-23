class Agents::TicketsController < ApplicationController

  def index
    @tickets = Ticket.all
    render json: @tickets
  end

  def show
    @ticket = Ticket.find_by!(uuid: params[:id])
    render json: @ticket
  end

end
