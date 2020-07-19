import React from 'react'
import {Container, Nav, Navbar, Image, Row, Button, ResponsiveEmbed} from 'react-bootstrap'
import { faBars, faBell, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import ProfileNav from './ProfileNav';

library.add(faBars, faBell, faSignOutAlt)

export class TopNav extends React.Component {
    render() {
        return(
                <Navbar variant = "dark" expand = "lg" className = "title-nav shadow-sm  w-100">
                            <Container className = "logo-bg mr-0" style = {{width: '13.1%'}}>
                                <ResponsiveEmbed aspectRatio="1by1">
                                    <Image src = "./assests/GradientLogo.svg"  className="d-inline-block align-top mt-2 ml-3 pl-2 pb-3"/>
                                </ResponsiveEmbed>
                            </Container>
                            <Container style = {{width: '86.9%', left: '14%', position: 'fixed'}}>
                                <Row className = "w-75">
                                        <Button className = "toggle-btn" variant = "link" aria-label="Toggle navigation">
                                            <FontAwesomeIcon icon = "bars"/>
                                        </Button>
                                        <h5 className = "my-auto pl-2">Home</h5>
                                </Row>
                            </Container>
                </Navbar>
        );
    }
}

export default TopNav;