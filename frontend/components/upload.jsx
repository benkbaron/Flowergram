import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import Dropzone from 'react-dropzone';

class Upload extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
      return (
        <div>
          <Dropzone
            className="dropzone"
            accept="image/jpeg, image/png"
            onDrop={(accepted, rejected) => { this.setState({ accepted, rejected }); }}
          >
            <p>Click here or drag and drop photos to share.</p>
            <p><img className="flowerIcon" src={`${window.images.flowerIcon}`}/></p>
            <p>Only *.jpeg and *.png images will be accepted.</p>
          </Dropzone>
        </div>
      );
    }
  }

export default Upload;
