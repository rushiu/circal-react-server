import React from 'react';
import SideNavigation from './SideNavigation.js';
import TopNav from './TopNav.js';
import {Nav, Navbar, Image, Button, ButtonToolbar, Table, ListGroup, ButtonGroup} from 'react-bootstrap';
import { Container, Row, Col, CardGroup, Card, Tab, Tabs, Accordion, Form} from 'react-bootstrap';

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
            <Container className = "dashboard-bg overflow-auto font" fluid>
                <TopNav pageActive = "Agenda"/>
                <SideNavigation style = {{position: 'fixed'}} activeURL = "/my_agendas"/>
                <Container className = " centered" style = {{marginLeft: '12%', minWidth: '86vw', paddingTop: '2rem', paddingLeft: '3rem', paddingRight: '2rem'}}>
                    <Tabs defaultActiveKey="day1" id="uncontrolled-tab-example">
                        <Tab eventKey="day1" title="Day 1">
                            <Row xs={2} md={4} lg={4} className = "mx-auto">
                                <Col style = {{width: '20%', paddingTop: '1.5rem', }}>
                                    <h2 className = "mx-auto text-center w-100 rounded-lg pt-5" style = {{background: 'white', color: 'grey'}} as="h2">10:00am</h2>
                                    <h5 className = "mx-auto text-center w-100 rounded-lg pt-1" style = {{background: 'white', color: 'pink'}} as="h2">10:00 - 11:30</h5>
                                </Col>
                                <Col style = {{paddingTop: '2rem'}}>
                                    <Accordion>
                                        <Card style = {{width: '300%'}}>
                                            <Card.Body>
                                                <Card.Title>PRODUCT LAUNCH</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">Meeting Room 1</Card.Subtitle>
                                                <Card.Text>
                                                Go over product launch and any bugs in the product.
                                                </Card.Text>
                                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                                    View Agenda
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="0">
                                                    <Card.Body>
                                                        <Card.Title className="text-center" style = {{color: 'pink'}}>AGENDA TOPICS</Card.Title>
                                                        <Row xs={2} md={2} lg={2} className = "mx-auto" style = {{paddingTop: '1rem'}}>
                                                            <Col lg={2} style = {{paddingTop: '0.6rem'}}>
                                                                <Card.Subtitle className="mb-2 text-muted">15 mins</Card.Subtitle>                                                            </Col>
                                                            <Col lg={10}>
                                                                <Card.Text className="mb-2">
                                                                    1. Review and modify agenda
                                                                </Card.Text>
                                                            </Col>
                                                        </Row>
                                                        <Row xs={2} md={2} lg={2} className = "mx-auto" style = {{paddingTop: '1rem'}}>
                                                            <Col lg={2} style = {{paddingTop: '0.6rem'}}>
                                                                <Card.Subtitle className="mb-2 text-muted">30 mins</Card.Subtitle>                                                            </Col>
                                                            <Col lg={10}>
                                                                <Card.Text className="mb-2">
                                                                    2. Review possible code defects
                                                                </Card.Text>
                                                            </Col>
                                                        </Row>
                                                        <Row xs={2} md={2} lg={2} className = "mx-auto" style = {{paddingTop: '1rem'}}>
                                                            <Col lg={2} style = {{paddingTop: '0.6rem'}}>
                                                                <Card.Subtitle className="mb-2 text-muted">30 mins</Card.Subtitle>                                                            </Col>
                                                            <Col lg={10}>
                                                                <Card.Text className="mb-2">
                                                                    3. Go over product launch details
                                                                </Card.Text>
                                                            </Col>
                                                        </Row>
                                                        <Row xs={2} md={2} lg={2} className = "mx-auto" style = {{paddingTop: '1rem'}}>
                                                            <Col lg={2} style = {{paddingTop: '0.6rem'}}>
                                                                <Card.Subtitle className="mb-2 text-muted">30 mins</Card.Subtitle>                                                            </Col>
                                                            <Col lg={10}>
                                                                <Card.Text className="mb-2">
                                                                    4. Finalize product launch presentation
                                                                </Card.Text>
                                                            </Col>
                                                        </Row>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card.Body>
                                        </Card>
                                    </Accordion>
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
                        </Tab>
                        <Tab eventKey="day2" title="Day 2"> 
                            <Tabs defaultActiveKey="account" id="uncontrolled-tab-example" style = {{paddingTop: '2rem'}}>
                                <Tab eventKey="account" title="Account">
                                    <Row xs={2} md={4} lg={4} className = "mx-auto">
                                        <h4 className = "w-100 rounded-lg pt-5" style = {{background: 'white', color: 'grey'}} as="h4">Edit Profile</h4>
                                    </Row>
                                    <Row xs={2} md={4} lg={4} className = "mx-auto">
                                        <Col lg={2} className = "mx-auto">
                                            <img
                                            roundedCircle
                                            src="./assests/AnishaProfile.png"
                                            width = "150px"
                                            height = "150px"
                                            />
                                        </Col>
                                    </Row>
                                    <Row xs={2} md={1} lg={1} className = "mx-auto" style = {{paddingTop: '4rem'}}>
                                        <Col>
                                            <Form className = "mx-auto">
                                                <Form.Row>
                                                <Col>
                                                    <Form.Control placeholder = "First Name" required/>
                                                </Col>
                                                <Col>
                                                    <Form.Control placeholder = "Last Name" required/>
                                                </Col>
                                                </Form.Row>
                                                <Form.Row className = "padding">
                                                    <Form.Control type = "email" placeholder = "Email"/>
                                                </Form.Row>
                                                <Form.Row className = "padding">
                                                    <Form.Control type = "contactnum" placeholder = "Contact's Number"/>
                                                </Form.Row>
                                                <Form.Row className = "padding">
                                                    <Form.Control type = "password" placeholder = "Password"/>
                                                </Form.Row>
                                                <Form.Row className = "padding">
                                                    <Button variant="primary" style = {{border: 'hidden', width: '40%', fontWeight: 'bold', fontSize: '1.2rem'}} size = "lg" href = "/user_dashboard" className = "btn-rounded mx-auto">save</Button>
                                                </Form.Row>
                                            </Form>
                                        </Col>
                                    </Row>
                                </Tab>
                                <Tab eventKey="notifications" title="Notifications">
                                </Tab>
                                <Tab eventKey="password" title="Password & Security">
                                </Tab>
                            </Tabs>
                        </Tab>
                        <Tab eventKey="day3" title="Day 3">
                            <h2>Cool</h2>
                        </Tab>
                    </Tabs>
                </Container>
            </Container>
        );
    }
}

