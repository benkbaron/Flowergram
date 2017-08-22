import React from 'react';
import PostListItem from './post_list_item';
import PostForm from './post_form';
import PostShow from './post_show';
import { Route } from 'react-router-dom';

class PostList extends React.Component {
  componentDidMount(){
    this.props.fetchPosts();
  }

  render(){
    const posts = this.props.posts.map((post, idx) => (
      <PostListItem key={idx} post = {post} destroyPost = {this.props.destroyPost}/>
    ));


    return(
      <div>
        <h1 className="all-posts-label">All Posts</h1>
          <div className="index-page-contents">
          <PostForm createPost={ this.props.createPost } />
          <ul className="post-list">
            { posts }
          </ul>
        </div>
      </div>
    );
  }
};

export default PostList;
