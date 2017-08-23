class Post < ActiveRecord::Base


# has_attached_file :image, default_url: "missing.png" ## pulled from a/A demo
# validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/ ## pulled from a/A demo



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
