import React, {useState} from 'react';
import {Image, Button, ButtonToolbar} from 'react-bootstrap';
import { Container, Row, Col, CardGroup, Card, Fade} from 'react-bootstrap';
import {Jumbotron, Form, Table} from 'react-bootstrap';
import {SimpleNav} from './SimpleNav.js';
import {Link} from 'react-router-dom';
import '.././App.css';
import '.././css/password.css';

export class Password extends React.Component {
    render() {
        return(
            <Container className = "font" fluid>
                <SimpleNav/>
                <Container className = "password-bg animate__animated animate__slideInRight" fluid>
                    <Table className = "animate__animated animate__fadeIn">
                        <Row>
                            <h1 className = "title header mx-auto welcome-header">Have an Account?</h1>
                        </Row>
                        <Row>
                            <Button href="/signin" variant = "outline-light" size = "lg" className = "btn-rounded mx-auto btn-password">sign in</Button>
                        </Row>
                    </Table>
                </Container>

                <Container className = "right-container animate__animated animate__slideInLeft" fluid>
                    <Table className = "animate__animated animate__fadeIn animate__delay-1s">
                            <Row>
                                <h1 className = "mx-auto sign-up-header">Forgot Your Password?</h1>
                            </Row>
                            <Row style = {{color: 'gray'}}> 
                            <p className = "mx-auto">Enter your email address below,</p>
                            </Row>
                            <Row style = {{color: 'gray'}}> 
                            <p className = "mx-auto">and we'll send you an email to reset your password!</p>
                            </Row>
                            <Col>
                                <Form className = "mx-auto" style = {{width: '60%'}}>
                                    <Form.Row>
                                        <Form.Control type = "email" placeholder = "Email"></Form.Control>
                                    </Form.Row>
                                    <Form.Row className = "pass_padding">
                                        <Button variant="primary" style = {{border: 'hidden', width: '55%', fontWeight: 'bold', fontSize: '1.2rem'}} size = "lg" className = "btn-rounded mx-auto">reset password</Button>
                                    </Form.Row>
                                </Form>
                            </Col>
                    </Table>
                </Container>
            </Container>
        );
    }
}
export default Password;

