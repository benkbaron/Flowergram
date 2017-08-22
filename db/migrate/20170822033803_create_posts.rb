class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.text :caption
      t.attachment :image, null: false
      t.integer :author_id, null: false

      t.timestamps
      t.index [:author_id]
    end
  end
end
