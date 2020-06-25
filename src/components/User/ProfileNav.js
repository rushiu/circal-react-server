import React from 'react'
import {Container, Media, Row, Col} from 'react-bootstrap'
import { faBars, faBell, faSignOutAlt, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faBars, faBell, faSignOutAlt, faAngleDown)

export class ProfileNav extends React.Component {
    render() {
        return(
            <Container className = "pl-0 mr-0 w-100">
            <Row className = "w-25">
                        <Col>
                        <Media className = "w-50 mt-3">
                            <Media.Body>
                                <h6 className = "text-right pr-2">Placeholder Name</h6>
                                <p className = "text-right pr-2 mt-n2">Role</p>
                            </Media.Body>
                            <img
                            width={40}
                            height={40}
                            src="./assests/avatar.svg"
                            alt="profile"
                            />
                        </Media>
                        </Col>
                        <Col className = "w-50">
                            <FontAwesomeIcon icon = "angle-down" className = "fa-lg"/>
                            <FontAwesomeIcon icon = "bell" className = "fa-lg"/>
                            <FontAwesomeIcon icon = "sign-out-alt" className = "fa-lg"/>
                        </Col>
            </Row>
        </Container>
        );
    }
}

export default ProfileNav