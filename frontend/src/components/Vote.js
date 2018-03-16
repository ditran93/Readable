import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { vote } from '../actions'
import { connect } from 'react-redux'

class Vote extends Component {
  render () {
    const { voteScore, id, type, vote } = this.props
    return (
      <div>
        Vote: {voteScore} 
        <Button size="sm" onClick={() => {vote(id, "upVote", type)}}> Like </Button>
        <Button size="sm" onClick={() => {vote(id, "downVote", type)}}> Dislike </Button>
      </div>
    )
  }
}

export default connect(null, {vote})(Vote)