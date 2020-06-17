import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import ContactForm from './ContactForm';
import {NavigationBar} from './NavigationBar.js';
import {GrayFooter} from './GrayFooter';


const HeroImageContainer = {
    position: 'absolute',
    top:0,
    left:0,
    zIndex:0,
    minWidth:'100%',
    width: '100%'
  };

const OtherStyle = {
    position: 'absolute',
    zIndex:2,
    minWidth:'100%',
    width: '100%'
  };

const BottomImageContainer = {
    position: 'absolute',
    left: -15,
    zIndex:0,
    paddingTop: '5%',
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
                        <h1 className="title mx-auto">Contact Us</h1>
                    </Row>
                    <Row>
                        <p className="paragraph-header mx-auto">Interested in Circal for your business or 
                            have a question?<br></br> Send us a message below!</p>
                    </Row>
                    <Row style = {{'padding-top': '8rem'}, {paddingBottom:'5%'}}>
                        <ContactForm/>
                    </Row>
                    <Container style = {{BottomImageContainer}, {left: -15}, {float: 'left'}}>
                        <GrayFooter/>
                    </Container>
                    
                </Container>
                
                
          </Container>
          

      );
    }
}
export default Contact;