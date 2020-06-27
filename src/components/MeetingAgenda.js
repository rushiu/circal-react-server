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

export class MeetingAgenda extends React.Component {
    render() {
      return (
        <Container className = "font grey-header">
              <Jumbotron style={SectionBackground} fluid>
                <Row style = {{display: 'flex', justifyContent: 'center', paddingBottom: '3rem'}}>
                    <Col className = "center">
                        <h1 style = {{fontSize: '3rem'}}>Meeting Agenda</h1>
                    </Col>
                </Row>
                
                <Row style = {{height: '70%'}}>
                    <Col style = {{justifyContent: 'center', width: '50%'}} fluid>
                        <Row className = "center" style = {{paddingBottom: '6rem'}}>
                            
                        </Row>
                    </Col>

                    <Col style = {{width: '50%'}} fluid>
                        <Row>
                            <Col className = "text-center">
                                <Row>
									<p className="paragraph-text mx-auto" style = {{color:'#B0B4C3'}}>
                                    Circal includes the option to include meeting agendas for maximized 
                                    productivity. Pre meeting agendas encompass a schedule of the upcoming 
                                    meeting, while post meeting summaries allow for anonymous feedback on 
                                    the presentation and the content delivered.</p>
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

export default MeetingAgenda;
