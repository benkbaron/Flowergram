export const createLike = (post) => {
  return $.ajax({
    method: 'POST',
    url: '/api/likes',
    data: {
          "like[post]": post
          }
  });
};

export const deleteComment = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/likes/${id}`
  });
};
