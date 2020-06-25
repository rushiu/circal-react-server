import React from 'react';
import {Container, Nav, Navbar, Button, Row, Col, Image} from 'react-bootstrap'
import {SimpleNav} from '.././SimpleNav.js'
import './dashboard.css'
import { faHome, faPeopleCarry, faComment, faCalendar} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faHome, faPeopleCarry, faComment, faCalendar);

const SideBarStyle = {
    position: 'absolute',
    left: '0', 
    bottom: '0',
    width: '13%',
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: '0',
    minHeight: '100%',
    fontSize: '1.5rem',
    background: 'linear-gradient(141.68deg, #FAD7A1 -27.76%, #FD6585 103.99%)',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.10)',
    zIndex: '0'
}

export class SideNavigation extends React.Component {
    render() {
        return(
                <Navbar variant="dark"  expand="lg" id ="navbarSupportedContent"  style = {SideBarStyle}>
                    <Row className = "sidebar-links">
                        <Nav className = "flex-column">
                            <Nav.Link href = "/user_dashboard">
                                    <h5 className = "center-nav-link">home</h5>
                            </Nav.Link>
                            <Nav.Link href = "/my_team">
                                    <h5 className = "center-nav-link">team</h5>
                            </Nav.Link>
                            <Nav.Link href = "/my_messages">
                                    <h5 className = "center-nav-link">messages</h5>
                            </Nav.Link>
                            <Nav.Link href = "/my_account">
                                    <h5 className = "center-nav-link">calendar</h5>
                            </Nav.Link>
                        </Nav>
                    </Row>
                    <Row style = {{justifyItems: 'stretch', position: 'absolute', left: '0', right: '0', bottom: '0'}}>
                        <Col>
                            <Button href="/" variant = "clear" style = {{color: 'white', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.15)'}} size = "lg" className = "mx-auto" block>logout</Button>
                        </Col>
                    </Row>
                </Navbar>
        );
    }
}