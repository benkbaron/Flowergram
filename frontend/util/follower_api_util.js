export const createFollower = (follower) => {
  return $.ajax({
    method: 'POST',
    url: '/api/followers',
    data: {
          "follower[follower]": follower
          }
  });
};

export const deleteFollower = (follower) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/followers/${follower.id}`
  });
};
