import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/ButtonControl.css'

export default class ButtonControl extends Component {
  render() {
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
      </div>
    )
  }
}