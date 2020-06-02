import React from 'react';
import { Container, Row, Col, CardGroup, Card, Button, ButtonToolbar} from 'react-bootstrap';
import '.././App.css';
import {Link} from 'react-router-dom';


export class GetStartedCard extends React.Component {
    render() {
      return (
        <Container className = "text-center" style = {{paddingTop: '50%'}}>
            <Card className = "font shadow-sm bg-grey rounded">
                <Card.Body className = "grey-header" fluid>
                    <Card.Title  as="h2">Get your business started with Circal</Card.Title>
                    <Card.Text>Contact us to learn about how Circal fits your business and pricing.</Card.Text>
                    <Row>
                        <Col>
                            <Link to = "/contact">
                                <Button style = {{width: '50%', border: 'hidden'}} className = "btn-rounded" size = "lg" variant = "success" href = "/contact">contact us</Button>
                            </Link>
                        </Col>
                        <Col>
                            <Button style = {{width: '50%', border: 'hidden'}} className = "btn-rounded" size = "lg" variant = "secondary" href = "/contact">request demo</Button>
                        </Col>
                    </Row>  
                </Card.Body>
            </Card>
        </Container>
      );
    }
}
export default GetStartedCard;