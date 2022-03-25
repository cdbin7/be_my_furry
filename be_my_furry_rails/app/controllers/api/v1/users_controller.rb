class Api::V1::UsersController < Api::ApplicationController
  def create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      render json: {id: user.id}
    else
      render json: {errors: user.errors.messages, status:422}
    end
  end

  def current
    render json: current_user
  end

  def admin
    users = User.all
    pets = Pet.all
    shelters = Shelter.all
  end

  private
  def user_params
    params.require(:user).permit(
        :first_name,
        :last_name,
        :email,
        :address,
        :password,
        :password_confirmation
    )
  end
end
