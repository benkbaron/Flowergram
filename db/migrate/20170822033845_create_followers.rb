class CreateFollowers < ActiveRecord::Migration
  def change
    create_table :followers do |t|
      t.integer :follower_id, null: false
      t.integer :followee_id, null: false

      t.timestamps
      t.index [:follower_id]
      t.index [:followee_id]
    end
  end
end
