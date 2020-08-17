import React from 'react';
import {Container, Card, CardDeck, Button, Row, Image, Col, Navbar, Form} from 'react-bootstrap';
import {SimpleNav} from '../SimpleNav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faPlus, faUserFriends} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faPlus, faUserFriends)


export class ChooseFlow extends React.Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const {values, inputChange} = this.props;
        return(
            <Container className = "sign-up-full-bg ml-n3 animate__animated animate__fadeInUp font overflow-auto" fluid>
                <Row className = "w-100">
                    <img
                    alt=""
                    src="/assests/WhiteLogo.svg"
                    className="align-top pt-5 mt-5 mx-auto"
                    width="500"
                    height="200"
                    />
                </Row>
                <Row className = "w-100 min-vw-100 justify-content-center">
                        <Col lg = {4} md = {4}>
                            <Card className = "min-vw-25 h-100 shadow" style = {{border: 'hidden', borderRadius: '25px'}}>
                                <Card.Body className = "mx-auto pb-0 pt-5">
                                    <FontAwesomeIcon className = "grey-header" size = "2x" icon = "plus"/>
                                </Card.Body>
                                <Card.Header as = "h2" className = "mx-auto pt-1" style = {{border: 'hidden', backgroundColor: 'transparent'}}>Create a Company</Card.Header>
                                <Card.Body className = "mx-auto mt-n3 grey-header w-75">
                                    <Row className = " pb-1">
                                        <p className="text-center mx-auto">Billing information will be required.</p>
                                    </Row>
                                    <Row className = "pt-0">
                                        <Form.Control type = "company" placeholder = "Company Name" onChange = {inputChange('company')} value = {values.company}/>
                                    </Row>
                                    <Row className = "pt-3">
                                        <Button variant = "primary" className = " mx-auto btn-rounded w-50 font-weight-bold" onClick = {this.continue}>Get Started</Button>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg = {4} md = {4}>
                            <Card className = "min-vw-25 h-100 shadow" style = {{border: 'hidden', borderRadius: '25px'}}>
                                <Card.Body className = "mx-auto pb-0 pt-5">
                                    <FontAwesomeIcon className = "grey-header" size = "2x" icon = "user-friends"/>
                                </Card.Body>
                                <Card.Header as = "h2" className = "mx-auto pt-1" style = {{border: 'hidden', backgroundColor: 'transparent'}}>Join a Company</Card.Header>
                                <Card.Body className = "mx-auto mt-n3 grey-header w-100">
                                    <Row className = "pb-1">
                                        <p className="text-center mx-auto">If you don't have an access code,<br></br> please request your admin for one.</p>
                                    </Row>
                                    <Row className = "pt-0 w-75 mx-auto">
                                        <Form.Control placeholder = "Access Code"></Form.Control>
                                    </Row>
                                    <Row className = "pt-3">
                                        <Button variant = "primary" className = " mx-auto btn-rounded w-50 font-weight-bold">Join Company</Button>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                </Row>
                
            </Container>
        );
    }
}

export default ChooseFlow;