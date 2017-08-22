components
what route are we visiting when creating a new post?
‘/user’ will need the user id

hierarchy
  logged out
  logged in
    <modal> PostShow
    navbar
    postIndex
      postItems
        commentItems
    userShow
      userDetail
      postIndex (for that user)




Component Hierarchy

AuthFormContainer
  AuthForm

PostsContainer
  PostsIndex
  PostShow

UserContainer
  User
  Post



Path	                       Component

"/sign-up"	                 "AuthFormContainer"
"/sign-in"	                 "AuthFormContainer"
"/user"	                     "UserContainer"
"/posts"        	           "PostsContainer"
"/posts/:postId"	           "PostsContainer"
