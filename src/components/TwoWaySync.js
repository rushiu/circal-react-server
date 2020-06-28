import React from 'react';
import {Nav, Navbar, Image, Button, ButtonToolbar} from 'react-bootstrap';
import { Container, Row, Col, CardGroup, Card} from 'react-bootstrap';
import {Jumbotron} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '.././css/features.css';

const SectionBackground = {
  position: 'absolute',
  left: 0,
  right: 0,
  zIndex:0,
  minWidth:'100%',
  width: '100%',
  height: '35%'
};

export class TwoWaySync extends React.Component {
    render() {
      return (
        <Container className = "font grey-header">
              <Jumbotron style={SectionBackground} fluid>
                <Row style = {{display: 'flex', justifyContent: 'center', paddingBottom: '3rem'}}>
                    <Col className = "center">
                        <h1 style = {{fontSize: '3rem'}}>2-Way Sync</h1>
                    </Col>
                </Row>
                
                <Row style = {{height: '70%'}}>
                    <Col style = {{width: '50%'}} fluid>
                        <Row>
                            <Col className = "text-center">
                            <Row>
										          <p className="paragraph-text mx-auto" style = {{color:'#B0B4C3'}}>

                                        Circal utilizes 2-way syncing to provide calendar integrations<br></br> 
                                        with other services. iCal, GoogleCal, and Outlook calendars<br></br>
                                        can beimported forefficiency. When a meeting is accepted, the<br></br> 
                                        user’s personal calendar is also updated.</p>
									          </Row>

                            </Col>
                        </Row>
                    </Col>
                    <Col style = {{float: 'center'}}>
                      <img width="600" height="400" src="./assests/Synch.svg" />
                    </Col>
            </Row>
          </Jumbotron>
        </Container>
      );
    }
}

export default TwoWaySync;
