# Database Schema

##USERS

column name	     |  data type   |   details
-----------------|--------------|--------------------------------
id	             |  integer	    |   not null, primary key
username	       |  string      |   not null, indexed, unique
contact_info     |  string	    |   not null, indexed, unique
full_name        |  string	    |   not null, indexed
password_digest  |  string	    |   not null
session_token	   |  string	    |   not null, indexed, unique
created_at       |  datetime    |   not null
updated_at       |  datetime    |   not null

##POSTS

column name	     |  data type   |   details
-----------------|--------------|--------------------------------
id	             |  integer	    |   not null, primary key
caption	         |  text	      |   
image            |  attachment  |   not null
author_id	       |  integer	    |   not null, foreign key, indexed
created_at       |  datetime    |   not null
updated_at       |  datetime    |   not null

##COMMENTS

column name	     |  data type   |   details
-----------------|--------------|--------------------------------
id	             |  integer	    |   not null, primary key
body             |  text        |   not null
post_id          |  integer     |   not null, foreign key, indexed
author_id        |  integer     |   not null, foreign key, indexed
created_at       |  datetime    |   not null
updated_at       |  datetime    |   not null

##FOLLOWERS

column name	     |  data type   |   details
-----------------|--------------|--------------------------------
id	             |  integer     |   not null, primary key
follower_id      |  integer     |   not null, foreign key, indexed
followee_id      |  integer     |   not null, foreign key, indexed
created_at       |  datetime    |   not null
updated_at       |  datetime    |   not null

##LIKES

column name	     |  data type   |   details
-----------------|--------------|--------------------------------
id               |  integer     |   not null, primary key
post_id          |  integer     |   not null, foreign key, indexed
liker_id         |  integer     |   not null, foreign key, indexed
created_at       |  datetime    |   not null
updated_at       |  datetime    |   not null
