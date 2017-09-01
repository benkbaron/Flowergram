# Flowergram

[Flowergram live][heroku]

[heroku]: https://flowergram.herokuapp.com/

Flowergram is a full stack web application inspired by Instagram and built using Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.


## Features & Implementation

### Post Homepage Rendering

  Posts are stored in the database's posts table with columns for 'image', 'caption', and 'author_id'. A comments table stores columns for the comment's 'body', 'post_id', and 'author_id'. Comments can only be deleted by the post's author or the comment's author.

  A likes table has columns for 'post_id' and 'liker_id'. When a user likes and unlikes a post, rows are created and destroyed in this table.

  Upon logging in, an API call is made for only the posts created by the logged in user and users the logged in user is following.

  ![homepage](https://s3.us-east-2.amazonaws.com/flowergram-dev/screenshots/screenshots/homepage.png)


### Followers

  A follows table in the database connects each user with the users they have elected to follow through 'follower_id' and 'followee_id' columns. Users can follow or unfollow users, which in turn updates the posts shown to the follower.



### Profile Rendering

  The profile page includes the information from the users database table, from the columns 'username', 'full_name', 'profile_pic'. A follow/unfollow button appears for all user profiles except the logged in user. All pictures from posts the user created appear and when clicked a modal appears. Modals of posts created by the logged in user contain a button to delete the post.

  The profile page of the logged in user also includes the ability to load, preview, and then finalize a profile picture change.


    ![profilepage](images/screenshots/profilepage.png)

### Post Creation

    ![uploadpage](images/screenshots/uploadpage.png)


## Flowergram's Coming Attractions:

I anticipate adding the following features to the project:

### Direct Messaging

Users will be able to send private direct messages to other users. A user will be able to message users they do not follow.

### Hashtags

Users will be able to click on a post's hashtags to view other posts with the same hashtag.

### Search

Posts and users will appear in search results dependent on their usernames, hashtags, and captions.
