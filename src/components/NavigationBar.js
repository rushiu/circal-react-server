import React, {Component, Container} from 'react';
import './../App.css';
import {Nav, Navbar, Image, Button, ButtonToolbar} from 'react-bootstrap';

const NavBarStyle = {
    position: 'absolute',
    zIndex:3
};

export class NavigationBar extends React.Component {
    render() {
      return (
            <Navbar variant="dark" style = {NavBarStyle}>
                <img
                    alt=""
                    src="/assests/LogoImage.png"
                    width="35"
                    height="25"
                    className="d-inline-block align-top"
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