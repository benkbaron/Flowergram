import React from 'react';
import { withRouter } from 'react-router-dom';
import ProfileShowContainer from './profile_container';
import Modal from 'react-modal';


class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.state = { modalIsOpen: false }



    this.customStyles = {
      overlay : {
        position          : 'fixed',
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor   : 'rgba(0, 0, 0, 0.75)',
        ["zIndex"]       : 10,
      },
      content : {
        position                   : 'absolute',
        top                        : '110px',
        left                       : '180px',
        right                      : '180px',
        bottom                     : '110px',
        background                 : '#fff',
        overflow                   : 'auto',
        WebkitOverflowScrolling    : 'touch',
        outline                    : 'none',
        padding                    : '0px'
      }
    };

  }

  handleClick() {
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
  // references are now sync'd and can be accessed.
  // this.subtitle.style.color = '#f00';
}

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  deleteButton() {
    if (this.props.post.author_id === this.props.currentUserId){
      return (<form>
        <button onClick={() => this.props.deletePost(this.props.post.id)}
            className="delete-button">Delete Post</button>
      </form>);
    }
  }

  showModal() {
    if (this.state.modalIsOpen) {
      let author = this.props.post.author;
      return (
        <Modal
          className="modal"
          contentLabel="Modal"
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={this.customStyles}
        >
          <img className="modal-pic" src={`${this.props.post.image}`}/>
          <div className="modal-sidebar">
            <div>
              <img className="modal-profile-pic" src={`${author.profile_pic}`}/>
              <h4>{author.username}</h4>
            </div>
            <button className="modal-close-button" onClick={this.closeModal}>Close</button>
          {this.deleteButton()}
          </div>
        </Modal>
      );
    }
  }

  render() {
    return (
      <li>
          <img onClick={this.openModal} className="pic" src={`${this.props.post.image}`}/>
        {this.showModal()}
      </li>
    );
  }
}

export default withRouter(PostIndexItem);
