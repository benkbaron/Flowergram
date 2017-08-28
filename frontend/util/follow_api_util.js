export const createFollow = (follower) => {
  return $.ajax({
    method: 'POST',
    url: '/api/follows',
    data: {
          "follow[follower]": follower
          }
  });
};

export const deleteFollow = (follow) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/follows/${follow.id}`
  });
};
