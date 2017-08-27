class Api::LikesController < ApplicationController

  def create
    @like = Like.new(like_params)
    @like.post_id = params[:like][:post]["id"]
    @like.post = Post.find(@like.post_id)
    @like.user = current_user
    if @like.save
      render :show
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = Like.find(params[:id])
    @like.delete
    render json: {}
  end

  private

  def like_params
    params.require(:like).permit(:liker_id, :post_id, :post)
  end

end
