import React from 'react';
import {Container, Nav, Navbar, Button, Row, Col, Image} from 'react-bootstrap'
import {SimpleNav} from '.././SimpleNav.js'
import './dashboard.css'
import { faSmile } from '@fortawesome/free-solid-svg-icons';

const SideBarStyle = {
    position: 'fixed',
    left: '0', 
    bottom: '0',
    height: 'calc(100vh - 90px)',
    width: '230px',
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: '1',
    minHeight: '100%',
    fontSize: '1.5rem',
    background: 'linear-gradient(141.68deg, #FAD7A1 -27.76%, #FD6585 103.99%)',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.10)'
}

export class SideNavigation extends React.Component {
    render(){
        return(
            <Container className = "font" fluid>
                <Navbar variant="dark" style = {SideBarStyle}>
                    <Row className = "mx-auto">
                        <Nav className = "flex-column">
                            <Nav.Link>home</Nav.Link>
                            <Nav.Link>team</Nav.Link>
                            <Nav.Link>messages</Nav.Link>
                            <Nav.Link>account</Nav.Link>
                        </Nav>
                    </Row>
                    <Row style = {{justifyItems: 'stretch', position: 'absolute', left: '0', right: '0', bottom: '0'}}>
                        <Col>
                        <Button href="/" variant = "clear" style = {{color: 'white', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.15)'}} size = "lg" className = "mx-auto" block>logout</Button>
                        </Col>
                    </Row>
                </Navbar>
            </Container>
        );
    }
}