import React, {Component} from 'react';
import './App.css';
import {Nav, Navbar, Image, Button, ButtonToolbar} from 'react-bootstrap';
import { Container, Row, Col, CardGroup, Card} from 'react-bootstrap';
import {Jumbotron} from 'react-bootstrap';
import {Contact} from './components/Contact.js';
import {Home} from './components/Home.js';
import {NavigationBar} from './components/NavigationBar.js';
import { BrowserRouter, Router, Route, Link, Switch} from 'react-router-dom';


const HeroImageContainer = {
  position: 'absolute',
  top:0,
  left:0,
  zIndex:0,
  width:'100%'
};

const SectionBackground = {
  position: 'absolute',
  left:-15,
  right: 0,
  zIndex:0,
  height: '80vh',
  width:'100%'
};

// const NavBarStyle = {
//   position: 'absolute',
//   zIndex:1
// };

const OtherStyle = {
  position: 'absolute',
  zIndex:2,
  width:'100%',
};

class App extends React.Component {
  render() {
    return (
  <Container fluid>  
      
    <Image src="/assests/PinkGradient.svg" style={HeroImageContainer}/>
    <Container style={OtherStyle} fluid>
        <Navbar variant="dark">
              <img
                alt=""
                src="/assests/LogoImage.png"
                width="35"
                height="25"
                className="d-inline-block align-top"
              />
            <Navbar.Brand exact to = "/" href="">circal</Navbar.Brand>
              <Nav className ="mr-auto">
                  <Nav.Link href="/"></Nav.Link>
                  <Nav.Link href="/features">features</Nav.Link>
                  <Nav.Link href="/pricing">pricing</Nav.Link>
                  <Nav.Link href="/about">about</Nav.Link>
                  <Nav.Link href="/contact">contact</Nav.Link>
              </Nav>
        </Navbar>
        <Home/>
</Container>
</Container>
    );
  }
}

export default App;
