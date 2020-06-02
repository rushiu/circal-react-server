import React from 'react';
import {Nav, Navbar, Image, Button, ButtonToolbar} from 'react-bootstrap';
import { Container, Row, Col, CardGroup, Card} from 'react-bootstrap';
import {Jumbotron} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const SectionBackground = {
  position: 'absolute',
  left: 0,
  right: 0,
  zIndex:0,
  minWidth:'100%',
  width: '100%',
  height: '35%'
};

export class FeaturesSection extends React.Component {
    render() {
      return (
        <Container className = "font grey-header">
              <Jumbotron style={SectionBackground} fluid>
                <Row style = {{display: 'flex', justifyContent: 'center', paddingBottom: '3rem'}}>
                    <Col className = "center">
                        <h1 style = {{fontSize: '3rem'}}>Features</h1>
                    </Col>
                </Row>
                
                <Row style = {{height: '70%'}}>
                    <Col style = {{width: '33.33%'}} fluid>
                        <Row>
                            <Col className = "text-center">
                                <Row>
                                    <Col style = {{width: '50%'}}>
                                        <Image src="./assests/SyncIcon.svg"/>
                                    </Col>
                                </Row>
                                <Row>
                                    <h4 className = "mx-auto">2-way sync</h4>
                                </Row>
                                <Row>
                                    <p className = "mx-auto" style = {{width: '40%'}}>Retrieve and add events to your calendar automatically.</p>
                                </Row>
                            </Col>
                        </Row>

                        <Row>
                            <Col className = "text-center">
                                <Row>
                                    <Col style = {{width: '50%'}}>
                                        <Image src="./assests/StatIcon.svg"/>
                                    </Col>
                                </Row>
                                <Row>
                                    <h4 className = "mx-auto">Meeting Statistics</h4>
                                </Row>
                                <Row>
                                    <p className = "mx-auto" style = {{width: '50%'}}>Send anonymous meeting feedback which will be summarized into statistics for organizer.</p>
                                </Row>
                            </Col>
                        </Row>
                    </Col>

                    <Col style = {{justifyContent: 'center', width: '33.33%'}} fluid>
                        <Row className = "center" style = {{paddingBottom: '6rem'}}>
                            <Image src="./assests/HomeFeaturesIcon.svg"></Image>
                        </Row>
                        <Row>
                            <Button style = {{ width: '50%', border: 'hidden', color: 'white'}} className = "btn-rounded mx-auto" size = "lg" variant = "gray" href = "/features">learn more</Button>
                        </Row>
                    </Col>

                    <Col style = {{width: '33.33%'}} fluid>
                        <Row>
                            <Col className = "text-center">
                                <Row>
                                    <Col style = {{width: '50%'}}>
                                        <Image src="./assests/AgendaIcon.svg"/>
                                    </Col>
                                </Row>
                                <Row>
                                    <h4 className = "mx-auto">Meeting Agenda</h4>
                                </Row>
                                <Row>
                                    <p className = "mx-auto" style = {{width: '40%'}}>Pre-meeting agenda created by meeting organizer.</p>
                                </Row>
                            </Col>
                        </Row>

                        <Row>
                            <Col className = "text-center">
                                <Row>
                                    <Col style = {{width: '33.33%'}}>
                                        <Image src="./assests/ScheduleIcon.svg"/>
                                    </Col>
                                </Row>
                                <Row>
                                    <h4 className = "mx-auto">Smart Meeting Scheduling</h4>
                                </Row>
                                <Row>
                                    <p className = "mx-auto" style = {{width: '50%'}}>Automatic sync within circles (teams) and lists free times available to create meetings.</p>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
            </Row>
          </Jumbotron>
        </Container>
      );
    }
}

export default FeaturesSection;
