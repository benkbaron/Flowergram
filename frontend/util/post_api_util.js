export const fetchPost = (id) => {
  return $.ajax ({
    method: 'GET',
    url: `/api/posts/${id}`,
    data: {post},
  });
};

export const makePost = (post) => {
  return $.ajax ({
    method: 'POST',
    url: '/api/posts/',
    data: {post},
  });
};

export const getAllPosts = () => {
  return $.ajax ({
    method: 'GET',
    url: '/api/posts',
    data: {posts},
  });
};

export const deletePost = (id) => {
  return $.ajax ({
    method: 'DELETE',
    url: `/api/posts/${id}`
  });
};
