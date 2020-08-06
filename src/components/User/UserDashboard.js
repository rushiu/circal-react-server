import React from 'react';
import {Container, Nav, Navbar, Button, Card, Image, CardDeck, Row, Table, Col, Badge, Media} from 'react-bootstrap';
import './SideNavigation.js'
import { SideNavigation } from './SideNavigation.js';
import {SignInNav} from '.././SignInNav.js';
import './dashboard.css';
import {TopNav} from './TopNav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSquareFull } from '@fortawesome/free-solid-svg-icons';
import CalendarHome from './CalendarHome.js';

library.add(faSquareFull);

export class UserDashboard extends React.Component {
    render() {
        return(
            <Container className = "dashboard-bg font" fluid>
                        <TopNav/>
                        <SideNavigation/>
                        <Container className = "pr-0 pl-5">
                            <Row className = "pt-4 pl-5 clearfix" style = {{display: 'flex', justifyContent: 'end'}}>
                                <Col lg = {9} md = {5} sm = {3} className = "pt-3">
                                    <CalendarHome/>
                                </Col>
                                
                                <Col className = "mr-n5 pt-2 pl-5 float-right" lg = {3} md = {5} sm = {9}>
                                    <Row className = "mx-auto">
                                        <Button variant="gray"style = {{border: 'hidden', color: 'white'}} href = "/create_meeting" className = "btn-rounded mx-auto">create a meeting +</Button>
                                    </Row>
                                    <Row className = "center pt-5 mt-5">
                                        <Card className = "pink-meeting-count-card">
                                            <Row>
                                                <Media>
                                                    <Row>
                                                        <Col>
                                                            <FontAwesomeIcon icon = "square-full" className = "pt-3 mt-1 ml-4 mr-3" color = "white" size = "5x" style = {{opacity: '40%'}}/>
                                                            <h2 className = "white mt-n5 ml-5 pl-1">5</h2>
                                                        </Col>
                                                        <Media.Body className = "pt-4 pl-4">
                                                            <p className = "white">Meetings<br></br>this week</p>
                                                        </Media.Body>
                                                    </Row>
                                                </Media>
                                            </Row>
                                        </Card>
                                    </Row>
                                    <Row className = "center pt-2 mt-2">
                                        <Card className = "green-notifications-card"/>
                                    </Row>
                                    <Row className = "center pt-2 mt-2">
                                        <Card className = "purple-tasks-left-card"/>
                                    </Row>
                                </Col>
                            </Row>
                    </Container>
            </Container>
        );
    }
}

export default UserDashboard;