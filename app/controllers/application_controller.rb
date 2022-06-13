class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  private 

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_message }, status: :unprocessable_entity
  end
end
