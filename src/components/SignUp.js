import React from 'react';
import {Nav, Navbar, Image, Button, ButtonToolbar} from 'react-bootstrap';
import { Container, Row, Col, CardGroup, Card} from 'react-bootstrap';
import {Jumbotron, Form} from 'react-bootstrap';

export class SignUp extends React.Component {
    render() {
        return(
            <Container className = "sign-up-bg" fluid>
                <Row>
                <h6 style = {{color: 'white', zIndex: '2', fontSize:  'calc(20px + 2vmin)',paddingTop: '5rem'}} className = "mx-auto font">Sign up</h6>
                </Row>
                <Row>
                    <Jumbotron className = "shadow-sm p-4 mb-1 rounded mx-auto" style ={{'background-color': 'white', width: '40%'}}>
                        <Form className = "font">
                            <Form.Row>
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type = "full name" placeholder = "e.g. Jane Doe"/>
                            </Form.Row>

                            <Form.Row style = {{paddingTop: '1rem'}}>
                                <Form.Label>Work Email</Form.Label>
                                <Form.Control type = "work email" placeholder = "name@work-email.com"/>
                            </Form.Row>
                        </Form>
                    </Jumbotron>
                </Row>
            </Container>
        );
    }
}
export default SignUp;