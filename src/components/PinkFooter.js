import React from 'react';
import {Link} from 'react-router-dom';
import {Image, Button, Container, Navbar, Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faFacebookSquare, faLinkedin, faTwitterSquare } from "@fortawesome/free-brands-svg-icons"
import './../css/Pricing.css';


library.add(fab, faEnvelope);

const BottomImageContainer = {
    position: 'absolute',
    left: 0,
    minHeight: '25%',
    //minWidth:'100%',
    //width: '100%',
    zIndex: 0
  };

  const NavBarStyle = {
    position: 'absolute',
    left: 0,
    right: 0,
    marginTop: '1rem',
    width: '100%',
    zIndex: 1
};

const bottomSyle = {
    fontFamily: 'Jost',
}

export class PinkFooter extends React.Component {
    render() {
        return(
            <Container style={bottomSyle}>
                <Image style = {BottomImageContainer}  src = "./assests/Footer.svg" sticky="bottom"/>
                    <Row style={{paddingTop: '1050px'}}>
                        <Col lg={2} md={3} xs={2}>
                        <Row>
                            <Col style={{marginLeft: '5%'}}>
                                <Row style={{marginBottom: '10px'}}>
                                    <a style={{fontSize: '15px'}, {color: 'white'}}  href="/features"> features </a>
                                </Row>
                                <Row style={{marginBottom: '10px'}}>
                                    <a style={{fontSize: '15px'}, {color: 'white'}}  href="/pricing"> pricing </a>
                                </Row>
                                <Row style={{marginBottom: '7px'}}>
                                    <a style={{fontSize: '15px'}, {color: 'white'}}  href="/about"> about </a>
                                </Row>
                            </Col>
                            <Col>
                                <Row style={{marginBottom: '10px'}}>
                                    <a style={{fontSize: '15px'}, {color: 'white'}}  href="/contact"> contact </a>
                                </Row>
                                <Row style={{marginBottom: '10px'}}>
                                    <a style={{fontSize: '15px'}, {color: 'white'}}  href="/signin"> login </a>
                                </Row>
                                <Row style={{marginBottom: '7px'}}>
                                    <a style={{fontSize: '15px'}, {color: 'white'}}  href="/signup"> signup </a>
                                </Row>
                            </Col>
                        </Row>
                        </Col>
                        <Col style={{float:'right'}, {textAlign: 'right'}, {alignContent: 'right'}, {paddingLeft: '23%'}}>
                            <Row>
                                <p className='logoWhite' style={{marginTop: '7px'}}  href="/">o</p>
                                <a className='logoTitle' style={{fontSize: '40px'}, {color: 'white'}}  href="/">circal</a>
                            </Row>
                                                            

                        </Col>
                        
                        <Col style={{alignContent: 'right'}, {float: 'right'}, {textAlign: 'right'}, {marginLeft: '10%'}, {marginTop: '15px'}}>
                            <Row style={{marginBottom: '10px'}}>
                                <Col lg={3} style={{padding:'3px'}}>
                                    
                                </Col>
                                <Col style={{padding:'3px'}, {alignContent: 'center'}, {float: 'center'}, {textAlign: 'center'}}>
                                    <a href ="https://www.linkedin.com" style={{padding:'5px'}}>
                                        <FontAwesomeIcon icon={faLinkedin} style={{color: 'white'}} size='2x'/>
                                    </a>
                                    <a href = "https://instagram.com" style={{padding:'5px'}}>
                                        <FontAwesomeIcon icon={faFacebookSquare} style={{color: 'white'}} size='2x'/>
                                    </a>
                                    <a href = "https://facebook.com" style={{padding:'5px'}}>
                                        <FontAwesomeIcon icon={faTwitterSquare} style={{color: 'white'}} size='2x'/>
                                    </a>
                                    <a href = "https://twitter.com" style={{padding:'5px'}}>
                                        <FontAwesomeIcon icon={faInstagram} style={{color: 'white'}} size='2x'/>
                                    </a>
                                </Col>
                            </Row>
                            <Row style={{float: 'right'}, {textAlign: 'right'}, {alignContent: 'right'}}>
                                <Col lg={4} md={2} xs={1}>
                                    
                                </Col>
                                <a className="footerInfo" style={{color: 'white'}}  href="/"> copyright </a>
                                <p className="footerInfo" style={{color: 'white'}}  href="/"> - </p>
                                <a className="footerInfo" style={{color: 'white'}}  href="/privacy_policy"> privacy </a>
                                <p className="footerInfo" style={{color: 'white'}}  href="/"> - </p>
                                <a className="footerInfo" style={{color: 'white'}}  href="/"> terms </a>
                                     
                            </Row>
                        </Col>
                        
                    </Row>
                        
            </Container>
        );
    }
}

export default PinkFooter;