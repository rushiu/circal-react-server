import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import ContactForm from './ContactForm';
import {NavigationBar} from './NavigationBar.js';

const HeroImageContainer = {
    position: 'absolute',
    top:0,
    left:0,
    zIndex:0,
    width:'100%'
  };

const OtherStyle = {
    position: 'absolute',
    zIndex:2,
    width:'100%',
  };

const BottomImageContainer = {
    position: 'absolute',
    left: 0,
    zIndex:0,
    'padding-top': '60rem',
    width:'100%'
};

export class Contact extends React.Component {
    render() {
      return (
          <Container fluid>
            <NavigationBar />
            <Image src = "./assests/GreenHeader.svg" style = {HeroImageContainer}/>
                <Container style = {OtherStyle} className = "font">
                    <Row>
                        <Col lg = {7}></Col>
                        <Col lg = "mx-auto">
                            <h1 className="title justify-content-md-center">Contact Us</h1>
                        </Col>
                        <Col lg = {1}></Col>
                    </Row>
                    <Row>
                        <Col lg = {6}></Col>
                        <Col lg = {5}>
                            <p className="paragraph-header">Interested in Circal for your business or 
                            have a question? Send us a message below!</p>
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col className ="col-lg-11 col-md-6 col-sm-6 col-xs-6 offset-5 float-md-center" style = {{'padding-top': '8rem'}}>
                            <ContactForm/>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Image src="./assests/AboutBottomLogo.svg" style={BottomImageContainer}/>
                </Container>

          </Container>
      );
    }
}
export default Contact;