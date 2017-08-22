SAMPLE STATE

{
  currentUser: {
    id: 3,
    username: "benkbaron",
    contact_info: "benkbaron@gmail.com",
    full_name: "Ben Baron",
  },

  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createPost: {errors: ["photo cannot be blank"]}
  },

  posts: {
    1: {
      caption: "A beautiful flower!",
      author_id: 3,
      photo: attachment,
      comment_ids: [1],
      current_user_liked: true,
      likes: 3
      },
    2: {
      caption: "Dozens and dozens!",
      author_id: 3,
      photo: attachment,
      comment_ids: [2, 3],
      current_user_liked: false,
      likes: 1
    }
  },

  comments: {
      1: {
        body: "Smell good too?",
        author_id: 99,
        post_id: 1
      },
      2: {
        body: "How can you hold all those?!",
        author_id: 1,
        post_id: 2
      },
      3: {
        body: "Congratulations!",
        author_id: 55,
        post_id: 2
      }
    },

  users: {
    1: {
      username: "hbucket",
      contact_info: "hbucket@gmail.com",
      full_name: "Hyacinth Bucket",
      follower_ids: [2, 3, 99],
      followee_ids: [2, 3, 99],
      post_ids: [10, 11, 15],
      liked_post_ids: [1, 2]
    },
    2: {
      username: "sennacy",
      contact_info: "kittycat@gmail.com",
      full_name: "Sennacy Johnson",
      follower_ids: [1, 3],
      followee_ids: [1, 3, 99],
      post_ids: [],
      liked_post_ids: [1]
    }
    3: {
      username: "benkbaron",
      contact_info: "benkbaron@gmail.com",
      full_name: "Ben Baron",
      follower_ids: [1, 2],
      followee_ids: [1, 2],
      post_ids: [3],
      liked_post_ids: [1]
    }
  }
}
