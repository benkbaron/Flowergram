export const fetchPost = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/posts/${id}`,
  });
};

export const makePost = (data) => {
    let formattedData = new FormData();
    formattedData.append("post[author_id]", data.author_id);
    formattedData.append("post[caption]", data.caption);
    formattedData.append("post[image]", data.image);
  return $.ajax({
    method: 'POST',
    url: '/api/posts',
    contentType: false,
    processData: false,
    data: formattedData,
  });
};

export const getAllPosts = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/posts',
  });
};

export const deletePost = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/posts/${id}`
  });
};
