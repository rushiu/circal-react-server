import React from 'react';
import {Nav, Navbar, Image, Button, ButtonToolbar} from 'react-bootstrap';
import { Container, Row, Col, CardGroup, Card} from 'react-bootstrap';
import {Jumbotron} from 'react-bootstrap';
import {FeaturesSection} from './FeaturesSection.js';
import {SignUp} from './SignUp.js';
import {Router, Route, Link} from 'react-router-dom';


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
            <Row className="justify-content-md-center">
              <Col></Col>
              <Col lg="mx-auto">
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
                <Col></Col>
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

            <Row style = {{paddingBottom: '5%', display: 'flex', justifyContent: 'center'}}>
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

          <Container className = "padding text-center">
          <Card className = "font shadow-sm bg-grey rounded" bg = "light">
            <Card.Body className = "grey-header" fluid>
              <Card.Title  as="h2">Get your business started with Circal
                </Card.Title>
              <Card.Text>
                Contact us to learn about how Circal fits your business and pricing.
              </Card.Text>

                <ButtonToolbar>
                  <style>
                    {`
                    .btn-green {
                      background-image: url(./assests/GreenButton.svg);
                      color: white;
                      background-repeat: no-repeat;
                      background-size: 100% 100%;
                    }
                    .btn-xxl {
                      padding: 4rem 4.5rem;
                      white-space: nowrap;
                      text-align: center;
                    }
                    `}
                  </style>
                  <Button variant = "green" size = "xxl">request demo</Button>
                  <style>
                    {`
                    .btn-purple {
                      background-image: url(./assests/PurpleButton.svg);
                      color: white;
                      background-repeat: no-repeat;
                      background-size: 100% 100%;
                    }
                    `}
                  </style>
                  <Button variant = "purple" size = "xxl">contact us</Button>
                </ButtonToolbar>
            </Card.Body>
          </Card>
          </Container>

            <Container fluid>
            <Image style = {BottomImageContainer} src = "./assests/Footer.svg"></Image>
            </Container>
         </Container>
        </Container>
      );
    }
}

export default Home;
