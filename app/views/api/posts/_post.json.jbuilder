json.extract! post, :id, :caption, :author_id
json.image post.image.url
json.author do
  json.extract! post.author, :username, :full_name, :profile_pic
end
json.comments post.comments, :body, :author_id
