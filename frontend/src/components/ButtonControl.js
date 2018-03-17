import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/ButtonControl.css'
import { connect } from 'react-redux'
import { sortByTime, sortByVote } from '../actions'
import {objectToArray} from '../utils/helpers'

class ButtonControl extends Component {
  render() {
    const {sortByTime, sortByVote, posts}  = this.props
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
              <Button onClick={() => sortByTime(objectToArray(posts))}>Sort By Time</Button>
            </Col>
            <Col xs="2">
              <Button onClick={() => sortByVote(objectToArray(posts))}>Sort By Vote</Button>
            </Col>
            <Col xs="4">
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default connect(null, {sortByTime, sortByVote})(ButtonControl)