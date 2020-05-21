import React, {Component, Container} from 'react';
import './../App.css';
import {Nav, Navbar, Image, Button, ButtonToolbar} from 'react-bootstrap';

const NavBarStyle = {
    position: 'absolute',
    left: 0,
    right: 0,
    width: '100%',
    height: '6%',
    zIndex:3
};

export class NavigationBar extends React.Component {
    render() {
      return (
            <Navbar variant="dark" style = {NavBarStyle} className = "font shadow-sm p-4 mb-1 rounded">
                <img
                    alt=""
                    src="/assests/LogoImage.png"
                    width="35"
                    height="25"
                />
                <Navbar.Brand as={Nav.Link} exact to = "/" href="">circal</Navbar.Brand>
                <Nav className ="mr-auto">
                    <Nav.Link href="/home"></Nav.Link>
                    <Nav.Link href="/features">features</Nav.Link>
                    <Nav.Link href="/pricing">pricing</Nav.Link>
                    <Nav.Link href="/about">about</Nav.Link>
                    <Nav.Link href="/contact">contact</Nav.Link>
                </Nav>
            </Navbar>
      );
    }
}
export default NavigationBar;