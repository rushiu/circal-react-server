import React, {useState} from 'react'
import {Card, Container, Col, Row, Table, Button, Form} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faTimesCircle);

function Todo() {
        return(
            <Card className = "dashboard-basic-card mx-auto">
                <h6 className = "mx-auto pt-4 grey-header">Tasks Today</h6>
                <Card.Body>
                    <Table>
                        <tr>
                            <td>
                                <Form.Check type="checkbox"/>
                            </td>
                            <td>
                                <p>test todo</p>
                            </td>
                        </tr>
                    </Table>
                </Card.Body>
                <Button  variant = "gray" style = {{border: 'hidden', color: 'grey', background: '#F1F3F8', fontSize: '.9em'}} 
                href = "/tasks" className = "btn-rounded mx-auto mb-4">View All</Button>
            </Card>
        );
}
export default Todo;