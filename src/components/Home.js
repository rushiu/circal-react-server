import React from 'react';
import {Nav, Navbar, Image, Button, ButtonToolbar, Table, ResponsiveEmbed} from 'react-bootstrap';
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
  left:0,
  zIndex:0,
  minHeight: '50%'
};

const BottomImageContainer = {
  position: 'absolute',
  left: 0,
  right: 0,
  zIndex:0
};

export class Home extends React.Component {
    render() {
      return (
        <Container className = "min-vw-100" fluid>
          <NavigationBar />
          <Container style = {HeroImageContainer} sm = {12} md = {12} fluid>
            <Image src="/assests/PinkGradient.svg" style={HeroImageContainer} className = "min-vw-100 w-100 mx-0 px-0 sticky-top" fluid/>
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
                      <Button variant="outline-light" style = {{width: '20%'}} className = "btn-rounded" href = "/signin">sign in</Button>
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
              <Row className = "pl-0 ml-0 mr-0 pr-0">
                <FeaturesSection/>
              </Row>
              <Row style = {{marginTop: '10%'}}>
                <GetStartedCard/>
              </Row>
              
              <Image style = {BottomImageContainer} className = "sticky-bottom" src = "./assests/Footer.svg"></Image>
            </Container>
            
          </Container>
        </Container>
      );
    }
}

export default Home;
