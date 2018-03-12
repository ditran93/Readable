import React, { Component } from 'react'
import Vote from './Vote'
import { Button } from 'reactstrap';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import '../styles/ListPosts.css'
import { Link } from 'react-router-dom'
import CategoryNavigateBar from './CategoryNavigateBar'
import { connect } from 'react-redux'
import { fetchPosts, deletePost } from '../actions'
import { objectToArray } from '../utils/helpers'

class ListPosts extends Component {

  state = {
    posts: []
  }

  componentDidMount() {
    this.props.fetchPosts()
    .then(data => data.posts)
    .then(data => {
      this.setState({ posts: data })
    })
  }

  render() {

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
                        <Button 
                          onClick={deletePost(post)}
                          color="danger" 
                          size="sm"
                          >Delete
                        </Button>
                        <Button color="info" size="sm">Comment</Button>
                      </div>
                    </div>
                  </Jumbotron>
                ))}
              </Col>
              <Col xs="4">
                <CategoryNavigateBar />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

function mapStateToProps({posts, categories}) {
  return {
    posts: objectToArray(posts),
    categories: categories.categories
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: (data) => dispatch(fetchPosts(data)),
    deletePost: (post) => dispatch(deletePost(post))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPosts)