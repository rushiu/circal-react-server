import React from 'react';
import {Container, Form, Col, Jumbotron, Button} from 'react-bootstrap';

export class SignInForm extends React.Component {
    render() {
        return (
            <Container fluid>
                <Jumbotron className = "shadow-sm p-4 mb-1 rounded" style ={{'background-color': 'light-grey', width: '53%'}}>
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
                        <style>
                            {`
                            .btn-green {
                            background-image: url(./assests/PinkButton.svg);
                            color: white;
                            background-repeat: no-repeat;
                            background-size: 100% 100%;
                            }
                            .btn-xxl {
                            padding-right: 4rem;
                            padding-left: 4rem;
                            white-space: nowrap;
                            text-align: center;
                            }
                            `}
                        </style>
                        <Button variant="green" type="lets go" size = "xxl" className = "mx-auto"> lets go > </Button>
                        </Form.Row>
                    </Form>
                </Jumbotron>
            </Container>
        );
    }
}

export default SignInForm;
