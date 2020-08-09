import React from 'react'
import {Container, Nav, Col, Navbar, Image, Row, Button, ResponsiveEmbed, Media} from 'react-bootstrap'
import { faBars, faBell, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import ProfileNav from './ProfileNav';

library.add(faBars, faBell, faSignOutAlt)

function TopNav({pageActive}) {

        return(
                <Navbar variant = "dark" className = "title-nav shadow-sm min-vw-100 mb-0 pb-0">
                            <Container className = "logo-bg mr-0" style = {{width: '13.1%'}}>
                                <ResponsiveEmbed aspectRatio="1by1">
                                    <Image src = "./assests/GradientLogo.svg"  className="d-inline-block align-top mt-2 ml-3 pl-2 pb-3"/>
                                </ResponsiveEmbed>
                            </Container>
                            <Container className = "min-vw-100" style = {{width: '100%', left: '14%', position: 'fixed'}}>
                                <Row className = "w-100">
                                    <Col lg = {8}>
                                        <Row>
                                            <h5 className = "my-auto pt-2 mt-1 pl-3">{pageActive}</h5>
                                        </Row>
                                    </Col>
                                    <Col lg = {4}>
                                        <Row className="justify-content-end">
                                            <ProfileNav/>
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                </Navbar>
        );
}

export default TopNav;