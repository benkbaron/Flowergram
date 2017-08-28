json.extract! follower, :id, :follower_id, :followee_id

json.follower do
  json.extract! follower.follower, :username
end

json.followee do
  json.extract! follower.followee, :username
end
