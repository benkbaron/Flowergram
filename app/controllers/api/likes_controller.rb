class Api::LinksController < ApplicationController

  def create
    @like = Like.new(like_params)
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
    params.require(:like).permit(:liker_id, :post_id)
  end

end
