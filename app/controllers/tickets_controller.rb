class TicketsController < ApplicationController

  def index
    @tickets = user_class.tickets
    render json: @tickets
  end

  def show
    @ticket = Ticket.find(params[:id])
    render json: @ticket
  end

  def create
    ticket = current_user.tickets.create!(ticket_params)
    render json: ticket, status: :created
  end

  private

  def ticket_params
    params.permit(:subject, :description)
  end

  def user_class
    @user_class ||= params[:user_type].classify.constantize
  end
end
