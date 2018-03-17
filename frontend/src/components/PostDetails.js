import React, { Component } from 'react'
import Post from './Post'
import { connect } from 'react-redux'

class PostDetails extends Component {
  render() {
    const {posts, postId} = this.props
    const post = posts[postId]
    console.log(post)
    return (
      <div>
        <Post post={post} isDetail={true}/>
      </div>
    )
  }
}

function mapStateToProps({posts}) {
  return {
    posts: posts
  }
}

export default connect(mapStateToProps)(PostDetails)