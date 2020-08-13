import React from 'react';
import {Container, Nav, Navbar, Button, Row, Col, Image} from 'react-bootstrap'
import {SimpleNav} from '.././SimpleNav.js'
import './dashboard.css'
import { faHome, faPeopleCarry, faComment, faCalendar, faStickyNote, faNotesMedical} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {TransitionGroup} from 'react-transition-group';
library.add(faHome, faPeopleCarry, faComment, faCalendar, faStickyNote, faNotesMedical);

const SideBarStyle = {
    left: '0', 
    bottom: '0',
    paddingLeft: '15px',
    width: '13vw',
    position: 'fixed',
    minHeight: '100vh',
    background: 'white',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.10)',
    zIndex: '0'
}

function SideNavigation({activeURL}) {
        return(
                <Navbar variant="light" expand="lg" id ="navbarSupportedContent"  style = {SideBarStyle}>
                    <Row className = "my-auto">
                        <Nav className = "flex-column sidebar-links font" variant = "pills" defaultActiveKey={activeURL}>
                            <Nav.Item className = "pb-4">
                                <Nav.Link href = "/user_dashboard">
                                        DASHBOARD
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className = "pb-4">
                                <Nav.Link href = "/my_team"> 
                                        TEAM
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className = "pb-4">
                                <Nav.Link href = "/my_agendas">
                                        AGENDAS
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className = "pb-5 mb-5">
                                <Nav.Link href = "/my_calendar">
                                        CALENDAR
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Row>
                </Navbar>
        );
}

export default SideNavigation;