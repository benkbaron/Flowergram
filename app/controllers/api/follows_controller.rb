class Api::FollowsController < ApplicationController

  def create
    @follow = Follow.new(follow_params)
    @follow.follower = current_user
    @follow.follower_id = current_user.id
    @follow.followee = User.find(params[:follow][:followee][:id])
    @follow.followee_id = @follow.followee.id
    if @follow.save
      render :show
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = current_user.follows.find_by(followee_id: params[:followee_id])
    @follow.delete
    render :show
  end

  private

  def follow_params
    params.require(:follow).permit(:followee)
  end


end
