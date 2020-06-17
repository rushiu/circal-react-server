import React from 'react';
import {Container, Nav, Navbar, Button, Row, Col, Image} from 'react-bootstrap'
import {SimpleNav} from '.././SimpleNav.js'
import './dashboard.css'
import { faSmile } from '@fortawesome/free-solid-svg-icons';

const SideBarStyle = {
<<<<<<< HEAD
    position: 'absolute',
    left: '0', 
    bottom: '0',
    width: '13%',
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: '0',
=======
    position: 'fixed',
    left: '0', 
    bottom: '0',
    height: 'calc(100vh - 90px)',
    width: '230px',
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: '1',
>>>>>>> Started sign up flow and adjusted spacing and started dashboard
    minHeight: '100%',
    fontSize: '1.5rem',
    background: 'linear-gradient(141.68deg, #FAD7A1 -27.76%, #FD6585 103.99%)',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.10)',
    zIndex: '0'
}

export class SideNavigation extends React.Component {
    render(){
        return(
<<<<<<< HEAD
                <Navbar variant="dark"  expand="lg" style = {SideBarStyle}>
                    {/* <Container style = {{position: 'absolute', top: '2%', paddingRight: '1%'}}>
=======
            <Container className = "font" style = {{zIndex: '3', position: 'fixed'}}fluid>
                <Navbar variant="dark"  expand="lg" style = {SideBarStyle}>
                    <Container style = {{position: 'absolute', top: '2%', paddingRight: '1%'}}>
>>>>>>> Started sign up flow and adjusted spacing and started dashboard
                        <img
                        alt=""
                        src="/assests/LogoImage.png"
                        className="d-inline-block align-top"
                        width="70"
                        height="50"
                        />
                        <Navbar.Brand className = "font" variant = "dark" style = {{left: '30%', position: 'absolute'}}><h1>circal</h1></Navbar.Brand>
<<<<<<< HEAD
                    </Container> */}
=======
                    </Container>
>>>>>>> Started sign up flow and adjusted spacing and started dashboard
                    <Row style = {{position: 'absolute', left: '1.5rem', right: '0', justifyContent: 'center', display: 'flex'}}>
                        <Nav className = "flex-column">
                            <Nav.Link href = "/user_dashboard"><h5 className = "center-nav-link">home</h5></Nav.Link>
                            <Nav.Link href = "/my_team"><h5 className = "center-nav-link">team</h5></Nav.Link>
                            <Nav.Link href = "/my_messages"><h5 className = "center-nav-link">messages</h5></Nav.Link>
                            <Nav.Link href = "/my_account"><h5 className = "center-nav-link">account</h5></Nav.Link>
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