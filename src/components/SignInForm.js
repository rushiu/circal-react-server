import React from 'react';
import {Container, Form, Col, Jumbotron, Button, Nav, Row} from 'react-bootstrap';

export class SignInForm extends React.Component {
    render() {
        return (
            <Container fluid>
                    <Jumbotron className = "shadow-sm p-4 mb-1 rounded" style ={{'background-color': 'light-grey', width: '60%'}}>
                        <Form>
                            <Form.Row style = {{'padding-top': '1rem'}}>
                                <Form.Group as={Col}>
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row><p></p></Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter password" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row><p></p></Form.Row>

                            <Form.Row>
                            </Form.Row>
                            <Form.Row>
                                <Button variant="primary" style = {{border: 'hidden', width: '50%'}} size = "lg" className = "btn-rounded mx-auto">lets go ></Button>
                            </Form.Row>
                            <Form.Row><p></p></Form.Row>
                            <Form.Row>
                                <Form.Text className="text-muted">
                                        Already have an account?
                                </Form.Text>
                                <Nav className="mr-auto">
                                    <Nav.Link href="/about">Sign Up</Nav.Link>
                                </Nav>
                            </Form.Row>
                        </Form>
                    </Jumbotron>
            </Container>
        );
    }
}

export default SignInForm;
