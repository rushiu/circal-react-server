import React, {Component, Container} from 'react';
import './../App.css';
import {Nav, Navbar, Row} from 'react-bootstrap';

const NavBarStyle = {
    position: 'absolute',
    left: 0,
    right: 0,
    marginTop: '1rem',
    width: '100%',
    height: '7%',
    fontSize: '1.2rem',
    zIndex:3
};

export class NavigationBar extends React.Component {
    render() {
      return (
            <Navbar expand="lg" variant="dark" style = {NavBarStyle} className = "font" fluid>
                <Navbar.Brand style = {{fontSize: '2rem', paddingLeft: '1rem'}} href="/">
                    <Row>
                    <img
                    alt=""
                    src="/assests/LogoImage.png"
                    width = "55"
                    height = "40"
                    />
                    <h1>circal</h1>
                </Row>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className ="justify-content-end" id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="/home"></Nav.Link>
                        <Nav.Link href="/features">features</Nav.Link>
                        <Nav.Link href="/pricing">pricing</Nav.Link>
                        <Nav.Link href="/about">about</Nav.Link>
                        <Nav.Link href="/contact">contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
      );
    }
}
export default NavigationBar;