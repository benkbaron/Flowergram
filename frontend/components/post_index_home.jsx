import React from 'react';
import PostIndexHomeItem from './post_index_home_item';

const PostIndexHome = (posts) => {
  posts = posts.sort(function(a, b) {
    return parseFloat(b.id) - parseFloat(a.id);
  });

  return (
    <ul className="pic-index">
    {posts.map(post => (
      <PostIndexHomeItem
        post={post}
        key={post.id}
      />
    ))}
    </ul>
);};

export default PostIndexHome;
