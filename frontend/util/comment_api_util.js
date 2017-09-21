export const makeComment = (data) => {
  return $.ajax({
    method: 'POST',
    url: '/api/comments',
    data: {"comment[body]": data.body,
          "comment[author_id]": data.author_id,
          "comment[post_id]": data.post_id
          }
    });
};

export const deleteComment = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/comments/${id}`
  });
};
