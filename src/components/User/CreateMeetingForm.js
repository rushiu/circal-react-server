import React, {useState} from 'react';
import {Container, Card, Form, Row, Col, Button} from 'react-bootstrap';
import CalendarPicker from './CalendarPicker.js';
import Multiselect from 'react-widgets/lib/Multiselect';

function CreateMeetingForm() {
    let people = [
        {team: 'circal-dev', name: 'Natasha Rao'},
        {team: 'circal-dev', name: 'Miranda Chai'},
        {team: 'circal-dev', name: 'Aarushi Upadhayaya'},
        {team: 'circal-biz', name: 'Sachi Tolani'},
        {team: 'circal-biz', name: 'Anisha Bhat'}
    ];

    function filterLastName(person, value) {
    let lastname = person.lastName.toLowerCase()
    let search  = value.toLowerCase();

    return lastname.indexOf(search) === 0
    }

    return(
        <Container fluid>
            <Form variant="secondary" className = "font">
                <Form.Row lg={12}>
                    <Col lg={4} className = "w-25">
                        <Row className="center mt-5">
                            <h6>Choose a day</h6>
                        </Row>
                        <Row className="center">
                            <CalendarPicker/>
                        </Row>
                    </Col>
                    <Col lg={8} className = "w-75 pl-0 ml-0 pl-sm-5 pt-sm-5">
                        <Form.Group>
                            <Form.Label>Meeting Title</Form.Label>
                            <Form.Control type="text" className="w-50"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Duration of Meeting</Form.Label>
                            <Form.Group>
                                <Form.Row>
                                    <Col lg={3}>
                                        <Form.Row>
                                            <Form.Control className="w-50 mr-2" pattern="[0-9]*"/>
                                            <p className = "my-auto">Hours</p>
                                        </Form.Row>
                                    </Col>
                                    <Col lg={3}>
                                        <Form.Row>
                                            <Form.Control className="w-50 mr-2" pattern="[0-9]*"/>
                                            <p className = "my-auto">Minutes</p>
                                        </Form.Row>
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Choose Attendees</Form.Label>
                            <Multiselect
                            className = "w-50"
                             data={people}
                             textField='name'
                             groupBy='team'
                             />
                        </Form.Group>
                        <Form.Row className = "w-25 pt-4">
                            <Button variant = "secondary" className = "btn-rounded w-100">
                                Sync!
                            </Button>
                        </Form.Row>
                    </Col>
                </Form.Row>
            </Form>
        </Container>
    );
}

export default CreateMeetingForm;