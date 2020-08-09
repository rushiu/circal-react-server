import React from 'react'
import {Container, Nav, Col, Navbar, Image, Row, Button, ResponsiveEmbed, Media} from 'react-bootstrap'
import { faBars, faBell, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import ProfileNav from './ProfileNav';

library.add(faBars, faBell, faSignOutAlt)

export class TopNav extends React.Component {
    render() {
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
                                            <h5 className = "my-auto pt-2 mt-1 pl-3">Home</h5>
                                        </Row>
                                    </Col>
                                    <Col lg = {2}>
                                        <Row className="justify-content-end ">
                                            <ProfileNav/>
                                            {/* <Media className = "pl-5">
                                                <Row lg = {12}>
                                                    <Col lg = {2} className = "pt-2 pl-0">
                                                        <FontAwesomeIcon icon = "bell"/>
                                                    </Col>
                                                    <Col lg = {10}>
                                                        <Media.Body className = "pr-5">
                                                                <h6  className = "pb-0 mb-0">FirstName</h6>
                                                                <Button variant = "link" className = "pt-1 mt-0" style = {{fontSize: '0.1rem'}} block>My Settings</Button>
                                                        </Media.Body>
                                                    </Col>
                                                </Row>
                                                <img
                                                roundedCircle
                                                src="./assests/AnishaProfile.png"
                                                width = "50px"
                                                height = "50px"
                                                />
                                            </Media> */}
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                </Navbar>
        );
    }
}

export default TopNav;