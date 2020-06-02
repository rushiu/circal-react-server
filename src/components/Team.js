import React from 'react';
import {Card, CardGroup, Row, Col, Container, Figure, Image} from 'react-bootstrap';
import ".././css/team.css";

export class Team extends React.Component {
    render() {
        return(
            <Container>
                <Row>
                    <Col>
                        <Card className = "font">
                            <Card.Header className = "card-header-pink">
                                <img width = "200" src = "./assests/NatashaProfile.png" className = "mx-auto image" />
                            </Card.Header>
                            <Card.Text className = "mx-auto card-title"> 
                                    <h2>Natasha Rao</h2>
                                    <h4 className = "center">CEO</h4>
                            </Card.Text>
                            <Card.Footer>
                            
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                    </Col>
                    <Col>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        );
    }
}


export default Team;