json.extract! comment, :id, :body, :author_id, :post_id

json.author do
  json.extract! comment.author, :username
end
