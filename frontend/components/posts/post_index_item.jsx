import React from 'react';
import { withRouter } from 'react-router-dom';
import ProfileShowContainer from '../profile/profile_container';
import Modal from 'react-modal';
import CommentIndex from '../comments/comment_index';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.state = { modalIsOpen: false,
                   body: "",
                   author_id: this.props.currentUser.user.id,
                   post_id: this.props.post.id
                 };

    this.customStyles = {
      overlay : {
        position          : 'fixed',
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor   : 'rgba(0, 0, 0, 0.75)',
        ["zIndex"]        : 10,
      },
      content : {
        maxHeight                  : '600px',
        maxWidth                   : '936px',
        position                   : 'center',
        top                        : '0px',
        left                       : '0px',
        right                      : '0px',
        bottom                     : '0px',
        background                 : '#fff',
        overflow                   : 'auto',
        WebkitOverflowScrolling    : 'touch',
        outline                    : 'none',
        padding                    : '0px',
        margin                      : '90px'
      }
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.makeComment(this.state).then(() => {
      return this.setState({body: ""});
    });
  }

  update(input_field) {
    return event => this.setState({
      [input_field]: event.currentTarget.value
    });
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  deleteButton() {
    if (this.props.post.author_id === this.props.currentUser.user.id){
      return (
        <form>
          <button onClick={() => this.props.deletePost(this.props.post.id)}
              className="delete-button">Delete Post</button>
        </form>
      );
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
            <div className="pic-and-author">
              <img className="modal-profile-pic" src={`${author.profile_pic}`}/>
              <div className="modal-username">{author.username}</div>
            </div>
            <div>{CommentIndex(this.props.post, this.props.currentUser, this.props.deleteComment)}</div>

            <section className="modal-bottom">
              <form onSubmit={this.handleSubmit} className="comment-form">
                <textarea type="text" placeholder="Add a comment..."
                  onKeyDown={(e) => {if (e.key === "Enter") {this.handleSubmit(e);}}}

                  onChange={this.update("body")}
                  value={this.state.body}
                  id={`comment-input${this.props.post.id}`}
                  className="comment-input-modal"></textarea>
              </form>
              <section className="modal-buttons">
                <button className="modal-close-button" onClick={this.closeModal}>Close</button>
                {this.deleteButton()}
              </section>
            </section>
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
