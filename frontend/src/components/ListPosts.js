import React, { Component } from 'react'
import Vote from './Vote'
import { Button } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import '../styles/ListPosts.css'

class ListPosts extends Component {

  render() {
    const { posts } = this.props
    return (
      <div>
        <ListGroup>
          {posts.map((post) => (
            <ListGroupItem key={post.id} >
              <h3>{post.title}</h3>
              <h5>Posted by {post.author} in {post.category}</h5>
              <div className='sub-content'>
                <h6>Comments: {post.commentCount}</h6>
                <h6><Vote voteScore={post.voteScore}/></h6>
                <div className='edit-delete'>
                  <Button color="warning" size="sm">Edit</Button>
                  <Button color="danger" size="sm">Delete</Button>
                </div>
              </div>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    )
  }
}

export default ListPosts