import React from 'react';
import { Container, Row, Col, Card, Button, ResponsiveEmbed} from 'react-bootstrap';
import '.././App.css';

export class GetStartedCard extends React.Component {
    render() {
      return (
        <Container className = "text-center min-vw-50 max-vw-50">
            <Card className = "font" style = {{border: 'hidden', borderRadius: '30px', boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.08)'}}border = "light">
                <Card.Body className = "grey-header" fluid>
                    <Card.Title  as="h1">Get your business<br></br>started with Circal</Card.Title>
                    <Card.Text>Contact us to learn about how Circal fits your business and pricing.</Card.Text>
                    <Row>
                        <Col>
                            <Button className = "btn-rounded w-50" size = "lg" variant = "success" href = "/contact">contact us</Button>
                        </Col>
                        <Col>
                            <Button className = "btn-rounded w-50" size = "lg" variant = "secondary" href = "/contact">request demo</Button>
                        </Col>
                    </Row>  
                </Card.Body>
            </Card>
        </Container>
      );
    }
}
export default GetStartedCard;