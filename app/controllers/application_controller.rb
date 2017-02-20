class ApplicationController < ActionController::API

  include ErrorHandler

  protected

  def session_manager
    @session_manager ||= SessionManager.new(authorization_token)
  end

  def authorization_token
    (request.headers["HTTP_AUTHORIZATION"] || "").split(" ").last
  end

end
