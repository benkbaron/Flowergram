class Post < ActiveRecord::Base

  has_attached_file :image, default_url: "cover_flower.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  validates :image, :author, presence: true

  has_many :likers,
    through: :like,
    source: :user

  has_many :comments

  belongs_to :author,
     primary_key: :id,
     foreign_key: :author_id,
     class_name: :User
end
