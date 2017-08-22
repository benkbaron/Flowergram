class Post < ActiveRecord::Base

validates :caption, :author, presence: true

has_many :likers,
  primary_key: :id,
  foreign_key: :post_id,
  class_name: :Like

has_many :comments

belongs_to :author,
   primary_key: :id,
   foreign_key: :author_id,
   class_name: :User
end
