import React, { Component } from 'react';
import Vote from './Vote'

class ListPosts extends Component {
  
  render() {
    const { posts } = this.props
    return (
      <div>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <h5>Posted by {post.author} in {post.category}</h5>
              <div className='sub-content'>
                <h6>Comments: {post.commentCount}</h6>
                <h6><Vote voteScore={post.voteScore}/></h6>
                <div className='edit-delete'>
                  <button>Edit</button>
                  <button>Delete</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default ListPosts