import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { upVotePost, downVotePost } from '../actions'
import { connect } from 'react-redux'

class Vote extends Component {
  render () {
    const { voteScore, id, upVotePost, downVotePost} = this.props
    return (
      <div>
        Vote: {voteScore} 
        <Button size="sm" onClick={() => {upVotePost(id)}}> Like </Button>
        <Button size="sm" onClick={() => {downVotePost(id)}}> Dislike </Button>
      </div>
    )
  }
}

export default connect(null, {upVotePost, downVotePost})(Vote)