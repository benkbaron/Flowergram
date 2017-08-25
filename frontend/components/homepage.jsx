import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import PostIndex from './post_index';

class Homepage extends React.Component {
  constructor(props){
    super(props);
    this.state = {fetching: true};
  }

  componentDidMount(){
    this.props.getAllPosts().then(() => this.setState({fetching: false}));
  }

  render() {
    if (!this.props.currentUser || this.state.fetching) {
      return (<div></div>);
    }
    if (this.props.postIndex)
      return (
        <div className="pic-index-homepage">
          {PostIndex(this.props.postIndex)}
        </div>
      );
    }
  };

export default Homepage;
