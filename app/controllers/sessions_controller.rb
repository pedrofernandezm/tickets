class SessionsController < ApplicationController

  def create
    access_token = session_manager.create!(session_params)
    render json: access_token
  end

  private

  def session_params
    params.permit(:email, :password)
  end

end
