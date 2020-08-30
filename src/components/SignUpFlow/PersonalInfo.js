import React from 'react';
import {Container, Button, Form, Table, Row, Col, ProgressBar, Image, Pagination, ResponsiveEmbed} from 'react-bootstrap';
import '../../css/signup.css';
import {useState} from 'react';
import TimezoneSelect from 'react-timezone-select';
import SimpleNav from '.././SimpleNav';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fab, faPlus);



export class PersonalInfo extends React.Component {
    state = {
        profileImg: './assests/ProfileChooser.svg'
    }
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    render() {
        const {values, inputChange} = this.props;
        const {profileImg} = this.state;
        return(
            <Container className="font" fluid>
            <SimpleNav/>
            <Container className = "sign-up-bg" fluid>
                <Table className = "animate__animated animate__fadeInUpBig animate__slow">
                        <Row>
                            <h2 className = "header mx-auto text-center px-md-3 px-sm-3" style = {{color: 'white'}}>Profile Setup</h2>
                        </Row>
                </Table>
            </Container>

            <Container className = "right-container animate__animated animate__fadeInUpBig animate__slow min-vh-100" fluid>
                 <Row className = "min-vh-100 mb-n5" style = {{minWidth: '50vw'}}>
                     <Col className = "my-auto">
                        <Form className = "w-75 mx-auto my-auto">
                            <Form.Row>
                                    <ResponsiveEmbed aspectRatio="25by5">
                                        <Image src = {profileImg} id="profileImg" rounded/>
                                    </ResponsiveEmbed>
                            </Form.Row>
                            <Form.Row className = "mb-5 center mt-3">
                                <p style={{color: '#B1B5B6'}}>Add a profile picture</p>
                            </Form.Row>

                            <Form.Row className = "w-100">
                                <Col className = "w-50 ml-n1">
                                    <Form.Control type = "first name" placeholder = "First Name"  onChange = {inputChange('firstName')} value = {values.firstName}/>
                                </Col>
                                <Col className = "w-50 mr-n3">
                                    <Form.Control type = "last name"  placeholder = "Last Name" onChange = {inputChange('lastName')} value = {values.lastName}/>
                                </Col>
                            </Form.Row>

                            <Form.Row className = "pt-3">
                                <Form.Control type = "role" placeholder = "Role" onChange = {inputChange('role')} value = {values.role}/>
                            </Form.Row>
                            <div className = "bottom-divider"/>
                            <Form.Row className = "pt-3">
                                <Form.Label>Timezone</Form.Label>
                                <TimezoneSelect
                                className = "w-100"
                                value = {values.timeZone}
                                onChange = {tz => inputChange('timezone')}
                                />
                            </Form.Row>
                            <Form.Row className = "mt-2 pt-4 center">
                                <h4>Connect your Accounts</h4>
                            </Form.Row>
                            <Form.Row className = "mt-3 pt-3">
                                <Row className = "align-items-center">
                                    <Col lg={2} className = "d-inline">
                                        <img src = "./assests/google-color.svg"
                                            width = '25px'
                                            height = '25px'
                                        />
                                    </Col>
                                    <Col lg={8} className = "d-inline">
                                        <h6 className = "my-auto">Google Accounts</h6>
                                    </Col>
                                    <Col lg = {2} className = "ml-0 pl-0 d-inline"> 
                                        <FontAwesomeIcon icon = "plus" color="purple"/>
                                    </Col>
                                </Row>
                            </Form.Row>
                        </Form>
                        <Row className = "mt-5">
                                <Col lg={6} md={6} sm={6}>
                                    <Button className = "mr-5 mt-5 float-left" onClick={this.back}>back</Button>
                                </Col>
                                <Col lg={6} md={6} sm={6}>
                                    <Button className = "ml-5 mt-5 float-right" onClick={this.continue}>sign up</Button>
                                </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Container>
        );
    }
}

export default PersonalInfo;