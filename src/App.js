import React, {Component} from 'react';
import './App.css';
import {Nav, Navbar, Image, Button} from 'react-bootstrap';
import { Container, Row} from 'react-bootstrap';
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
      <Image src="/assests/GradientHeader.svg" style={HeroImageContainer}/>
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
      <Container>
        <h1 className = "title">
          Meetings made easy.
        </h1>
        <p className = "paragraph-header">Circal is a smart scheduling software for the workplace to<br></br>
make lives easier and teams more efficient.</p>
      <Button className="center-item" variant="light">sign in</Button>
      </Container>
      </Container>
    
    </Container>
    );
  }
}

export default App;
