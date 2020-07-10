import React from 'react';
import {Nav, Navbar, Image, Button, ButtonToolbar, Table} from 'react-bootstrap';
import { Container, Row, Col, CardGroup, Card} from 'react-bootstrap';
import {Jumbotron} from 'react-bootstrap';
import {FeaturesSection} from './FeaturesSection.js';
import {SignUp} from './SignUpFlow/SignUp.js';
import {Router, Route, Link} from 'react-router-dom';
import SignIn from './SignIn.js';
import '.././App.css';
import '.././css/features.css';
import {GetStartedCard} from './GetStartedCard.js';
import {FourFeatures} from './FourFeatures.js';
import {NavigationBar} from './NavigationBar.js';
import {TwoWaySync} from './TwoWaySync.js';
import {MeetingAgenda} from './MeetingAgenda.js';
import {MeetingStats} from './MeetingStats.js';
import {SmartMeeting} from './SmartMeeting.js';

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
  width:'100%',
};

const BottomImageContainer = {
  position: 'absolute',
  left: 0,
  right: 0,
  zIndex:0,
};

export class Features extends React.Component {
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
                        Features
                      </h1>
                  </Row>

                  <Row>
                    <Col lg = {5} className = "mx-auto">
                      <p className = "paragraph-header">See the features that make Circal so unique.</p> 
                    </Col>
                  </Row>

                  <Row className = "center">
                      <Button variant="outline-light" style = {{width: '20%'}} size = "lg" className = "btn-rounded" href = "/signin">request demo</Button>
                  </Row>
                </Container>
              </Row>
              <Row className = "center padding">
                    <Col lg="mx-auto font">
                        <h1 className="text">Four Main Features</h1>
                    </Col>
              </Row>
              <Row style = {{marginBottom: '5%'}}>
                <FourFeatures/>
              </Row>
              <Row style = {{marginBottom: '15%', paddingBottom: '25rem'}}>
                <TwoWaySync/>
              </Row>
              <Row style = {{marginTop: '0%', marginBottom: '44%'}}>
                <MeetingAgenda/>
              </Row>
              <Row style = {{marginTop: '40%', marginBottom: '44%'}}>
                <MeetingStats/>
              </Row>
              <Row style = {{marginTop: '40%'}}>
                <SmartMeeting/>
              </Row>
              <Image style = {BottomImageContainer} src = "./assests/Footer.svg"></Image>
            </Container>
            
          </Container>
        </Container>
      );
    }
}

export default Features;
