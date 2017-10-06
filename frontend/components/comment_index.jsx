import React from 'react';
import CommentIndexItem from './comment_index_item';

const CommentIndex = (post, currentUser, deleteComment) => {

  const sortedComments = post.comments.sort(function(a, b){
    if (a.id < b.id) {
      return -1;
    } else {
      return 1;
    }
  });

  return (
    <ul className="comment-index">
    {sortedComments.map((comment) => (
      <CommentIndexItem
        comment={comment}
        post={post}
        currentUser={currentUser}
        deleteComment={deleteComment}
        key={comment.id}
      />
    ))}
    </ul>
);};

export default CommentIndex;
