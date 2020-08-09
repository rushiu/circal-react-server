import React from 'react';
import {Container, Nav, Navbar, Button, Card, Image, CardDeck, Row, Table, Col, Badge, Media} from 'react-bootstrap';
import './SideNavigation.js'
import { SideNavigation } from './SideNavigation.js';
import './dashboard.css';
import {TopNav} from './TopNav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSquareFull } from '@fortawesome/free-solid-svg-icons';
import CalendarHome from './CalendarHome.js';
import Todo from './Todo.js';

library.add(faSquareFull);

export class UserDashboard extends React.Component {
    render() {
        return(
            <Container className = "dashboard-bg font" fluid>
                        <TopNav/>
                        <SideNavigation style = {{position: 'fixed'}}/>
                        <Container className = "pr-0 mr-0" style = {{marginLeft: '12%', minWidth: '85vw'}}>
                            <Row className = "clearfix w-100 min-vh-100" style = {{padding: '-15px'}}>
                                <Col lg = {7} md = {12} sm = {12} className = "pt-5 mx-auto min-vh-100">
                                    <CalendarHome/>
                                </Col>
                                
                                <Col className = "border-left-divider mr-n5 pr-0 pt-5 min-vh-100" lg = {5} md = {12} sm = {12}>
                                    <Container className = "mr-n5 pt-2 pl-5 w-100 mx-auto" >
                                        <Row className = "mx-auto">
                                            <Button variant="success" style = {{border: 'hidden', color: 'white', width: '40%'}} href = "/create_meeting" className = "btn-rounded mx-auto">create meeting +</Button>
                                        </Row>
                                        <Row className = "mx-auto pt-5 center">
                                            <h5 className = "grey-header">This Week</h5>
                                        </Row>
                                        <Row>
                                            <Card className = "dashboard-small-card mx-auto">
                                                <Card.Text className = "my-auto">
                                                    <Row className = "center mx-auto pt-3 grey-header">
                                                        <Row className = "w-100">
                                                            <Col lg = {4} className = "border-right-divider">
                                                                <h5 className = "center mx-auto">5</h5>
                                                            </Col>
                                                            <Col lg = {4} className = "border-right-divider">
                                                                <h5 className = "center mx-auto">6</h5>
                                                            </Col>
                                                            <Col lg = {4}>
                                                                <h5 className = "center mx-auto">3</h5>
                                                            </Col>
                                                        </Row>
                                                        <Row className = "w-100 pt-0 mt-n2">
                                                            <Col lg = {4} className = "border-right-divider">
                                                                <p className = "center mx-auto">meetings</p>
                                                            </Col>
                                                            <Col lg = {4} className = "border-right-divider">
                                                                <p className = "center mx-auto">tasks</p>
                                                            </Col>
                                                            <Col lg = {4}>
                                                                <Button variant="link" className = "center mx-auto pt-0" style = {{color: 'grey'}}><p>agendas</p></Button>
                                                            </Col>
                                                        </Row>
                                                    </Row>
                                                </Card.Text>
                                            </Card>
                                        </Row>
                                        <Row className = "pt-4">
                                            <Todo/>
                                        </Row>
                                    </Container>
                                </Col>
                            </Row>
                    </Container>
            </Container>
        );
    }
}

export default UserDashboard;