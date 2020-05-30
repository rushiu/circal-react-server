import React from 'react';
import {Nav, Navbar, Image, Button, ButtonToolbar, Table} from 'react-bootstrap';
import { Container, Row, Col, CardGroup, Card} from 'react-bootstrap';
import {Jumbotron} from 'react-bootstrap';
import {FeaturesSection} from './FeaturesSection.js';
import {SignUp} from './SignUp.js';
import {Router, Route, Link} from 'react-router-dom';
import SignIn from './SignIn.js';
import '.././App.css';
import {GetStartedCard} from './GetStartedCard.js';
import {ProblemStats} from './ProblemStats.js';
import {NavigationBar} from './NavigationBar.js';


const SectionBackground = {
  position: 'absolute',
  left:-30,
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

const HeroImageContainer = {
  position: 'absolute',
  top:0,
  left:0,
  zIndex:0,
  width:'100%'
};

const BottomImageContainer = {
  position: 'absolute',
  left: -30,
  right: 0,
  zIndex:0,
};

export class Home extends React.Component {
    render() {
      return (
      <Container fluid>
        <NavigationBar />
        <Image src="/assests/PinkGradient.svg" style={HeroImageContainer}/>
        <Container style = {OtherStyle} fluid>
          <Row>
            <Container className = "font header">
              <Row style = {{display: 'flex', justifyContent: 'center'}}>
                  <h1 className="title header">
                    Meetings made easy.
                  </h1>
              </Row>

              <Row lg = {10}>
                <Col lg={6} className = "mx-auto">
                <p className = "paragraph-header">Circal is a smart scheduling software for the workplace to
              make lives easier and teams more efficient.</p> 
                </Col>
              </Row>

              <Row className="mx-auto" style = {{display: 'flex', justifyContent: 'center'}}>
                  <Button variant="outline-light" style = {{width: '20%'}} size = "lg" className = "btn-rounded mx-auto" href = "/signin">sign in</Button>
              </Row>
            </Container>
          </Row>
          <Row>
            <ProblemStats/>
          </Row>
          <Row>
            <FeaturesSection/>
          </Row>
          <Row>
            <GetStartedCard/>
          </Row>
          <Row>
            <Image style = {BottomImageContainer} src = "./assests/Footer.svg"></Image>
          </Row>
        </Container>
      </Container>
      );
    }
}

export default Home;
