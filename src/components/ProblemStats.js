import React from 'react';
import ".././App.css";
import {Card, CardGroup, Container, Row, Col} from 'react-bootstrap';


export class ProblemStats extends React.Component {
    render() {
        return(
            <Container className = "font text-center" fluid>
                <Row>
                    <Col></Col>
                    <Col lg="mx-auto">
                    <h3 className="text">The problem is in the numbers.</h3>
                    </Col>
                    <Col></Col>
                </Row>

                <Row style = {{ display: 'flex', justifyContent: 'center'}}>
                    <CardGroup lg="mx-auto">
                        <Card border="light">
                            <Card.Body className = "subtext">
                                <Card.Title as="h1">11</Card.Title>
                                <Card.Text>
                                    million meetings in America everyday.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card border="light" >
                            <Card.Body className = "subtext">
                                <Card.Title as="h1">$399.1</Card.Title>
                                <Card.Text>
                                    billion loss in USA for poorly <br></br> organized meetings. (Yes. Billions.)
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card border="light">
                            <Card.Body className = "subtext">
                                <Card.Title as="h1">4.8</Card.Title>
                                <Card.Text>
                                    hours/week per professional <br></br> spent setting up meetings
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Row>      
            </Container>

        );
    }
}

export default ProblemStats;