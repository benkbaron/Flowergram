export const createFollow = (followee) => {
  return $.ajax({
    method: 'POST',
    url: '/api/follows',
    data: {
          "follow[followee]": followee
          }
  });
};

export const deleteFollow = (follow) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/follows/${follow.id}`
  });
};
