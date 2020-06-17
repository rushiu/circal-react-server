import React from 'react';
import {Card, CardGroup, Row, Col, Container, Figure, Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import ".././css/team.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fab, faEnvelope);

export class Team extends React.Component {
    render() {
        return(
            <Container>
                <Table>
                <Row>
                    <Col>
                        <Card className = "font">
                            <Card.Header className = "card-header-pink">
                                <img width = "200" src = "./assests/NatashaProfile.png" className = "mx-auto image" />
                            </Card.Header>
                            <Card.Text className = "mx-auto pink-card-title"> 
                                    <h2>Natasha Rao</h2>
                                    <h5 className = "center">CEO, Co-founder</h5>
                            </Card.Text>
                            <Card.Footer>
                                <Row fluid>
                                    <Col>
                                        <a href ="https://www.linkedin.com/in/natasharao15/">
                                            <FontAwesomeIcon className = "mx-auto center pink-social" icon={['fab', 'linkedin']}/>
                                        </a>
                                    </Col>
                                    <Col>
                                        <a href = "https://github.com/natasharao">
                                            <FontAwesomeIcon className = "mx-auto center pink-social" icon={['fab', 'github']}/>
                                        </a>
                                    </Col>
                                    <Col>
                                        <a href = "mailto:natrao15@gmail.com">
                                        <FontAwesomeIcon className = "mx-auto center pink-social" icon="envelope"/>
                                        </a>
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Col>

                    <Col>
                        <Card className = "font rounded">
                                <Card.Header className = "card-header-green">
                                    <img width = "200" src = "./assests/AarushiProfile.png" className = "mx-auto image" />
                                </Card.Header>
                                <Card.Text className = "mx-auto green-card-title"> 
                                        <h2>Aarushi Upadhayaya</h2>
                                        <h5 className = "center">CTO, Co-founder</h5>
                                </Card.Text>
                                <Card.Footer>
                                    <Row fluid>
                                        <Col>
                                            <a href ="https://www.linkedin.com/in/aarushi-upadhyaya/">
                                                <FontAwesomeIcon className = "mx-auto center green-social" icon={['fab', 'linkedin']}/>
                                            </a>
                                        </Col>
                                        <Col>
                                            <a href = "https://github.com/rushiu">
                                                <FontAwesomeIcon className = "mx-auto center green-social" icon={['fab', 'github']}/>
                                            </a>
                                        </Col>
                                        <Col>
                                            <a href = "mailto:aarushi.e.upadhyaya@gmail.com">
                                            <FontAwesomeIcon className = "mx-auto center green-social" icon="envelope"/>
                                            </a>
                                        </Col>
                                    </Row>
                                </Card.Footer>
                            </Card>
                    </Col>

                    <Col>
                        <Card className = "font">
                            <Card.Header className = "card-header-orange">
                                <img width = "200" src = "./assests/SachiProfile.png" className = "mx-auto image" />
                            </Card.Header>
                            <Card.Text className = "mx-auto orange-card-title"> 
                                    <h2>Sachi Tolani</h2>
                                    <h5 className = "center">CMO</h5>
                            </Card.Text>
                            <Card.Footer>
                                <Row fluid>
                                    <Col>
                                        <a href ="https://www.linkedin.com/in/sachi-tolani-bbb229167/">
                                            <FontAwesomeIcon className = "mx-auto center orange-social" icon={['fab', 'linkedin']}/>
                                        </a>
                                    </Col>
                                    <Col>
                                        <a href = "mailto:stolani123@gmail.com">
                                        <FontAwesomeIcon className = "mx-auto center orange-social" icon="envelope"/>
                                        </a>
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                </Table>
                <Table>
                <Row style = {{paddingTop: '4rem'}}>
                    <Col lg = {4}>
                        <Card className = "font">
                            <Card.Header className = "card-header-purple">
                                <img width = "200" src = "./assests/MirandaProfile.png" className = "mx-auto image" />
                            </Card.Header>
                            <Card.Text className = "mx-auto purple-card-title"> 
                                    <h2>Miranda Chai</h2>
                                    <h5 className = "center">CIO, Co-founder</h5>
                            </Card.Text>
                            <Card.Footer>
                                <Row fluid>
                                    <Col>
                                        <a href ="https://www.linkedin.com/in/mirandachai/">
                                            <FontAwesomeIcon className = "mx-auto center purple-social" icon={['fab', 'linkedin']}/>
                                        </a>
                                    </Col>
                                    <Col>
                                        <a href = "https://github.com/mirandachai">
                                            <FontAwesomeIcon className = "mx-auto center purple-social" icon={['fab', 'github']}/>
                                        </a>
                                    </Col>
                                    <Col>
                                        <a href = "mailto:miranda.chai@gmail.com">
                                        <FontAwesomeIcon className = "mx-auto center purple-social" icon="envelope"/>
                                        </a>
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col lg = {4}>
                        <Card className = "font">
                            <Card.Header className = "card-header-pink">
                                <img width = "200" src = "./assests/AnishaProfile.png" className = "mx-auto image" />
                            </Card.Header>
                            <Card.Text className = "pink-card-title"> 
                                    <Row className = "mx-auto center"><h2>Anisha Bhat</h2></Row>
                                    <Row><h5 className = "mx-auto center">Product Manager, Co-founder</h5></Row>
                            </Card.Text>
                            <Card.Footer>
                                <Row fluid>
                                    <Col>
                                        <a href ="https://www.linkedin.com/in/anishabhat/">
                                            <FontAwesomeIcon className = "mx-auto center pink-social" icon={['fab', 'linkedin']}/>
                                        </a>
                                    </Col>
                                    <Col>
                                        <a href = "https://github.com/anishasbhat">
                                            <FontAwesomeIcon className = "mx-auto center pink-social" icon={['fab', 'github']}/>
                                        </a>
                                    </Col>
                                    <Col>
                                        <a href = "mailto:anishasbhat@gmail.com">
                                        <FontAwesomeIcon className = "mx-auto center pink-social" icon="envelope"/>
                                        </a>
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                </Table>
            </Container>
        );
    }
}


export default Team;