import React from 'react';
import {Nav, Navbar, Image, Button, ButtonToolbar} from 'react-bootstrap';
import { Container, Row, Col, CardGroup, Card, ResponsiveEmbed} from 'react-bootstrap';
import {Jumbotron} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const SectionBackground = {
  left: 0,
  right: 0,
  minWidth:'100%',
  height: '100%'
};

export class FeaturesSection extends React.Component {
    render() {
      return (
        <Container className = "font grey-header min-vw-100 min-vh-50 ml-0 pl-0" style={SectionBackground}>
              <Jumbotron className = "min-vw-100 min-vh-100" fluid>
                <Row style = {{display: 'flex', justifyContent: 'center', paddingBottom: '3rem'}}>
                    <Col className = "center">
                        <h1 style = {{fontSize: '3rem'}}>Features</h1>
                    </Col>
                </Row>
                
                <Row className = "h-100 min-vw-100">
                    <Col style = {{width: '33.33%'}} fluid>
                        <Row>
                            <Col className = "text-center">
                                <Row>
                                    <Col style = {{width: '50%'}}>
                                    <ResponsiveEmbed aspectRatio = "20by5">
                                        <embed type = "image/svg+xml" src="./assests/SyncIcon.svg"/>
                                    </ResponsiveEmbed>
                                    </Col>
                                </Row>
                                <Row>
                                    <h4 className = "mx-auto">2-way sync</h4>
                                </Row>
                                <Row>
                                    <p className = "mx-auto text-wrap" style = {{width: '40%'}}>Retrieve and add events to your calendar automatically.</p>
                                </Row>
                            </Col>
                        </Row>

                        <Row>
                            <Col className = "text-center">
                                <Row>
                                    <Col style = {{width: '50%'}}>
                                    <ResponsiveEmbed aspectRatio = "20by5">
                                        <embed type = "image/svg+xml" src="./assests/StatIcon.svg"/>
                                    </ResponsiveEmbed>
                                    </Col>
                                </Row>
                                <Row>
                                    <h4 className = "mx-auto text-wrap">Meeting Statistics</h4>
                                </Row>
                                <Row>
                                    <p className = "mx-auto text-wrap w-50">Send anonymous meeting feedback which will be summarized into statistics for organizer.</p>
                                </Row>
                            </Col>
                        </Row>
                    </Col>

                    <Col style = {{justifyContent: 'center', width: '33.33%'}} fluid>
                        <Row className = "center" style = {{paddingBottom: '6rem'}}>
                        <ResponsiveEmbed aspectRatio="16by9">
                            <Image src="./assests/HomeFeaturesIcon.svg"></Image>
                        </ResponsiveEmbed>
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
                                    <ResponsiveEmbed aspectRatio = "20by5">
                                        <embed type = "image/svg+xml" src="./assests/AgendaIcon.svg"/>
                                    </ResponsiveEmbed>
                                    </Col>
                                </Row>
                                <Row>
                                    <h4 className = "mx-auto text-wrap">Meeting Agenda</h4>
                                </Row>
                                <Row>
                                    <p className = "mx-auto text-wrap" style = {{width: '40%'}}>Pre-meeting agenda created by meeting organizer.</p>
                                </Row>
                            </Col>
                        </Row>

                        <Row>
                            <Col className = "text-center">
                                <Row>
                                    <Col style = {{width: '33.33%'}}>
                                        <ResponsiveEmbed aspectRatio = "20by5">
                                            <embed type = "image/svg+xml" src="./assests/ScheduleIcon.svg"/>
                                        </ResponsiveEmbed>
                                    </Col>
                                </Row>
                                <Row>
                                    <h4 className = "mx-auto text-wrap">Smart Meeting Scheduling</h4>
                                </Row>
                                <Row>
                                    <p className = "mx-auto text-wrap w-50">Automatic sync within circles (teams) and lists free times available to create meetings.</p>
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
