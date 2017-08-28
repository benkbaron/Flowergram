json.extract! like, :id, :liker_id, :post_id
json.user do
  json.extract! like.user, :username
end
