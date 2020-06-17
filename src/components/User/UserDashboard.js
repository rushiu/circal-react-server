import React from 'react';
import {Container, Nav, Navbar, Button, Card, Image, CardDeck, Row, Table, Col, CardColumns} from 'react-bootstrap';
import './SideNavigation.js'
import { SideNavigation } from './SideNavigation.js';
import {SignInNav} from '.././SignInNav.js';
import './dashboard.css';


const NavBarStyle = {
    position: 'absolute',
    right: '0',
    minWidth: '96%',
    height: '8%',
    zIndex:1
};

const MainContainerStyle = {
    position: 'absolute',
    paddingTop: '8rem',
    right: '0',
    bottom: '0',
    minWidth: '85%',
    minHeight: '92%',
    zIndex: 2,
    background: 'yellow'
}

const ProfileFiller = {
    backgroundColor: 'gray',
    borderRadius: '50%',
    width:'100',
    height:'100',
    zIndex: 2
}
export class UserDashboard extends React.Component {
    render() {
        return(
            <Container className = "dashboard-bg font" fluid>
                        <Col className = "mr-5 mr-md-3 mr-sm-3 mr-xs-3">
                            <SideNavigation/>
                        </Col>
                        <Container className = "pr-0 pl-0">
                            <Row>
                                <Col>
                                    <Navbar className = "font shadow-sm bg-light nav-title-bar" fluid>
                                        <h4 className = "col-lg-3 col-md-2 col-xs-1 mx-auto my-auto">Home</h4>
                                    </Navbar>
                                </Col>
                            </Row>
                            <Row className = "pt-4 pl-5 clearfix" style = {{display: 'flex', justifyContent: 'end'}}>
                                <Col className = "col-lg-9 float-left">
                                    <h2 className = "grey-title">This Week</h2>
                                </Col>
                                <Col className = "my-auto pr-0 col-lg-3 float-right" >
                                    <Row className = "mx-auto">
                                        <Button variant="gray" style = {{border: 'hidden', color: 'white'}} size = "lg" href = "/create_meeting" className = "btn-rounded mx-auto">create a meeting +</Button>
                                    </Row>
                                    <Row className = "center pt-5 mt-5">
                                        <Card style = {{border: 'hidden', background: 'linear-gradient(148.98deg, #FFD3A5 -18.8%, #FD6585 123.3%)', boxShadow: '1px 1px 15px #FE838E', borderRadius: '0.5rem', width: '17rem', height: '8rem'}}>
                                            <Card.Text className = "font mx-auto" style = {{color: 'white', fontWeight: 'bold', paddingTop: '2%'}}><h3>meetings</h3></Card.Text>
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