class UpdateLikes < ActiveRecord::Migration
  def change

    remove_index(:likes, :name => "index_likes_on_liker_id")
    remove_index(:likes, :name => "index_likes_on_post_id")

  end

end
