class User < ActiveRecord::Base

  validates :username, :password_digest, :session_token, presence: true, uniqueness: true
  validates :contact_info, :full_name, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}

  has_attached_file :profile_pic, default_url: "cover_flower.jpg"
  validates_attachment_content_type :profile_pic, content_type: /\Aimage\/.*\Z/

  has_many :comments

  has_many :posts,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Post,
    inverse_of: :author

  has_many :followers,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: :Follower

  has_many :followees,
    primary_key: :id,
    foreign_key: :followee_id,
    class_name: :Follower

  has_many :likes,
    primary_key: :id,
    foreign_key: :liker_id,
    class_name: :Like

  attr_reader :password

  after_initialize :ensure_session_token

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = generate_session_token
    self.save
    self.session_token
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    if user && user.valid_password?(password)
      return user
    end
    nil
  end

  private

  def generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

end
