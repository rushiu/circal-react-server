import React from 'react';
import {Container, Form, Col, Jumbotron, Button, Modal} from 'react-bootstrap';


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
                        <Button style = {{border: 'hidden', width: '40%'}} variant="success" type="submit"  size = "lg" className = "mx-auto btn-rounded"> Submit </Button> 
                        </Form.Row>
                    </Form>
                </Jumbotron>
            </Container>
        );
    }
}

export default ContactForm;
