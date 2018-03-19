import React, { Component } from 'react'
import Post from './Post'
import { connect } from 'react-redux'
import { getAllComments } from '../actions'
import { objectToArray } from '../utils/helpers';
import Comment from './Comment'
import CommentForm from './CommentForm'
import ReactLoading from 'react-loading'

class PostDetails extends Component {

  componentDidMount() {
    this.props.getAllComments(this.props.postId)
  }

  render() {
    const {posts, postId, comments} = this.props
    const post = posts[postId]
    const postComments = objectToArray(comments)
    if (post) {
      return (
        <div>
          <Post post={post} isDetail={true}/>
          <h2>Comments</h2>
            <ol>
              {postComments.map((comment) => (<Comment key={comment.id} comment={comment}/>))}
            </ol>
          <CommentForm parentId={postId}/>
        </div>
      )
    } else {
      return (
        <h3>Post Not Found</h3>
      )
    }
  }
}

function mapStateToProps({posts, comments}) {
  return {
    posts: posts,
    comments: comments
  }
}

export default connect(mapStateToProps, {getAllComments})(PostDetails)