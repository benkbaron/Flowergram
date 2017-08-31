import React from 'react';
import PostIndexItem from './post_index_item';

const PostIndex = ({posts, currentUserId, deletePost}) => {
  posts = posts.sort(function(a, b) {
    return parseFloat(b.id) - parseFloat(a.id);
  });
  return (
    <ul className="pic-index">
    {posts.map(post => (
      <PostIndexItem
        post={post}
        deletePost={deletePost}
        currentUserId={currentUserId}
        key={post.id}
      />
    ))}
    </ul>
);};

export default PostIndex;
