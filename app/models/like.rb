class Like < ActiveRecord::Base

  validates :post, :user, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :liker_id,
    class_name: :User

  belongs_to :post,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: :Post
end
