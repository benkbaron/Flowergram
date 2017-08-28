export const createFollow = (followee) => {
  return $.ajax({
    method: 'POST',
    url: '/api/follows',
    data: {
          "follow[followee]": followee
          }
  });
};

export const deleteFollow = (followee) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/follows/${followee.id}`
  });
};
