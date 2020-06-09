import React from 'react';
import {Container, Nav, Navbar, Button, Card, Image, NavbarBrand, Row, Col} from 'react-bootstrap';
import './SideNavigation.js'
import { SideNavigation } from './SideNavigation.js';
import {SignInNav} from '.././SignInNav.js';
import './dashboard.css';


const NavBarStyle = {
    position: 'absolute',
    left: 0,
    right: 0,
    width: '100%',
    paddingTop: '0.5rem',
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

export class UserDashboard extends React.Component {
    render() {
        return(
            <Container className = "dashboard-bg" fluid>
                    <Navbar bg = "light" style = {NavBarStyle} className = "font shadow-sm" fluid>
                        <Navbar.Brand fluid>
                            <Row>
                            <img
                            alt=""
                            src="/assests/GradientLogo.svg"
                            width = "361"
                            height = "46"
                            />
                            </Row>
                        </Navbar.Brand>
                    </Navbar>
                    <SideNavigation/>
                    <Container className = "col-xl-8 col-md-9 col-12" fluid>
                            <Navbar bg = "light" style = {{NavBarStyle}} className = "font shadow-sm" fluid>
                                <h3 className = "font">Dashboard</h3>
                            </Navbar>
                    </Container>
            </Container>
        );
    }
}

export default UserDashboard;