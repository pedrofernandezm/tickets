class SessionsController < ApplicationController

  skip_before_action :authenticate_token!, only: :create

  def create
    access_token = session_manager.create!(session_params[:session])
    render json: access_token
  end

  def show
    render json: session_manager.session
  end

  private

  def session_params
    params.permit(session: [:email, :password])
  end

end
