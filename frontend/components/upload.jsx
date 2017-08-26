import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import Dropzone from 'react-dropzone';

class Upload extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = { author_id: this.props.currentUser.id, image: null, caption: "" };
  }

  handleSubmit(e) {
    e.preventDefault();
    const post = this.state;
    this.props.makePost(post);
  }

  update(input_field) {
    return event => this.setState({
      [input_field]: event.currentTarget.value
    });
  }



  onDrop(content) {
    this.setState({
      image: content[0]
    });
  }

  render() {

    if (this.state.image) {

      this.props.makePost(this.state).then(() => this.setState({image: null}));

    }

      return (
        <div>
          <Dropzone
            className="dropzone"
            accept="image/jpeg, image/png"
            onDrop={this.onDrop.bind(this)}
          >
            <p>Click here or drag and drop photos to share.</p>
            <p><img className="flowerIcon" src={`${window.images.flowerIcon}`}/></p>
            <p>Only *.jpeg and *.png images will be accepted.</p>
          </Dropzone>

            <form onSubmit={this.handleSubmit} >
              <label>Give your photo a caption!</label>
              <input type="text" value={this.state.caption}
                onChange={this.update("caption")}></input>
            </form>
        </div>
      );
    }
  }

export default Upload;
