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
    @user = User.includes(:posts, :followers).find(params[:id])
    render :show
  end

  def index
    @users = User.includes(:posts, :followers).all
    render :index
  end

  def update
    @user = User.find(params[:id])
    @user.profile_pic = params[:user][:profile_pic]
    @user.save
    render :show
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :contact_info, :full_name, :profile_pic)
  end

end
