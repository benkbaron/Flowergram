class CreateLikes < ActiveRecord::Migration
  def change
    create_table :likes do |t|
      t.integer :post_id, null: false
      t.integer :liker_id, null: false

      t.timestamps
      t.index [:post_id]
      t.index [:liker_id]
    end
  end
end
