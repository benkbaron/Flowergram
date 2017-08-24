import React from 'react';
import PostIndexItem from './post_index_item';

const PostIndex = (posts) => (
    <ul className="pic-index">
    {posts.map(post => (
      <PostIndexItem
        post={post}
        key={post.id}
      />
    ))}
    </ul>
);

export default PostIndex;
