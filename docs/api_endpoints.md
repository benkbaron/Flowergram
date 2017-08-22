# Api Endpoints


##HTML API

###Root

GET / - loads React web app


##JSON API

###USERS

POST /api/users
GET /api/users/:user_id
PATCH /api/users
DELETE /api/users/:user_id

###SESSION

POST /api/session
DELETE /api/session

###POSTS

GET /api/posts
POST /api/posts
GET /api/posts/:post_id
PATCH /api/posts/:post_id
DELETE /api/posts/:post_id

###LIKES

POST /api/like/:post_id
DELETE /api/unlike/:post_id

###Comments

POST /api/comments
PATCH /api/comments/:comment_id
DELETE /api/comments/:comment_id
