import React from 'react';
import {useState} from 'react';
import {Container, Form, Col, Jumbotron, Button, Modal, Card} from 'react-bootstrap';


function ContactForm() {
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        setValidated(true);
    }
        return (
            <Container className ="mx-auto center" fluid>
                <Card className = "shadow-lg p-4 rounded w-50" border = "light">
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Row>
                            <Col>
                                <Form.Control placeholder = "First Name" required/>
                            </Col>
                            <Col>
                                <Form.Control placeholder = "Last Name" required/>
                            </Col>
                        </Form.Row>

                        <Form.Row className = "pt-3">
                            <Form.Group as={Col}>
                                <Form.Control type="company" placeholder="Company" required/>
                            </Form.Group>
                        </Form.Row>
                    
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Control type="email" placeholder="Work Email" required/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as= {Col} controlId="exampleForm.ControlTextarea1" fluid>
                                <Form.Control className = "form-control" as="textarea" rows="5" placeholder = "Type here..." required/>
                            </Form.Group>
                        </Form.Row>
                        
                        <Form.Row>
                            <Button style = {{border: 'hidden', width: '15vw'}} variant="success" type="submit"  size = "lg" className = "mx-auto btn-rounded"> Submit </Button> 
                        </Form.Row>
                    </Form>
                </Card>
            </Container>
        );
}

export default ContactForm;
