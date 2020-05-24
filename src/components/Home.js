import React from 'react';
import {Nav, Navbar, Image, Button, ButtonToolbar} from 'react-bootstrap';
import { Container, Row, Col, CardGroup, Card} from 'react-bootstrap';
import {Jumbotron} from 'react-bootstrap';
import {FeaturesSection} from './FeaturesSection.js';
import {SignUp} from './SignUp.js';
import {Router, Route, Link} from 'react-router-dom';
import SignIn from './SignIn.js';
import {GetStartedCard} from './GetStartedCard.js';


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
  left:-30,
  right: 0,
  zIndex:0,
  width:'100%'
};

export class Home extends React.Component {
    render() {
      return (
      <Container fluid>
            <Image src="/assests/PinkGradient.svg" style={HeroImageContainer}/>
        <Container style = {OtherStyle} fluid>
          <Container className = "font header">
            <Row>
              <Col></Col>
              <Col lg="mx-auto">
                <h1 className="title justify-content-md-center">
                  Meetings made easy.
                </h1>
              </Col>
              <Col></Col>
            </Row>
            <Row lg = {10}>
            <Col></Col>
              <Col lg={6}>
              <p className = "paragraph-header">Circal is a smart scheduling software for the workplace to
            make lives easier and teams more efficient.</p> 
              </Col>
              <Col></Col>
            </Row>
            <Row className="justify-content-md-center" fluid>
              <Col className = "center">
                <Link to = "/signin">
                  <Button variant="light" style = {{border: 'hidden', width: '160%', color: 'text-primary'}} className = "btn-rounded">sign in</Button>
                </Link>
              </Col>
            </Row>
          </Container>

          <Container className = "font text-center" fluid>
            <Row>
            <Col></Col>
            <Col lg="mx-auto">
              <h3 className="text">The problem is in the numbers.</h3>
            </Col>
            <Col></Col>
            </Row>

            <Row style = {{ display: 'flex', justifyContent: 'center'}}>
              <CardGroup lg="mx-auto">
                <Card border="light">
                <Card.Body className = "subtext">
                  <Card.Title as="h1">11</Card.Title>
                  <Card.Text>
                    million meetings in America everyday.
                  </Card.Text>
                </Card.Body>
                </Card>

                <Card border="light" >
                <Card.Body className = "subtext">
                  <Card.Title as="h1">$399.1</Card.Title>
                  <Card.Text>
                    billion loss in USA for poorly <br></br> organized meetings. (Yes. Billions.)
                  </Card.Text>
                </Card.Body>
                </Card>

                <Card border="light">
                <Card.Body className = "subtext">
                  <Card.Title as="h1">4.8</Card.Title>
                  <Card.Text>
                    hours/week per professional <br></br> spent setting up meetings
                  </Card.Text>
                </Card.Body>
                </Card>
              </CardGroup>
            </Row>      
          </Container>

          <FeaturesSection/>
          <GetStartedCard/>
          <Image style = {BottomImageContainer} src = "./assests/Footer.svg"></Image>
         </Container>
        </Container>
      );
    }
}

export default Home;
