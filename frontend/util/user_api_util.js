export const fetchUser = (id) => {
  return $.ajax ({
    method: 'GET',
    url: `/api/users/${id}`,
  });
};

export const fetchAllUsers = () => {
  return $.ajax ({
    method: 'GET',
    url: "/api/users",
  });
};

export const updateProfilePic = (data) => {
    let formattedData = new FormData();
    formattedData.append("user[profile_pic]", data.pic);
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${data.user_id}`,
    contentType: false,
    processData: false,
    data: formattedData,
  });
};
