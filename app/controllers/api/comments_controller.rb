class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.delete
    render :index
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :author_id, :post_id)
  end

end
