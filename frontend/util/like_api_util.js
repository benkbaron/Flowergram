export const createLike = (data) => {
  return $.ajax({
    method: 'POST',
    url: '/api/likes',
    data: {
          "like[liker_id]": data.liker_id,
          "like[post_id]": data.post_id
          }
  });
};

export const deleteComment = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/likes/${id}`
  });
};
