import React from 'react';
import {Container, Nav, Navbar, Button, Card, Image, CardDeck, Row, Table, Col, CardColumns} from 'react-bootstrap';
import './SideNavigation.js'
import { SideNavigation } from './SideNavigation.js';
import {SignInNav} from '.././SignInNav.js';
import './dashboard.css';
import {TopNav} from './TopNav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSquareFull } from '@fortawesome/free-solid-svg-icons';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from '@fullcalendar/timegrid';
import '@fortawesome/fontawesome-free/css/all.css';

library.add(faSquareFull);

export class UserDashboard extends React.Component {
    handleDateClick = (arg) => { // bind with an arrow function
        alert(arg.dateStr)
      }
    render() {
        return(
            <Container className = "dashboard-bg font" fluid>
                        <TopNav/>
                        <SideNavigation/>
                        <Container className = "pr-0 pl-0">
                            <Row className = "pt-4 pl-5 clearfix" style = {{display: 'flex', justifyContent: 'end'}}>
                                <Col className = "col-lg-9 float-left">
                                    <FullCalendar
                                        style = {{zIndex: '3'}}
                                        themeSystem = 'bootstrap4'
                                        className = "ml-5 cyborg"
                                        plugins={[ timeGridPlugin, dayGridPlugin]}
                                        headerToolbar = {{
                                            left: 'prev,next today',
                                            center: 'title',
                                            right: 'timeGridWeek,timeGridDay'
                                        }}
                                        initialView="timeGridDay"
                                        dateClick = {this.handleDateClick}
                                    />
                                </Col>
                                
                                <Col className = "my-auto pr-0 col-lg-3 float-right" >
                                    <Row className = "mx-auto">
                                        <Button variant="gray" style = {{border: 'hidden', color: 'white'}} size = "lg" href = "/create_meeting" className = "btn-rounded mx-auto">create a meeting +</Button>
                                    </Row>
                                    <Row className = "center pt-5 mt-5">           
                                        <Card style = {{border: 'hidden', background: 'linear-gradient(148.98deg, #FFD3A5 -18.8%, #FD6585 123.3%)', borderRadius: '0.5rem', width: '17rem', height: '8rem'}}>
                                            <Row lg = {12}>
                                                <Col lg = {1}>
                                                    <FontAwesomeIcon icon = "square-full" className = "white" style ={{opacity: '40%', fontSize: '4rem'}}/>
                                                </Col>
                                                <Col lg = {11}>
                                                    <Card.Text className = "font mx-auto" style = {{color: 'white', fontWeight: 'bold'}}><h5>meetings</h5></Card.Text>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Row>
                                    <Row className = "center pt-4">
                                        <Card style = {{border: 'hidden', background: 'linear-gradient(124.44deg, #90F7EC 0%, #32CCBC 100%)', boxShadow: '1px 1px 15px #63E3D5', borderRadius: '0.5rem',  width: '17rem', height: '8rem'}}>
                                            <Card.Text className = "font mx-auto" style = {{color: 'white', fontWeight: 'bold', paddingTop: '2%'}}><h3>messages</h3></Card.Text>
                                        </Card>
                                    </Row>
                                    <Row className = "center pt-4">
                                        <Card style = {{border: 'hidden', background: 'linear-gradient(167.78deg, #CE9FFC 0%, #9F82F6 51.56%, #7367F0 100%)', boxShadow: '1px 1px 15px #9C80F5', borderRadius: '0.5rem',  width: '17rem', height: '8rem'}}>
                                            <Card.Text className = "font mx-auto" style = {{color: 'white', fontWeight: 'bold', paddingTop: '2%'}}><h3>notifications</h3></Card.Text>
                                        </Card>
                                    </Row>
                                </Col>
                            </Row>
                    </Container>
            </Container>
        );
    }
}

export default UserDashboard;