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



const OtherStyle = {
  position: 'absolute',
  zIndex:2,
  left: 0,
  right: 0,
  minWidth: '100%',
  width:'100%'
};

const HeroImageContainer = {
  position: 'absolute',
  top:0,
  left:0,
  zIndex:0,
  minWidth: '100%',
  width:'100%',
};

const BottomImageContainer = {
  position: 'absolute',
  left: 0,
  right: 0,
  zIndex:0,
};

export class Home extends React.Component {
    render() {
      return (
        <Container fluid>
          <NavigationBar />
          <Container style = {HeroImageContainer} sm = {12} md = {12} fluid>
            <Image src="/assests/PinkGradient.svg" style={HeroImageContainer} fluid/>
            <Container style = {OtherStyle} fluid>
              <Row>
                <Container className = "font header">
                  <Row style = {{display: 'flex', justifyContent: 'center'}}>
                      <h1 className="title header">
                        Meetings made easy.
                      </h1>
                  </Row>

                  <Row>
                    <Col lg = {5} className = "mx-auto">
                      <p className = "paragraph-header">Circal is a smart scheduling software for the workplace to make lives easier and teams more efficient.</p> 
                    </Col>
                  </Row>

                  <Row className = "center">
                      <Button variant="outline-light" style = {{width: '20%'}} size = "lg" className = "btn-rounded" href = "/signin">sign in</Button>
                  </Row>
                </Container>
              </Row>
              <Row className = "center padding">
                    <Col lg="mx-auto font">
                        <h1 className="text">The problem is in the numbers.</h1>
                    </Col>
              </Row>
              <Row style = {{marginBottom: '5%'}}>
                <ProblemStats/>
              </Row>
              <Row style = {{marginBottom: '35%'}}>
                <FeaturesSection/>
              </Row>
              <Row style = {{marginTop: '50%'}}>
                <GetStartedCard/>
              </Row>
              <Image style = {BottomImageContainer} src = "./assests/Footer.svg"></Image>
            </Container>
            
          </Container>
        </Container>
      );
    }
}

export default Home;
