import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import Dropzone from 'react-dropzone';


class Upload extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { author_id: this.props.currentUser.id, image: null,
                   imageURL: null, caption: "" };
    this.updateFile = this.updateFile.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const post = this.state;
    this.props.makePost(post).then(() => this.setState({ author_id: this.props.currentUser.id, image: null, caption: "" }))
    .then(() => this.props.history.push("/"));
  }

  updateFile(e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({ image: file, imageURL: fileReader.result });
    }.bind(this);
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  update(input_field) {
    return event => this.setState({
      [input_field]: event.currentTarget.value
    });
  }

  // onDrop(files) {
  //   this.setState({
  //     image: files[0]
  //   });
  // }
  onDrop(files) {
    let file = files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({ image: file, imageURL: fileReader.result });
    }.bind(this);
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  dropZoneContents(){
    if (this.state.imageURL){
      return (<img className="dropzone-pic" src={this.state.imageURL}/>);
    } else {
      return (<div className="dropzone-contents">
        <p>Click here or drag and drop a photo to share.</p>
        <p><img className="flowerIcon" src={`${window.images.flowerIcon}`}/></p>
        <p>Only .jpeg and .png images will be accepted.</p>
    </div>);
    }
  }

  render() {

      return (
        <div className="upload-page">
          <Dropzone
            className="dropzone"
            accept="image/jpeg, image/png"
            onDrop={this.onDrop.bind(this)}
          >
            {this.dropZoneContents()}
          </Dropzone>

            <form onSubmit={this.handleSubmit} >
              <label>Give your photo a caption!</label>
              <input type="textarea"
                className="caption-text-box"
                value={this.state.caption}
                onChange={this.update("caption")}></input>
              <button>Submit</button>
            </form>

        </div>
      );
    }
  }

export default Upload;
