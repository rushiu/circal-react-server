import React, {Component} from 'react';
import './../App.css';
import {Nav, Navbar, Image, Button} from 'react-bootstrap';
import { Container, Row, Col, CardGroup, Card} from 'react-bootstrap';
import {Jumbotron} from 'react-bootstrap';


const HeroImageContainer = {
  position: 'absolute',
  top:0,
  left:0,
  zIndex:0,
  width:'100%'
};

const BottomImageContainer = {
  position: 'absolute',
  left:-15,
  zIndex:0,
  width:'100%'
};

const SectionBackground = {
  position: 'absolute',
  left:0,
  right: 0,
  zIndex:0,
  height: '80vh',
  width:'100%'
};

const NavBarStyle = {
  position: 'absolute',
  zIndex:1
};

const OtherStyle = {
  position: 'absolute',
  zIndex:2,
  width:'100%',
};

export class About extends React.Component {
  render() {
    return (
    <Container fluid>  
      
      <Image src="/assests/PurpleGradient.svg" style={HeroImageContainer}/>
      <Container style={OtherStyle} fluid>

    <Container className = "header">
      <Row>
        <Col></Col>
        <Col lg="mx-auto">
        <h1 className="title justify-content-md-center">
          Our Story.
        </h1>
        </Col>
        <Col></Col>
      </Row>

      <Row lg = {10}>
      <Col></Col>
        <Col lg={6}>
        <p className = "paragraph-header">Circal began as a simple project 
        make anyone’s lives easier. As students in college, we had issues 
        finding free time between schedules to do group projects. In our 
        internships, scheduling meetings took a long time. So, we pivoted 
        our idea to fit the workplace to make professionals' lives simpler, 
        cut costs, and increase employee’s productive time.</p> 
        </Col>
        <Col></Col>
      </Row>
    </Container>

  <Container className = "text-center" fluid>
  
  <Row><p></p></Row>
  <Row><p></p></Row>
  <Row><p></p></Row>
  <Row><p></p></Row>
  <Row><p></p></Row>
  <Row><p></p></Row>
  <Row><p></p></Row>
  <Row><p></p></Row>
  <Row><p></p></Row>
  <Row><p></p></Row>
  <Row><p></p></Row>

  <Row>
    <Col></Col>
    <Col lg="mx-auto">
      <h1 className="purple-title justify-content-md-center">
        Team
      </h1>
    </Col>
    <Col></Col>
  </Row>

  <Row><p></p></Row>
  <Row><p></p></Row>

  <Row>
    <Col lg = {2}></Col>
    <Col lg = {2} className = "text-center">
      <Row lg = {1}>
        <Image src="./assests/NatashaImage.svg"/>
      </Row> 
      <Row> </Row>
      <Row lg = {1}>
        <h4 className="pink-title">Natasha</h4>
      </Row>
      <Row lg = {1}>
        <p className="black-subheading">CEO</p>
      </Row>
      <Row lg = {1}>
        <p>LinkedIn</p>
      </Row>
    </Col>
    
    <Col lg = {1}></Col>

    <Col lg = {2} className = "text-center">
      <Row lg = {1}>
        <Image src="./assests/AarushiImage.svg"/>
      </Row> 
      <Row> </Row>
      <Row lg = {1}>
        <h4 className="pink-title">Aarushi</h4>
      </Row>
      <Row lg = {1}>
        <p className="black-subheading">CTO</p>
      </Row>
      <Row lg = {1}>
        <p>LinkedIn</p>
      </Row>
    </Col>

    <Col lg = {1}></Col>

    <Col lg = {2} className = "text-center">
      <Row lg = {1}>
        <Image src="./assests/MirandaImage.svg"/>
      </Row> 
      <Row> </Row>
      <Row lg = {1}>
        <h4 className="pink-title">Miranda</h4>
      </Row>
      <Row lg = {1}>
        <p className="black-subheading">CIO</p>
      </Row>
      <Row lg = {1}>
        <p>LinkedIn</p>
      </Row>
    </Col>

    <Col lg = {2}></Col>

  </Row>
  </Container>

  <Container className = "header">
    <Row lg = {10}>
      <Col>
        <Image width="400" src="./assests/PurdueImage.svg"/>
      </Col>
      
      <Col>
        <Row>
          <p className = "black-paragraph-header">We are all students at Purdue University 
          studying computer science with varying interests in entrepreneurship, 
          marketing, design, and artificial intelligence. We teamed up at our university's 
          hackathon, BoilerMake, to create this simple project and, later, we were accepted 
          to and participated in The Boiler, Purdue's Startup Accelerator run by The Anvil. </p> 
        </Row>
      </Col>

    </Row>

    <Row><p></p></Row>
    <Row><p></p></Row>
  </Container>

<Container>
  <Row fluid>   
    <Image src="./assests/AboutBottomLogo.svg" style={BottomImageContainer}/>
  </Row>
</Container>
  
</Container>


</Container>
    );
  }
}
export default About;
