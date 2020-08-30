import React, {useState} from 'react';
import {Container, Card, CardDeck, Button, Row, Image, Col, Alert, Form, Table, ResponsiveEmbed, ListGroup} from 'react-bootstrap';
import {SimpleNav} from '../SimpleNav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faPlus, faUserFriends} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import ChooseFlowButtons from './ChooseFlowButtons.js';
import ErrorSuccessDisplay from './ErrorSuccessDisplay.js';

library.add(faPlus, faUserFriends)
export class ChooseFlow extends React.Component {

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const {values, inputChange} = this.props;
        return(
            <Container className="font" fluid>
                <SimpleNav/>
                <Container className = "sign-up-bg" fluid>
                    <Table className = "animate__animated animate__fadeInUpBig animate__slow">
                            <Row>
                                <h2 className = "header mx-auto text-center px-md-3 px-sm-3" style = {{color: 'white'}}>Are you creating a company or joining one?</h2>
                            </Row>
                    </Table>
                </Container>

                <Container className = "right-container animate__animated animate__fadeInUpBig animate__slow min-vh-100" fluid>
                     <Row className = "min-vh-100 mt-5 mb-n5" style = {{minWidth: '50vw'}}>
                         <Col className = "mx-auto w-50">
                          <ListGroup variant="flush" className = "mx-auto d-flex justify-content-center">
                              <ListGroup.Item className = "w-100">
                                    <Card className="w-100">
                                        <ResponsiveEmbed aspectRatio="25by5">
                                            <img 
                                            src = "../assests/CreateCompany.svg"
                                            className="mx-auto py-3"
                                            width="100"
                                            height="100"
                                            />
                                        </ResponsiveEmbed>
                                        <h5 className="mx-auto mt-2">Create a Company</h5>
                                        <p className="mx-auto text-center pl-4 pr-4">Create a new company and invite your teammates</p>
                                        <Form.Control className = "w-50 mx-auto mb-3" placeholder="Company Name" type="company" value={values.company} onChange={inputChange('company')}/>
                                    </Card>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <h6 className = "text-center">or</h6>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Card className="mx-auto w-100">
                                        <ResponsiveEmbed aspectRatio="25by5">
                                            <img 
                                            src = "../assests/JoinCompany.svg"
                                            className="mx-auto py-3"
                                            width="100"
                                            height="100"
                                            />
                                        </ResponsiveEmbed>
                                        <h5 className="mx-auto mt-n2">Join a Company</h5>
                                        <p className="mx-auto text-center pl-4 pr-4">This requires an access code. Please ask your admin for one.</p>
                                        <Form.Control className = "w-50 mx-auto mb-3" placeholder="Access Code" type="code" onChange = {inputChange('accessCode')} value={values.accessCode}/>
                                    </Card>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col lg={6} md={6} sm={6}>
                                            <Button className = "mr-5 float-left" onClick={this.back}>back</Button>
                                        </Col>
                                        <Col lg={6} md={6} sm={6}>
                                            <Button className = "ml-5 float-right" onClick={this.continue}>next</Button>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            
                        </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}

export default ChooseFlow;