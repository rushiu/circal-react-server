import React, {Component} from 'react';
import './App.css';
import {Nav, Navbar, Image, Button, ButtonToolbar} from 'react-bootstrap';
import { Container, Row, Col, CardGroup, Card} from 'react-bootstrap';
import {Jumbotron} from 'react-bootstrap';
import {Contact} from './components/Contact.js';
import {Home} from './components/Home.js';
import {About} from './components/About.js';
import {Pricing} from './components/Pricing.js';
import {NavigationBar} from './components/NavigationBar.js';
import { BrowserRouter, Router, Route, Switch} from 'react-router-dom';
import { SignUp } from './components/SignUp';

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

const OtherStyle = {
  position: 'absolute',
  zIndex:2,
  width:'100%',
};

class App extends React.Component {
  render() {
    return (
  <BrowserRouter>
    <Container fluid>  
          <NavigationBar/>
          <Switch>
            <Route path ='/' component= {Home} exact/>
            <Route path = '/features'/>
            <Route path = '/pricing' component = {Pricing}/>
            <Route path = '/about' component = {About}/>
            <Route path = '/contact' component = {Contact}/>
          </Switch>
    </Container>
  </BrowserRouter>

    );
  }
}

export default App;
