module ErrorHandler
  extend ActiveSupport::Concern

  included do

    rescue_from ActiveRecord::RecordNotFound do |e|
      render_error(:record_not_found, 404, e.to_s)
    end

    rescue_from StandardError do |e|
      render_error(:standard_error, 500, e.to_s)
    end

  end

  def render_unauthorized
    render_error(:unauthorized, 401, "Unauthorized")
  end

  private

  def render_error(error, status, message)
    response = [
      {
        code: error,
        detail: message,
        status: status.to_s
      }
    ]
    render json: { errors: response }, status: status
  end

end
