import React, {Component} from 'react';
import './../App.css';
import {Nav, Navbar, Image, Button} from 'react-bootstrap';
import { Container, Row, Table, Col, CardGroup, Card} from 'react-bootstrap';
import {Jumbotron} from 'react-bootstrap';
import {NavigationBar} from './NavigationBar.js';
import {Team} from './Team.js';


const HeroImageContainer = {
  position: 'absolute',
  top:0,
  left:0,
  zIndex:0,
  width:'100%'
};

const BottomImageContainer = {
  position: 'absolute',
  left: 0,
  zIndex:0,
  minWidth:'100%'
};

export class About extends React.Component {
  render() {
    return (
    <Container fluid>  
      <NavigationBar />
      <Image src="/assests/PurpleGradient.svg" style={HeroImageContainer}/>
      <Container fluid>

        <Container className = "header">
          <Row>
            <h1 className="title mx-auto">Our Story.</h1>
          </Row>

          <Row>
            <Col lg = {7} className = "mx-auto">
            <p className = "paragraph-header">Circal began as a simple project 
            make anyone’s lives easier. As students in college, we had issues 
            finding free time between schedules to do group projects. In our 
            internships, scheduling meetings took a long time. So, we pivoted 
            our idea to fit the workplace to make professionals' lives simpler, 
            cut costs, and increase employee’s productive time.</p> 
            </Col>
          </Row>

          <Row style = {{paddingTop: '30%'}}>
              <h1 className="purple-title mx-auto">Meet the Team</h1>
          </Row>

          <Row style = {{paddingBottom: '5%'}}>
            <h1 style = {{color: '#9C80F5'}} className = "mx-auto">_____</h1>
          </Row>

          <Team/>

          {/* <Row className = "font">
            <Col>
                <Row>
                  <Image className = "mx-auto" src="./assests/NatashaImage.svg"/>
                </Row>
                <Row>
                  <h2 className = "mx-auto" style = {{color: '#FD6585'}}>Natasha Rao</h2>
                </Row>
                <Row> 
                  <h4 className = "mx-auto">CEO</h4>
                </Row>
            </Col>

            <Col>
              <Row>
                <Image  className = "mx-auto" src="./assests/AarushiImage.svg"/>
              </Row>
              <Row>
                <h2 className = "mx-auto" style = {{color: '#FD6585'}}>Aarushi Upadhayaya</h2>
              </Row>
              <Row>
                <h4 className = "mx-auto">CTO</h4>
              </Row>
            </Col>

            <Col>
              <Row>
                <Image className = "mx-auto" src="./assests/MirandaImage.svg"/>
              </Row>
              <Row>
                <h2 className = "mx-auto" style = {{color: '#FD6585'}}>Miranda Chai</h2>
              </Row>
              <Row>
                <h4 className = "mx-auto">CIO</h4>
              </Row>
            </Col>
          </Row> */}

          <Container>
            <Row  style = {{paddingTop: '30%'}} fluid>   
              <Image src="./assests/AboutBottomLogo.svg" style={BottomImageContainer}/>
            </Row>
          </Container>
      
        </Container>
      </Container>
    </Container>
    );
  }
}
export default About;
