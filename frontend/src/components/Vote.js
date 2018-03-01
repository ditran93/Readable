import React, { Component } from 'react'

export default class Vote extends Component {
  render () {
    const { voteScore } = this.props
    return (
      <div>
        Vote: {voteScore} 
        <button>Like</button>
        <button>Dislike</button>
      </div>
    )
  }
}