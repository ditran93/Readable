import React, { Component } from 'react'
import Vote from './Vote'
import { Button } from 'reactstrap';
import { Jumbotron} from 'reactstrap';
import { connect } from 'react-redux'
import { deletePost } from '../actions'
import CreatePostForm from './CreatePostForm'
import Modal from 'react-modal';

class Post extends Component {
  state = {
    modalIsOpen: false
  }

  openModal = () => {
    this.setState({modalIsOpen: true})
  }

  closeModal = () => {
    this.setState({modalIsOpen: false})
  }

  generateModal(post) {
    const {modalIsOpen} = this.state;
    const modalStyle = {
      content: {
        top: '10%',
        left: '10%',
        right: '10%',
        bottom: 'auto',
      }
    };
    return (
      <Modal
        style={modalStyle}
        isOpen={modalIsOpen}
        closeTimeoutMS={0}
        ariaHideApp={false}
        shouldCloseOnOverlayClick={true}
        contentLabel="Edit Post">
        <h2>Edit Post</h2>
        <CreatePostForm originalPost={post} onSubmit={() => {this.closeModal()}} onCancel={() => {this.closeModal()}}/>
      </Modal>
    )
  }

  render() {
    const {deletePost, post} = this.props
    return (
      <div>
        <Jumbotron key={post.id} >
          <h3>{post.title}</h3>
          <p>Posted by {post.author} in {post.category}</p>
          <hr className="my-2" />
          <div className='sub-content'>
            <h6>Comments: {post.commentCount}</h6>
            <h6><Vote voteScore={post.voteScore}/></h6>
            <div className='edit-delete'>
              <Button 
              color="warning" 
              size="sm"
              onClick={() => {this.openModal()}}
              >Edit</Button>
              <Button 
                onClick={() => {
                  deletePost(post)
                }}
                color="danger" 
                size="sm"
                >Delete
              </Button>
              {this.generateModal(post)}
            </div>
          </div>
        </Jumbotron>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deletePost: (post) => dispatch(deletePost(post))
  }
}

export default connect(mapDispatchToProps)(Post)