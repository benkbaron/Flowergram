# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170825131742) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.text     "body",       null: false
    t.integer  "post_id",    null: false
    t.integer  "author_id",  null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "comments", ["author_id"], name: "index_comments_on_author_id", using: :btree
  add_index "comments", ["post_id"], name: "index_comments_on_post_id", using: :btree

  create_table "followers", force: :cascade do |t|
    t.integer  "follower_id", null: false
    t.integer  "followee_id", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "followers", ["followee_id"], name: "index_followers_on_followee_id", using: :btree
  add_index "followers", ["follower_id"], name: "index_followers_on_follower_id", using: :btree

  create_table "likes", force: :cascade do |t|
    t.integer  "post_id",    null: false
    t.integer  "liker_id",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "likes", ["liker_id"], name: "index_likes_on_liker_id", using: :btree
  add_index "likes", ["post_id"], name: "index_likes_on_post_id", using: :btree

  create_table "posts", force: :cascade do |t|
    t.text     "caption"
    t.string   "image_file_name",    null: false
    t.string   "image_content_type", null: false
    t.integer  "image_file_size",    null: false
    t.datetime "image_updated_at",   null: false
    t.integer  "author_id",          null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "posts", ["author_id"], name: "index_posts_on_author_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",                 null: false
    t.string   "contact_info",             null: false
    t.string   "full_name",                null: false
    t.string   "password_digest",          null: false
    t.string   "session_token",            null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "profile_pic_file_name"
    t.string   "profile_pic_content_type"
    t.integer  "profile_pic_file_size"
    t.datetime "profile_pic_updated_at"
  end

  add_index "users", ["contact_info"], name: "index_users_on_contact_info", unique: true, using: :btree
  add_index "users", ["full_name"], name: "index_users_on_full_name", using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
