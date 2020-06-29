import React from 'react'
import {Container, Nav, Navbar, Image, Col, Row, Button, Link, Media} from 'react-bootstrap'
import { faBars, faBell, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import ProfileNav from './ProfileNav';

library.add(faBars, faBell, faSignOutAlt)

const NavBarStyle = {
    position: 'absolute',
    left: 0,
    right: 0,
    marginTop: '1rem',
    minWidth: '100vw',
    width: '100vw',
    zIndex:3,
    color: '#B1B6C6'
};

export class TopNav extends React.Component {
    render() {
        return(
                <Navbar variant = "dark" expand = "lg" className = "title-nav shadow-sm bg-light w-100">
                            <Container className = "logo-bg mr-0" style = {{width: '13.1%'}}>
                                <img
                                alt=""
                                src="/assests/LogoImage.png"
                                className="d-inline-block align-top mt-2 ml-3 pl-0"
                                style = {{zIndex: '3', height: '55%'}}
                                />
                                <Col className = "pl-0 pt-2">
                                    <Navbar.Brand className = "font" variant = "dark" className = "w-25 mt-2" style = {{zIndex: '3'}}>circal</Navbar.Brand>
                                </Col>
                            </Container>
                            <Container style = {{width: '86.9%', left: '14%', position: 'fixed'}}>
                                <Row className = "w-75">
                                        <Button className = "toggle-btn" variant = "link" data-toggle = "collapse" 
                                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                        aria-expanded="false" aria-label="Toggle navigation"><FontAwesomeIcon icon = "bars"/></Button>
                                        <h5 className = "my-auto pl-2">Home</h5>
                                </Row>
                            </Container>
                </Navbar>
        );
    }
}

export default TopNav;