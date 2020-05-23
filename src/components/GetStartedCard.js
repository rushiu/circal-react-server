import React from 'react';
import { Container, Row, Col, CardGroup, Card, Button, ButtonToolbar} from 'react-bootstrap';
import '.././App.css'
import {Link} from 'react-router-dom';


export class GetStartedCard extends React.Component {
    render() {
      return (
        <Container className = "padding text-center">
            <Card className = "font shadow-sm bg-grey rounded" bg = "light">
                <Card.Body className = "grey-header" fluid>
                    <Card.Title  as="h2">Get your business started with Circal</Card.Title>
                    <Card.Text>Contact us to learn about how Circal fits your business and pricing.</Card.Text>
                        <Col>
                        <Link to = "/contact">
                            <Button style = {{width: '20%', border: 'hidden'}} className = "btn-rounded" size = "lg" variant = "success">contact us</Button>
                        </Link>
                        </Col>
                        <Col>
                        <Button style = {{width: '20%', border: 'hidden'}} className = "btn-rounded" size = "lg" variant = "secondary">request demo</Button>
                        </Col>
                </Card.Body>
            </Card>
        </Container>
      );
    }
}
export default GetStartedCard;