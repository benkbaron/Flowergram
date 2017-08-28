class Api::FollowsController < ApplicationController

  def create
    @follow = Follow.new(follow_params)
    @follow.followee = current_user
    @follow.followee_id = current_user.id
    @follow.follower = params[:follow][:follower]
    @follor.follower_id = @follow.follower.id
    if @follow.save
      render :show
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = Follow.find(params[:id])
    @follow.delete
    render :show
  end

  private

  def follow_params
    params.require(:follow).permit(:follower)
  end


end
