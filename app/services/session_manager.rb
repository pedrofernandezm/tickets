class SessionManager

  attr_reader :auth_token

  def initialize(auth_token)
    @auth_token = auth_token
  end

  def valid?
    token_valid? && session && session_current?
  end

  def create!(params)
    @email = params[:email]
    authenticate_user!(params)
    Session.create!(
      expires_at: new_expires_at,
      user_id: user.id
    ).tap do |new_session|
      @auth_token = new_session.access_token
    end
  end

  def refresh!
    session.expires_at = new_expires_at
    session.save!
  end

  def destroy!
    session.destroy!
    @session = nil
  end

  def session
    @session ||= Session.find_by(
      user_id: payload["sub"],
      jti: payload["jti"]
    )
  end

  private

  def token_valid?
    Token.verify!(auth_token)
  end

  def session_current?
    session.expires_at > Time.now.utc
  end

  def new_expires_at
    Time.now.utc + Session::DURATION_SECONDS.seconds
  end

  def authenticate_user!(params)
    user.authenticate(params[:password]) || raise(StandardError.new("Authentication failed"))
  end

  def user
    @user ||= User.find_by(email: @email)
  end

  def payload
    @_payload ||= Token.decode(auth_token).first
  end
end
