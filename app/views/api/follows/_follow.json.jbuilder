json.extract! follow, :id, :follower_id, :followee_id

json.follower do
  json.extract! follow.follower, :username
end

json.followee do
  json.extract! follow.followee, :username
end
