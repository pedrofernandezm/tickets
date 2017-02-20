class ApplicationController < ActionController::API

  include ErrorHandler

  before_action :authenticate_token!

  protected

  def session_manager
    @session_manager ||= SessionManager.new(authorization_token)
  end

  def authorization_token
    (request.headers["HTTP_AUTHORIZATION"] || "").split(" ").last
  end

  def authenticate_token!
    unless authorization_token.present? && session_manager.valid?
      render_unauthorized
    end
  end

end
