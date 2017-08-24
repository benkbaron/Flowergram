json.index do
  @posts.each do |post|
    json.set! post.id do
      json.partial! 'post', post: post
    end
  end
end

json.ord @posts.map(&:id)
