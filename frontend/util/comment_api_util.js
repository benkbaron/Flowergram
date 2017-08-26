export const makeComment = (data) => {
  return $.ajax({
    method: 'Comment',
    url: '/api/comments',
    data
  });
};

export const deleteComment = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/comments/${id}`
  });
};
