import React, {useState} from 'react';
import {Image, Button, ButtonToolbar} from 'react-bootstrap';
import { Container, Row, Col, CardGroup, Card, Fade} from 'react-bootstrap';
import {Jumbotron, Form, Table} from 'react-bootstrap';
import {SimpleNav} from './SimpleNav.js';
import {Link} from 'react-router-dom';
import '.././App.css';
import '.././css/signup.css';
import axios from 'axios';


export class SignUp extends React.Component {
    continue = async e => {
        e.preventDefault();
        this.props.nextStep();
        try {
            const response = await axios.post('http://localhost:8080/company', {name: "name", licenseId: "someid12344"});
            console.log('returned data:', response)
        } catch (e) {
            console.log(`creating company failed: ${e}`);
        }
    };
    render() {

        const {values, inputChange} = this.props;

        return(
            <Container className = "font" fluid>
                <SimpleNav/>
                <Container className = "sign-up-bg animate__animated animate__slideInRight" fluid>
                    <Table className = "animate__animated animate__slideInLeft">
                        <Row>
                            <h1 className = "title header mx-auto welcome-header">Welcome Back!</h1>
                        </Row>
                        <Row>
                            <p className = "mx-auto white">Already have an account?</p>
                        </Row>
                        <Row>
                            <Button href="/signin" variant = "outline-light" size = "lg" className = "btn-rounded mx-auto btn-sign-in">sign in</Button>
                        </Row>
                    </Table>
                </Container>

                <Container className = "right-container animate__animated animate__slideInLeft" fluid>
                    <Table className = "animate__animated animate__fadeIn animate__delay-1s">
                            <Row>
                                <h1 className = "mx-auto sign-up-header">Create Account</h1>
                            </Row>
                            <Row>
                                <Button className = "mx-auto" variant = "light">Sign in with Google</Button>
                            </Row>
                            <Row style = {{paddingTop: '1rem', color: 'gray'}}> 
                            <p className = "mx-auto">or use your email for registration</p>
                            </Row>
                            <Col>
                                <Form className = "mx-auto" style = {{width: '60%'}}>
                                    <Form.Row>
                                        <Form.Control type = "first name" placeholder = "First Name" onChange = {inputChange('firstName')} value = {values.firstName}/>
                                    </Form.Row>
                                    <Form.Row className = "pt-3">
                                        <Form.Control type = "last name" placeholder = "Last Name" onChange = {inputChange('lastName')} value = {values.lastName}/>
                                    </Form.Row>
                                    <Form.Row className = "pt-3">
                                        <Form.Control type = "work email" placeholder = "Work Email" onChange = {inputChange('email')} value = {values.email}/>
                                    </Form.Row>
                                    <Form.Row className = "pt-3">
                                        <Form.Control type = "company" placeholder = "Company Name" onChange = {inputChange('company')} value = {values.company}/>
                                    </Form.Row>
                                    <Form.Row className = "pt-3">
                                        <Form.Check type="checkbox" label="Agree to Terms of Service"/>
                                    </Form.Row>
                                    <Form.Row className = "pt-3">
                                        <Button variant="primary" style = {{border: 'hidden', width: '40%', fontWeight: 'bold', fontSize: '1.2rem'}} size = "lg" className = "btn-rounded mx-auto" onClick = {this.continue}>sign up</Button>
                                    </Form.Row>
                                </Form>
                            </Col>
                    </Table>
                </Container>
            </Container>
        );
    }
}
export default SignUp;

