class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.text :body, null: false
      t.integer :post_id, null: false
      t.integer :author_id, null: false

      t.timestamps
      t.index [:post_id]
      t.index [:author_id]
    end
  end
end
