import React from 'react';
import SideNavigation from './SideNavigation.js';
import TopNav from './TopNav.js';
import {Nav, Navbar, Image, Button, ButtonToolbar, Table, ListGroup, ButtonGroup} from 'react-bootstrap';
import { Container, Row, Col, CardGroup, Card, Tab} from 'react-bootstrap';

const OtherStyle = {
    position: 'absolute',
    zIndex:5,
    left: 0,
    right: 0,
    minWidth: '100%',
    width:'100%'
  };

export default class AgendaDashboard extends React.Component {
    render() {
        return(
            <Container className = "dashboard-bg font" fluid>
                <TopNav pageActive = "Agenda"/>
                <SideNavigation style = {{position: 'fixed'}} activeURL = "/my_agendas"/>
                <Container className = "pr-0 mr-0" style = {{marginLeft: '12%', minWidth: '85vw'}}>
                    <Row xs={2} md={4} lg={6} className = "mx-auto" style = {{paddingTop: '2rem'}}>
                        <ButtonGroup className = "mx-auto">
                            <Button variant="primary" style = {{border: 'hidden', color: 'white', width: '5rem'}} href = "/create_meeting" className = "btn-rounded mx-auto">day 1</Button>
                            <Button variant="primary" style = {{border: 'hidden', color: 'white', width: '5rem'}} href = "/create_meeting" className = "btn-rounded mx-auto">day 2</Button>
                            <Button variant="primary" style = {{border: 'hidden', color: 'white', width: '5rem'}} href = "/create_meeting" className = "btn-rounded mx-auto">day 3</Button>
                        </ButtonGroup>
                    </Row>
                    <Row xs={2} md={4} lg={4} className = "mx-auto">
                        <Col style = {{width: '20%', paddingTop: '1.5rem', }}>
                        <h2 className = "mx-auto text-center w-100 rounded-lg pt-5" style = {{background: 'white', color: 'grey'}} as="h2">10:00am</h2>
                        <h5 className = "mx-auto text-center w-100 rounded-lg pt-1" style = {{background: 'white', color: 'pink'}} as="h2">10:00 - 11:30</h5>
                        </Col>
                        <Col style = {{paddingTop: '2rem'}}>
                            <Card style = {{width: '300%'}}>
                                <Card.Body>
                                    <Card.Title>PRODUCT LAUNCH</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Meeting Room 1</Card.Subtitle>
                                    <Card.Text>
                                    Go over product launch and any bugs in the product.
                                    </Card.Text>
                                    <Card.Link href="#">View Agenda</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row xs={2} md={4} lg={4} className = "mx-auto">
                        <Col style = {{width: '20%', paddingTop: '1.5rem', }}>
                        <h2 className = "mx-auto text-center w-100 rounded-lg pt-5" style = {{background: 'white', color: 'grey'}} as="h2">10:00am</h2>
                        <h5 className = "mx-auto text-center w-100 rounded-lg pt-1" style = {{background: 'white', color: 'pink'}} as="h2">10:00 - 11:30</h5>
                        </Col>
                        <Col style = {{paddingTop: '2rem'}}>
                            <Card style = {{width: '300%'}}>
                                <Card.Body>
                                    <Card.Title>PRODUCT LAUNCH</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Meeting Room 1</Card.Subtitle>
                                    <Card.Text>
                                    Go over product launch and any bugs in the product.
                                    </Card.Text>
                                    <Card.Link href="#">View Agenda</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row xs={2} md={4} lg={4} className = "mx-auto">
                        <Col style = {{width: '20%', paddingTop: '1.5rem', }}>
                        <h2 className = "mx-auto text-center w-100 rounded-lg pt-5" style = {{background: 'white', color: 'grey'}} as="h2">10:00am</h2>
                        <h5 className = "mx-auto text-center w-100 rounded-lg pt-1" style = {{background: 'white', color: 'pink'}} as="h2">10:00 - 11:30</h5>
                        </Col>
                        <Col style = {{paddingTop: '2rem'}}>
                            <Card style = {{width: '300%'}}>
                                <Card.Body>
                                    <Card.Title>PRODUCT LAUNCH</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Meeting Room 1</Card.Subtitle>
                                    <Card.Text>
                                    Go over product launch and any bugs in the product.
                                    </Card.Text>
                                    <Card.Link href="#">View Agenda</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}

