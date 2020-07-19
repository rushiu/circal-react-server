import React from 'react';
import {Container, Nav, Navbar, Button, Row, Col, Image} from 'react-bootstrap'
import {SimpleNav} from '.././SimpleNav.js'
import './dashboard.css'
import { faHome, faPeopleCarry, faComment, faCalendar} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {TransitionGroup} from 'react-transition-group';
library.add(faHome, faPeopleCarry, faComment, faCalendar);

const SideBarStyle = {
    left: '0', 
    bottom: '0',
    width: '13%',
    position: 'fixed',
    minHeight: '100vh',
    background: 'white',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.10)',
    zIndex: '0'
}

export class SideNavigation extends React.Component {
    render() {
        return(
                <Navbar variant="light"  expand="lg" id ="navbarSupportedContent"  style = {SideBarStyle}>
                    <Row>
                        <Nav className = "flex-column sidebar-links" variant = "pills" defaultActiveKey="/user_dashboard">
                            <Nav.Item className = "pb-3">
                                <Nav.Link href = "/user_dashboard" className = "h6">
                                    home
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className = "pb-3">
                                <Nav.Link href = "/my_team" className = "font h6"> 
                                    team  
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className = "pb-3">
                                <Nav.Link href = "/my_messages" className = "font h6">
                                    messages
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className = "pb-3">
                                <Nav.Link href = "/my_account" className = "font h6">
                                    calendar
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Button href="/" variant = "primary" style = {{boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.15)', color: 'primary'}} className = "mx-auto w-75">
                                    logout
                                </Button>
                            </Nav.Item>
                        </Nav>
                    </Row>
                </Navbar>
        );
    }
}