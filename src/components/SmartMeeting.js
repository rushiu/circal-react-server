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

export class SmartMeeting extends React.Component {
    render() {
      return (
        <Container className = "font grey-header">
              <Jumbotron style={SectionBackground} fluid>
                <Row style = {{display: 'flex', justifyContent: 'center', paddingBottom: '3rem'}}>
                    <Col className = "center">
                        <h1 style = {{fontSize: '3rem'}}>Smart Meeting Scheduling</h1>
                    </Col>
                </Row>
                
                <Row style = {{height: '70%', paddingLeft: '5rem'}}>
                    <Col style = {{float: 'center'}}>
                      <img width="600" height="400" src="./assests/SmartMeeting.svg" />
                    </Col>
                    
                    <Col style = {{width: '50%'}} fluid>
                        <Row>
                            <Col className = "text-center">
                                <Row>
									<p className="paragraph-text mx-auto" style = {{color:'#B0B4C3'}}>
                                                  Circal’s smart software largely automates the scheduling process 
                                                  for customer ease. A manager simply has to select the date, duration, 
                                                  and the key employees; Circal automates the rest, taking into account 
                                                  all calendars and listing times available for everyone.</p>
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

export default SmartMeeting;
