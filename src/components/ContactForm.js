import React from 'react';
import {Container, Form, Col, Jumbotron, Button} from 'react-bootstrap';

export class ContactForm extends React.Component {
    render() {
        return (
            <Container fluid>
                <Jumbotron className = "shadow-sm p-4 mb-1 rounded" style ={{'background-color': 'light-grey', width: '60%'}}>
                    <Form>
                        <Form.Row>
                            <Col>
                                <Form.Control placeholder = "First Name"/>
                            </Col>
                            <Col>
                                <Form.Control placeholder = "Last Name"/>
                            </Col>
                        </Form.Row>

                        <Form.Row style = {{'padding-top': '1rem'}}>
                            <Form.Group as={Col}>
                                <Form.Control type="company" placeholder="Enter Company" />
                            </Form.Group>
                        </Form.Row>
                    
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as= {Col} controlId="exampleForm.ControlTextarea1" fluid>
                                <Form.Control className = "form-control" as="textarea" rows="5"/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                        <style>
                            {`
                            .btn-green {
                            background-image: url(./assests/GreenButton.svg);
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
                        <Button variant="green" type="submit" size = "xxl" className = "mx-auto"> Submit </Button>
                        </Form.Row>
                    </Form>
                </Jumbotron>
            </Container>
        );
    }
}

export default ContactForm;
