import React, { Component } from 'react'
import { Button } from 'reactstrap'

export default class Vote extends Component {
  render () {
    const { voteScore } = this.props
    return (
      <div>
        Vote: {voteScore} 
        <Button size="sm">Like</Button>
        <Button size="sm">Dislike</Button>
      </div>
    )
  }
}