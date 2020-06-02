import React, {useState} from 'react';
import {Image, Button, ButtonToolbar} from 'react-bootstrap';
import { Container, Row, Col, CardGroup, Card, Fade} from 'react-bootstrap';
import {Jumbotron, Form, Table} from 'react-bootstrap';
import {SimpleNav} from './SimpleNav.js';
import {Link} from 'react-router-dom';
import '.././App.css';
import '.././css/signup.css';

export class SignUp extends React.Component {
    render() {
        return(
            <Container className = "font" fluid>
                <SimpleNav/>
                <Container className = "sign-up-bg" fluid>
                    <Table>
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

                <Container className = "right-container" fluid>
                    <Table>
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
                                        <Form.Control type = "full name" placeholder = "Full Name"/>
                                    </Form.Row>
                                    <Form.Row className = "padding">
                                        <Form.Control type = "work email" placeholder = "Work Email"/>
                                    </Form.Row>
                                    <Form.Row className = "padding">
                                        <Form.Control type = "company" placeholder = "Company Name"></Form.Control>
                                    </Form.Row>
                                    <Form.Row className = "padding">
                                        <Form.Control type = "password" placeholder = "Password"></Form.Control>
                                    </Form.Row>
                                    <Form.Row className = "padding">
                                        <Form.Check type="checkbox" label="Agree to Terms of Service"/>
                                    </Form.Row>
                                    <Form.Row className = "padding">
                                        <Button variant="primary" style = {{border: 'hidden', width: '40%', fontWeight: 'bold', fontSize: '1.2rem'}} size = "lg" className = "btn-rounded mx-auto">sign up</Button>
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

