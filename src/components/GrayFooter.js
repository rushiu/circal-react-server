import React from 'react';
import {Link} from 'react-router-dom';
import {Image, Button, Container, Navbar, Row, Col} from 'react-bootstrap';

const BottomImageContainer = {
    position: 'absolute',
    left: 0,
    minWidth:'100%',
    width: '100%',
    backgroundColor: '#B0B4C3'
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
            <Container className = "min-vw-100 h-25 mr-0 ml-0 pl-0 pr-0 pt-5" fluid>
                <Image src="./assests/AboutBottomLogo.svg" style={BottomImageContainer}/>
                <Container>
                    <Navbar variant = "light" className = "font" sticky="bottom" fluid>
                        <Navbar.Brand className = "mx-auto" style = {{fontSize: '2rem'}} href="/">
                            <Row className = "min-vw-100 justify-content-start float-left">
                                <img
                                alt=""
                                className = ""
                                src="/assests/GrayLogo.svg"
                                width = "40"
                                height = "40"
                                />
                                <h1 style = {{color: 'lightgray'}} className = "pl-3 my-n2">circal</h1>
                            </Row>
                        </Navbar.Brand>
                    </Navbar>
                </Container>
            </Container>
        );
    }
}

export default GrayFooter;