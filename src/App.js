import React, {Component} from 'react';
import './App.css';
import {Nav, Navbar, Image, Button} from 'react-bootstrap';
import { Container, Row, Col, CardGroup, Card} from 'react-bootstrap';
import {Jumbotron} from 'react-bootstrap';


const HeroImageContainer = {
  position: 'absolute',
  top:0,
  left:0,
  zIndex:0,
  width:'100%'
};

const SectionBackground = {
  position: 'absolute',
  left:0,
  right: 0,
  zIndex:0,
  height: '80vh',
  width:'100%'
};

const NavBarStyle = {
  position: 'absolute',
  zIndex:1
};

const OtherStyle = {
  position: 'absolute',
  zIndex:2,
  width:'100%',
};

class App extends React.Component {
  render() {
    return (
    <Container fluid>  
      
      <Image src="/assests/PinkGradient.svg" style={HeroImageContainer}/>
      <Container style={OtherStyle} fluid>
        <Navbar variant="dark">
              <img
                alt=""
                src="/assests/LogoImage.png"
                width="35"
                height="25"
                className="d-inline-block align-top"
              />
            <Navbar.Brand href="">circal</Navbar.Brand>
              <Nav className ="mr-auto">
                <Nav.Link href=""></Nav.Link>
                <Nav.Link href="features">features</Nav.Link>
                <Nav.Link href="pricing">pricing</Nav.Link>
                <Nav.Link href="about">about</Nav.Link>
                <Nav.Link href="contact">contact</Nav.Link>
              </Nav>
        </Navbar>

    <Container className = "header">
      <Row>
        <Col></Col>
        <Col lg="mx-auto">
        <h1 className="title justify-content-md-center">
          Meetings made easy.
        </h1>
        </Col>
        <Col></Col>
      </Row>

      <Row lg = {10}>
      <Col></Col>
        <Col lg={6}>
        <p className = "paragraph-header">Circal is a smart scheduling software for the workplace to
make lives easier and teams more efficient.</p> 
        </Col>
        <Col></Col>
      </Row>

      <Row className="justify-content-md-center">
        <Col></Col>
        <Col lg="mx-auto">
        <style type="text/css">
            {`
            .btn-flat {
              background-color: white;
              color: pink;
              font-family: 'Jost';
            }

            .btn-xxl {
              padding: 1rem 1.5rem;
              font-size: 1.5rem;
            }
            `}
          </style>
          <Button variant="flat">sign in</Button>
          </Col>
          <Col></Col>
      </Row>
    </Container>

  <Container className = "text-center" fluid>
    <Row>
      <Col></Col>
      <Col lg="mx-auto">
      <h4 className="text">The problem is in the numbers.</h4>
      </Col>
      <Col></Col>
    </Row>

  <Row>
  <CardGroup lg="mx-auto">
    <Card border="light" style={{ width: '31rem' }}>
      <Card.Body className = "subtext">
        <Card.Title as="h1">11</Card.Title>
        <Card.Text>
          million meetings in America everyday.
        </Card.Text>
      </Card.Body>
    </Card>
  
    <Card border="light" style={{ width: '31rem' }}>
      <Card.Body className = "subtext">
        <Card.Title as="h1">$399.1</Card.Title>
        <Card.Text>
          billion loss in USA for poorly organized meetings. (Yes. Billions.)
        </Card.Text>
      </Card.Body>
    </Card>
  
    <Card border="light" style={{ width: '31rem' }}>
      <Card.Body className = "subtext">
        <Card.Title as="h1">4.8</Card.Title>
        <Card.Text>
          hours/week per professional spent setting up meetings
        </Card.Text>
      </Card.Body>
    </Card>
    
  </CardGroup>
  </Row>
  </Container>

<Container>
  <Row fluid>
  <Jumbotron style={SectionBackground} fluid>
      <Col></Col>
      <Col>

        <Row>
          <Col></Col>
          <Col lg="mx-auto">
          <h1>Features</h1>
          </Col>
          <Col></Col>
        </Row>
        
      </Col>

        <Row>
          <Col lg = {1}></Col>
          <Col lg = {2} className = "text-center">
            <Row lg = {1}>
              <Image src="./assests/SyncIcon.svg"/>
            </Row> 
            <Row lg = {1}>
              <h4>2-way sync</h4>
            </Row>
            <Row>
              <p>retrieve and add events to your calendar automatically</p>
            </Row>
          </Col>
        </Row>

        <Row>
`         <Col lg = {5}>

          </Col>
          <Col lg = {1}>
            <Image src="./assests/HomeFeaturesIcon.svg" />
          </Col>
          <Col></Col>`
        </Row>

        <Col>
        </Col>

  </Jumbotron>
  </Row>
</Container>
  
</Container>


</Container>
    );
  }
}

export default App;
