import React, { Component } from 'react'
import Vote from './Vote'
import { Button } from 'reactstrap';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import '../styles/ListPosts.css'
import { Link } from 'react-router-dom'
import CategoryNavigateBar from './CategoryNavigateBar'
import { connect } from 'react-redux'
import reducer from '../reducers'

class ListPosts extends Component {

  render() {
    console.log('Props: ', this.props)
    const { posts } = this.props
    return (
      <div>
        <Container className='buttonControl'>
          <Row>
            <Col xs="4">
              <Link to="/createPost">
                <Button>Create post</Button>
              </Link>
            </Col>
            <Col xs="2">
              <Button>Sort By Date</Button>
            </Col>
            <Col xs="2">
              <Button>Sort By Vote</Button>
            </Col>
            <Col xs="4">
            </Col>
          </Row>
        </Container>
        <div>
          <Container>
            <Row>
              <Col xs="8">
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
                        <Button color="info" size="sm">Comment</Button>
                      </div>
                    </div>
                  </Jumbotron>
                ))}
              </Col>
              <Col xs="4">
                <CategoryNavigateBar categories={this.props.categories}/>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

function mapStateToProps({posts, categories}) {
  const postIdArray = Object.keys(posts)
  return {
    posts: postIdArray.map((postId) => (
      posts[postId]
    )),
    categories: categories.categories
  }
}

export default connect(mapStateToProps)(ListPosts)