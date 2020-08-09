import React from 'react'
import {Container, Media, Row, Col, Button} from 'react-bootstrap'
import { faBars, faBell, faSignOutAlt, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faBars, faBell, faSignOutAlt, faAngleDown)

function ProfileNav({userFirstName}) {
        function checkName() {
            if (userFirstName) {
                return userFirstName
            } else {
                return "firstName"
            }
        }
        return(
        <Container className = "pl-0 pr-0 mr-0 w-100">
            <Media className = "pl-5">
                <Row lg = {12}>
                    <Col lg = {2} className = "pt-2 pl-0">
                        <FontAwesomeIcon icon = "bell"/>
                    </Col>
                    <Col lg = {10}>
                        <Media.Body className = "pr-4">
                                <h6  className = "pb-0 mb-0">{checkName()}</h6>
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
            </Media>
        </Container>
        );
}

export default ProfileNav