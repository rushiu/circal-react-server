import React, {Component} from 'react';
import './App.css';
import {Nav, Navbar, Image, Button} from 'react-bootstrap';
import { Container, Row, Col} from 'react-bootstrap';
import {Jumbotron} from 'react-bootstrap';


const HeroImageContainer = {
  position: 'absolute',
  top:0,
  left:0,
  zIndex:0,
  width:'100%'
};

const NavBarStyle = {
  position: 'absolute',
  zIndex:1,
  width:'100%'
};

const OtherStyle = {
  position: 'absolute',
  zIndex:2,
  width:'100%'
};

class App extends React.Component {
  render() {
    return (
    <Container>  
      <Image src="/assests/PinkGradient.svg" style={HeroImageContainer}/>
      <Container style={NavBarStyle}>
      <Navbar className="w-100"  variant="dark">
            <img
              alt=""
              src="/assests/LogoImage.png"
              width="35"
              height="25"
              className="d-inline-block align-top"
            />
          <Navbar.Brand href="">circal</Navbar.Brand>
            <Nav className ="mr-auto">
              <Nav.Link href=""></Nav.Link>
              <Nav.Link href="features">features</Nav.Link>
              <Nav.Link href="pricing">pricing</Nav.Link>
              <Nav.Link href="about">about</Nav.Link>
              <Nav.Link href="contact">contact</Nav.Link>
            </Nav>
      </Navbar>
 
      <Row>
        <Col></Col>
        <Col xs={10}>
        <h1 className="title">
          Meetings made easy.
        </h1>
        </Col>
        <Col></Col>
      </Row>

      <Row>
      <Col></Col>
        <Col xs={5}>
        <p className = "paragraph-header">Circal is a smart scheduling software for the workplace to
make lives easier and teams more efficient.</p>
        </Col>
        <Col></Col>
      </Row>

      <Row className="justify-content-md-center">
        <Col xs lg="2"></Col>
        <Col md="auto">
        <style type="text/css">
            {`
            .btn-flat {
              background-color: white;
              color: pink;
              font-family: 'Jost';
            }

            .btn-xxl {
              padding: 1rem 1.5rem;
              font-size: 1.5rem;
            }
            `}
          </style>
          <Button variant="flat">sign in</Button>
          </Col>
          <Col xs lg="2"></Col>
        </Row>

        

      </Container>
    </Container>
    );
  }
}

export default App;
