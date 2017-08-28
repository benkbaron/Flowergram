class CreateUniqueIndexFollows < ActiveRecord::Migration
  def change
    change_table :follows do |t|
    add_index :follows, [:follower_id, :followee_id], unique: true
    end
  end
end
