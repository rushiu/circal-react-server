import React from 'react'
import {Container, Nav, Col, Navbar, Image, Row, Button, ResponsiveEmbed, Media} from 'react-bootstrap'
import { faBars, faBell, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import ProfileNav from './ProfileNav';
import './dashboard.css';

library.add(faBars, faBell, faSignOutAlt)

function TopNav({pageActive}) {

        return(
                <Navbar variant = "dark" className = "title-nav min-vw-100 mb-0 pb-0" style = {{boxShadow: '0px 4px 50px rgba(0, 0, 0, 0.033)'}}>
                            <Container className = "logo-bg" style = {{width: '13.1%'}}>
                                <ResponsiveEmbed aspectRatio="1by1">
                                    <Image src = "./assests/GradientLogo.svg"  className="d-inline-block align-top my-auto ml-4 mr-3"/>
                                </ResponsiveEmbed>
                            </Container>
                            <Container className = "min-vw-100" style = {{width: '100%', paddingLeft: '14%'}}>
                                <Row className = "w-100">
                                    <Col lg = {8} md={6} sm = {6}>
                                        <Row>
                                            <h6 className = "my-auto pt-lg-3 pl-lg-2 mt-lg-0 pt-md-2 mt-md-5 ml-md-4 pt-sm-5 mt-sm-2 pl-sm-4 text-uppercase">{pageActive}</h6>
                                        </Row>
                                    </Col>
                                    <Col lg = {4} md={6} sm = {6}>
                                        <Row>
                                            <ProfileNav/>
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                </Navbar>
        );
}

export default TopNav;