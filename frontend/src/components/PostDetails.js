import React, { Component } from 'react'
import Post from './Post'
import { connect } from 'react-redux'
import { getAllComments } from '../actions'
import { objectToArray } from '../utils/helpers';
import Comment from './Comment'
import CommentForm from './CommentForm'

class PostDetails extends Component {

  componentDidMount() {
    this.props.getAllComments(this.props.postId)
  }

  render() {
    const {posts, postId, comments} = this.props
    const post = posts[postId]
    const postComments = objectToArray(comments)
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
  }
}

function mapStateToProps({posts, comments}) {
  return {
    posts: posts,
    comments: comments
  }
}

export default connect(mapStateToProps, {getAllComments})(PostDetails)