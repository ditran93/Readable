import React, { Component } from 'react'
import { Button } from 'reactstrap'
import * as actions from '../actions/posts'
import { connect } from 'react-redux'

class Vote extends Component {
  render () {
    const { voteScore, onUpVote, onDownVote} = this.props
    return (
      <div>
        Vote: {voteScore} 
        <Button size="sm" onClick={() => {onUpVote()}}> Like </Button>
        <Button size="sm" onClick={() => {onDownVote()}}> Dislike </Button>
      </div>
    )
  }
}

export default connect(null, actions)(Vote)