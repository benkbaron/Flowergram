class Api::PostsController < ApplicationController

  def create
    @post = Post.new(post_params)
    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.delete

    render :show
  end

  def index
    ids = current_user.followee_ids.concat([current_user.id])
    @posts = Post.includes(:author).where(author_id: ids)
    render :index
  end


  def show
    @post = Post.find(params[:id])
    render :show
  end

  private

  def post_params
    params.require(:post).permit(:caption, :author_id, :image)
  end

end
