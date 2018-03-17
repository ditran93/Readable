import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import '../styles/Banner.css';
import { Container, Row, Col } from 'reactstrap';

export default class Banner extends Component {
  render(){
    return (
      <Container>
        <Row className="banner">
          <Col xs="3"><h4 className="banner"><Link to='/'>Home Page</Link></h4></Col>
          <Col xs="auto"><h3 className="banner"> Welcome To Readable</h3></Col>
        </Row>
      </Container>
    )
  }
}