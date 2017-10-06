import React from 'react';
import PostIndexHomeItem from './post_index_home_item';

const PostIndexHome = ({posts, makeComment, deleteComment, currentUser, createLike, deleteLike }) => {
  posts = posts.sort(function(a, b) {
    return parseFloat(b.id) - parseFloat(a.id);
  });

  return (
    <ul className="pic-index">
    {posts.map(post => (
      <PostIndexHomeItem
        currentUser={currentUser}
        makeComment={makeComment}
        deleteComment={deleteComment}
        post={post}
        key={post.id}
        createLike={createLike}
        deleteLike={deleteLike}
      />
    ))}
    </ul>
);};

export default PostIndexHome;
