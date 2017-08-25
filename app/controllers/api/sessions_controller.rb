class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      render "api/users/show"
    else
      username_check = User.find_by(username: params[:user][:username])
      if username_check
        render json: {"password": "Sorry, your password was incorrect. Please double-check your password."}, status: 401
      else
        render json: {"username": "The username you entered doesn't belong to an account. Please check your username and try again."}, status: 401
      end
    end
  end

  def destroy
    if logged_in?
      logout
      render json: {}
    else
      render json: ["404"], status: 404
    end
  end

end
