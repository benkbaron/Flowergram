import React from 'react';
import PostIndexItem from './post_index_item';

const PostIndex = (posts) => (
  <div>
    <h1>Posts: </h1>
    <ul>
    {posts.map(post => (
      <PostIndexItem
        post={post}
        key={post.id}
      />
    ))}
    </ul>
  </div>
);

export default PostIndex;
