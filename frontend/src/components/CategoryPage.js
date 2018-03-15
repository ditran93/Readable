import Post from './Post'
import React, { Component } from 'react'
import ButtonControl from './ButtonControl'
import { objectToArray } from '../utils/helpers'
import { connect } from 'react-redux'
import CategoryNavigateBar from './CategoryNavigateBar'
import { Container, Row, Col } from 'reactstrap';

class CategoryPage extends Component {
  render() {
    const { posts, category } = this.props
    const postsArray = objectToArray(posts).filter((post) => post.category === category)
    return (
      <div>
        <ButtonControl />
        <Container>
          <Row>
            <Col xs="8">
              <ol>
                {postsArray.map(post => (<Post key={post.id} post={post}/>))}
              </ol>
            </Col>
            <Col xs="4">
              <CategoryNavigateBar />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = ({ posts }) => {
  return {posts}
}

export default connect(mapStateToProps)(CategoryPage)