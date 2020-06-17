import React from 'react';
import {Link} from 'react-router-dom';
import {Image, Button, Container, Navbar, Row, Col} from 'react-bootstrap';

const BottomImageContainer = {
    position: 'absolute',
    left: -50,
    zIndex:-1,
    minWidth:'100%',
    width: '100%'
  };

  const NavBarStyle = {
    position: 'absolute',
    left: 0,
    right: 0,
    marginTop: '1rem',
    width: '100%',
};

export class GrayFooter extends React.Component {
    render() {
        return(
            <Container fluid>
                <Container fluid>
                <Image src="./assests/AboutBottomLogo.svg" style={BottomImageContainer}/>
                </Container>
                <Container style = {{zIndex: '1', display: 'flex', alignSelf: 'flex-end'}}>
                    <Navbar variant = "light" className = "font" sticky="bottom" fluid>
                        <Navbar.Brand className = "mx-auto" style = {{fontSize: '2rem', paddingLeft: '1rem'}} href="/">
                            <Row style={{justifyContent: 'center'}}>
                                <Col lg={7}></Col>
                                <Col lg={7}></Col>
                                <Col lg={7}></Col>
                                <Col lg={7}></Col>
                                <Col lg={7}></Col>
                                <Col lg={7}></Col>

                                <Col lg={1} >
                                <img
                                alt=""
                                src="/assests/GrayLogo.svg"
                                width = "40"
                                height = "40"
                                />
                                </Col>
                                <Col lg={1}></Col>
                                <Col lg={2}>
                                    <h1 style = {{color: 'lightgray'}}>circal</h1>
                                </Col>
                                
                                <Col lg={7}></Col>

                            </Row>
                        </Navbar.Brand>
                    </Navbar>
                </Container>
            </Container>
        );
    }
}

export default GrayFooter;