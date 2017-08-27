import React from 'react';
import CommentIndexItem from './comment_index_item';

const CommentIndex = (comments, currentUser) => {

  const sortedComments = comments.sort(function(a, b){
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
        currentUser={currentUser}
        key={comment.id}
      />
    ))}
    </ul>
);};

export default CommentIndex;
