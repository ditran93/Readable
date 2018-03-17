import React, { Component } from 'react'
import Vote from './Vote'
import { Jumbotron, Button} from 'reactstrap';
import { connect } from 'react-redux'
import { deletePost, upVotePost, downVotePost } from '../actions'
import CreatePostForm from './CreatePostForm'
import Modal from 'react-modal';
import { withRouter, Link } from 'react-router-dom'
import ReactLoading from 'react-loading'

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

  generateTitle(post, isDetail) {
    if (isDetail) {
      return <h1>{post.title}</h1>;
    } else {
      return <Link to={`/${post.category}/${post.id}`} ><h3>{post.title}</h3></Link>;
    }
  }

  render() {
    const { deletePost, post, isDetail, upVotePost, downVotePost } = this.props
    if(post) {
      const date = new Date(post.timestamp).toLocaleString()
      return (
        <div>
          <Jumbotron key={post.id} >
            {this.generateTitle(post, isDetail)}
            <p>Posted on {date} by {post.author} in {post.category}</p>
            <h6>{post.body}</h6>
            <hr className="my-2" />
            <div className='sub-content'>
              <h6>Comments: {post.commentCount}</h6>
              <h6><Vote 
                voteScore={post.voteScore}
                onUpVote={() => upVotePost(post.id)}
                onDownVote={() => downVotePost(post.id)}
                id={post.id}
                type='post'
                /></h6>
              <div className='edit-delete'>
                <Button 
                color="warning" 
                size="sm"
                onClick={() => {this.openModal()}}
                >Edit</Button>
                <Button 
                  onClick={() => {
                    deletePost(post)
                    this.props.history.push("/");
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
    } else {
      return <ReactLoading type="bars" color="grey" />
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deletePost: (post) => dispatch(deletePost(post)),
    upVotePost: (postId) => dispatch(upVotePost(postId)),
    downVotePost: (postId) => dispatch(downVotePost(postId))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Post))