class Api::FollowersController < ApplicationController

  def create
    @follower = Follower.new(follower_params)
    @follower.followee = current_user
    @follower.followee_id = current_user.id
    @follower.follower = params[:follower][:follower]
    @follower.follower_id = @follower.follower.id
    if @follower.save
      render :show
    else
      render json: @follower.errors.full_messages, status: 422
    end
  end

  def destroy
    @follower = Follower.find(params[:id])
    @follower.delete
    render :show
  end

  private

  def follower_params
    params.require(:follower).permit(:follower)
  end


end
