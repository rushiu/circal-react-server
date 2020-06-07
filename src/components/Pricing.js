import React from 'react';
import {Nav, Navbar, Image, Button, ButtonToolbar} from 'react-bootstrap';
import { Container, Row, Col, CardGroup, Card} from 'react-bootstrap';
import {Jumbotron} from 'react-bootstrap';
import {NavigationBar} from './NavigationBar.js';
import './../css/Pricing.css';
import './../App.css';


const HeroImageContainer = {
    position: 'absolute',
    top:0,
    left:0,
    zIndex:0,
    width:'100%'
};

const OtherStyle = {
    position: 'absolute',
    zIndex:2,
    width:'100%',
};


export class Pricing extends React.Component {
  render() {
    return (
    <Container fluid>
      <NavigationBar />
      <Image src = "./assests/OrangeGradient.svg" style = {HeroImageContainer}/>
      <Container fluid>
        <Container className = "header">
          <Row>
            <h1 className="title mx-auto">Pricing</h1>
          </Row>
					<Row>
            <p className="paragraph-header mx-auto">A plan for everyone.</p>
          </Row>

          <Row style = {{paddingTop: '40%'}}>
						<Col>
            	<Card className="rounded">
                <Card.Header  style = {{background: '#FCAD55'}}>
									<p className = "white-title-2 mx-auto">TEAMS</p>
								</Card.Header>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
										<Row>
											<Col></Col>
											<Col></Col>
											<Col></Col>
											<Col>
												<p className="small-white-title mx-auto" style = {{color:'#B0B4C3'}}>
													$
                    							</p>
											</Col>
											<Col>
												<p className="large-white-title mx-auto" style = {{color:'#B0B4C3'}}>
													8
                    							</p>
											</Col>
											<Col></Col>
											<Col></Col>
											<Col></Col>
											<Col></Col>
										</Row>
										
										<Row>
											<p className="small-white-title mx-auto" style = {{color:'#B0B4C3'}}>
												{" "}user / month 
                    						</p>
										</Row>

										<Row>
											<p className="paragraph-text mx-auto" style = {{color:'#B0B4C3'}}>
												max 20 users 
                    						</p>
										</Row>
										<Row>
											<p className="paragraph-text mx-auto" style = {{color:'#B0B4C3'}}>
												meeting scheduling
                    						</p>
										</Row>
										<Row>
											<p className="paragraph-text mx-auto" style = {{color:'#B0B4C3'}}>
												pre-meeting agenda
                    						</p>
										</Row>

										<Row className = "center">
              								<Button variant="outline-light" style = {{width: '40%'}, {backgroundColor: '#FCAD55'}} size = "lg" className = "btn-rounded" href = "/signin">free trial</Button>
                  						</Row>
                  </blockquote>
                </Card.Body>
              </Card>
						</Col>

						<Col>
            	<Card className="rounded" style = {{background: '#FCAD55'}} >
                <Card.Body >
									<Card.Title>
										<p className = "white-title-2 mx-auto">ENTERPRISE</p>
									</Card.Title>
                  <blockquote className="blockquote mb-0" style = {{paddingTop: '20%'}}>
                    <Row>
											<p className="paragraph-text-2 mx-auto">
                      	Unlimited users
                    	</p>
										</Row>
										<Row>
											<p className="paragraph-text-2 mx-auto">
                      	meeting scheduling
                    	</p>
										</Row>
										<Row>
											<p className="paragraph-text-2 mx-auto">
                      	pre meeting agenda
                    	</p>
										</Row>
										<Row>
											<p className="paragraph-text-2 mx-auto">
                      	post meeting feedback
                    	</p>
										</Row>
									</blockquote>
									<blockquote className="blockquote mb-0" style = {{paddingTop: '23%'}}>
									<Row className = "center" style= {{color:'#FCAD55'}}>
              								<Button variant="outline-light" size = "lg" className = "btn-rounded-2" href = "/signin">
												contact us</Button>
                  					</Row>
									</blockquote>
										
								
                </Card.Body>
              </Card>
						</Col>

        	</Row>

					<Row>
						<h1 className="title mx-auto" style = {{color:'#B0B4C3'}}>Affected by Covid-19?</h1>
					</Row>
					<Row style = {{paddingTop: '5%'}, {paddingBottom: '30%'}}>
						<Col lg={1}></Col>
						<Col>
						<h1 className="paragraph-text mx-auto" style = {{color:'#B0B4C3'}}>
							Circal understands how Covid-19 has affected businesses. Contact us along 
							with a message of how your business was affected and how Circal can help.</h1>
						</Col>
						<Col lg={1}></Col>

					</Row>


        </Container>
			</Container>
  	</Container>
  	);
  }
}

export default Pricing;