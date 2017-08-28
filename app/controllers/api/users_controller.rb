class Api::UsersController < ApplicationController

  def create

    @user = User.new(user_params)

    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors, status: 422
    end
  end

  def show
    debugger
    @user = User.includes(:posts, :followers).find(params[:id])
    debugger
    render :show
  end

  def index
    @users = User.all
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :contact_info, :full_name)
  end

end
