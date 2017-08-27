import React from 'react';
import CommentIndexItem from './comment_index_item';

const CommentIndex = (comments) => {
  return (
    <ul className="comment-index">
    {comments.map(comment => (
      <CommentIndexItem
        comment={comment}
        key={comment.id}
      />
    ))}
    </ul>
);};

export default CommentIndex;
