json.user do
  json.extract! user, :id, :username, :contact_info, :full_name, :post_ids
  json.profile_pic user.profile_pic.url
  json.follower_ids user.follower_ids
end

json.posts do
  user.posts.each do |post|
    json.set! post.id do
      json.partial! 'api/posts/post.json.jbuilder', post: post
    end
  end
end
