class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :contact_info, null: false
      t.string :full_name, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false

      t.timestamps
      t.index [:username], unique: true
      t.index [:contact_info], unique: true
      t.index [:full_name]
      t.index [:session_token], unique: true
    end
  end
end
