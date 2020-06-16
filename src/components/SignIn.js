import React from 'react';

import {Image, Button, ButtonToolbar} from 'react-bootstrap';
import { Container, Row, Col, CardGroup, Card, Fade, Nav} from 'react-bootstrap';
import {Jumbotron, Form, Table} from 'react-bootstrap';
import {SignInNav} from './SignInNav.js';
import {Link} from 'react-router-dom';
import '.././App.css';
import '.././css/signin.css';

export class SignIn extends React.Component {
    render() {
      return (
        <Container className = "font" fluid>
            <SignInNav/>
                <Container className = "left-container animate__animated animate__slideInRight" fluid>
                    <Table className = "animate__animated animate__fadeIn animate__delay-1s">
                            <Row>
                                <h1 className = "mx-auto sign-in-header">Sign In</h1>
                            </Row>
                            <Row>
                                <Button className = "mx-auto" variant = "light">Sign in with Google</Button>
                            </Row>
                            <Row style = {{paddingTop: '1rem', color: 'gray'}}> 
                            <p className = "mx-auto">or use your account</p>
                            </Row>
                            <Col>
                                <Form className = "mx-auto" style = {{width: '60%'}}>
                                    <Form.Row>
                                        <Form.Control type = "email" placeholder = "Email"/>
                                    </Form.Row>
                                    <Form.Row className = "padding">
                                        <Form.Control type = "password" placeholder = "Password"/>
                                    </Form.Row>
                                    <Form.Row className = "padding">
                                        <Button variant="primary" style = {{border: 'hidden', width: '40%', fontWeight: 'bold', fontSize: '1.2rem'}} size = "lg" href = "/user_dashboard" className = "btn-rounded mx-auto">sign in</Button>
                                    </Form.Row>
                                    <Nav className="justify-content-center" activeKey="/home">
                                        <Nav.Item>
                                            <Nav.Link href="/signup">Forgot Password?</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Form>
                            </Col>
                    </Table>
                </Container>

                <Container className = "sign-in-bg animate__animated animate__slideInLeft" fluid>
                    <Table className = "animate__animated animate__fadeIn">
                        <Row>
                            <h1 className = "title header mx-auto welcome-header">Hello, Friend!</h1>
                        </Row>
                        <Row>
                            <p className = "mx-auto white">Don't have an account?</p>
                        </Row>
                        <Row>
                            <p className = "mx-auto white">Click the button below to register!</p>
                        </Row>
                        <Row>
                            <Button href="/signin" variant = "outline-light" size = "lg" className = "btn-rounded mx-auto btn-sign-in" href = "/signup">sign up</Button>
                        </Row>
                    </Table>
                </Container>
            </Container>
      );
    }
}
export default SignIn;