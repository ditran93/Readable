import React, {Component} from 'react'
import { Jumbotron, Button} from 'reactstrap'
import ReactLoading from 'react-loading'
import Vote from './Vote'
import { connect } from 'react-redux'
import { upVoteComment, downVoteComment, deleteComment } from '../actions'
import CommentForm from './CommentForm'
import Modal from 'react-modal';

class Comment extends Component {
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
        <h2>Edit Comment</h2>
        <CommentForm originalComment={this.props.comment} parent_id={this.props.comment.parentId}  onSubmit={() => {this.closeModal()}} onCancel={() => {this.closeModal()}}/>
      </Modal>
    )
  }
  render() {
    const { comment, upVoteComment, downVoteComment, deleteComment } = this.props
    if(comment) {
      const date = new Date(comment.timestamp).toLocaleString()
      return (
        <div>
          <Jumbotron key={comment.id} >
            <p>Commented on {date} by {comment.author}</p>
            <h6>{comment.body}</h6>
            <hr className="my-2" />
            <div className='sub-content'>
              <h6><Vote 
                voteScore={comment.voteScore}
                onUpVote={() => {upVoteComment(comment.id)}}
                onDownVote={() => {downVoteComment(comment.id)}}
                id={comment.id}
                type='comment'
                /></h6>
              <div className='edit-delete'>
                <Button 
                color="warning" 
                size="sm"
                onClick={() => {this.openModal()}}
                >Edit</Button>
                <Button 
                  onClick={() => {deleteComment(comment.id)}}
                  color="danger" 
                  size="sm"
                  >Delete
                </Button>
                {this.generateModal(comment)}
              </div>
            </div>
          </Jumbotron>
        </div>
      )
    } else {
      return <ReactLoading type="bars" color="grey" />
    }
  }
}

export default connect(null, {upVoteComment, downVoteComment, deleteComment})(Comment)