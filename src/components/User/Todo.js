import React from 'react'
import {Card, Container, Col, Row, Table, Button} from 'react-bootstrap'

export default class Todo extends React.Component {
    render() {
        return(
            <Card className = "dashboard-basic-card mx-auto">
                <h6 className = "mx-auto pt-4 grey-header">Tasks Today</h6>
                <Card.Body>
                    <Table>

                    </Table>
                </Card.Body>
                <Button  variant = "gray" style = {{border: 'hidden', color: 'grey', background: '#F1F3F8', fontSize: '.9em'}} 
                href = "/tasks" className = "btn-rounded mx-auto mb-4">View All</Button>
            </Card>
        );
    }
}