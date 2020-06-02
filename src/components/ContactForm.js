import React from 'react';
import {Container, Form, Col, Jumbotron, Button, Modal, Card} from 'react-bootstrap';


export class ContactForm extends React.Component {



    render() {
        return (
            <Container fluid>
                <Card className = "shadow-lg p-4 mb-1 rounded" style ={{width: '60%'}} border = "light">
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
                                <Form.Control type="company" placeholder="Company" />
                            </Form.Group>
                        </Form.Row>
                    
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Control type="email" placeholder="Work Email" />
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
                </Card>
            </Container>
        );
    }
}

export default ContactForm;
