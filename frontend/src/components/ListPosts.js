import React, { Component } from 'react'
import Vote from './Vote'
import { Button } from 'reactstrap';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import '../styles/ListPosts.css'
import { Link } from 'react-router-dom'

class ListPosts extends Component {

  render() {
    const { posts } = this.props
    return (
      <div>
        <Container className='buttonControl'>
          <Row>
            <Col xs="6">
              <Link to="/createPost">
                <Button>Create post</Button>
              </Link>
            </Col>
            <Col xs="3">
              <Button>Sort By Date</Button>
            </Col>
            <Col xs="3">
              <Button>Sort By Vote</Button>
            </Col>
          </Row>
        </Container>
        <div>
          {posts.map((post) => (
            <Jumbotron key={post.id} >
              <h3>{post.title}</h3>
              <p>Posted by {post.author} in {post.category}</p>
              <hr className="my-2" />
              <div className='sub-content'>
                <h6>Comments: {post.commentCount}</h6>
                <h6><Vote voteScore={post.voteScore}/></h6>
                <div className='edit-delete'>
                  <Button color="warning" size="sm">Edit</Button>
                  <Button color="danger" size="sm">Delete</Button>
                </div>
              </div>
            </Jumbotron>
          ))}
        </div>
      </div>
    )
  }
}

export default ListPosts