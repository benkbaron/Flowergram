class CreateIndexLikes < ActiveRecord::Migration
  def change
    change_table :likes do |t|
    add_index :likes, [:post_id, :liker_id], unique: true
    end
  end
end
