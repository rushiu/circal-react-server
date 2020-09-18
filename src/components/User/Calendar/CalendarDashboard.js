import React from 'react';
import {Container, Row, Col, Button, Card} from 'react-bootstrap';
import TopNav from '../TopNav.js';
import SideNavigation from '../SideNavigation.js';
import CalendarHome from '../Home/CalendarHome.js';

export default class CalendarDashboard extends React.Component {
    render() {
        return(
            <Container className = "dashboard-bg overflow-auto font" fluid>
                <TopNav pageActive = "Calendar"/>
                <SideNavigation activeURL = "/my_team"/>
                <Container className = "pr-0 mr-0" style = {{marginLeft: '12%', minWidth: '85vw'}}>
                    <Row>
                        <Col>
                            <Row>
                                <Col>
                                    <Card className = "mx-auto w-50 mt-5 h-100">
                                        <Card.Body>
                                            <Row>
                                                <Col lg={8} md={8} sm={8} xs={8}>
                                                <h6 className="mt-2 pt-1">Keys</h6>
                                                </Col>
                                                <Col lg={4} md={4} sm={4} xs={4}>
                                                    <Button
                                                    variant="transparent" 
                                                    size="md" 
                                                    className = "btn-rounded font-weight-bold float-right"
                                                    style = {{color: '#9F82F6'}}
                                                    >+</Button>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                        <Col className = "mt-5">
                            <CalendarHome/>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );

    }

}