import React from 'react';
import {Nav, Navbar, Image, Button, ButtonToolbar} from 'react-bootstrap';
import { Container, Row, Col, CardGroup, Card} from 'react-bootstrap';
import {Jumbotron} from 'react-bootstrap';
import {NavigationBar} from './NavigationBar.js';
import './../css/Pricing.css';
import './../App.css';
import {GrayFooter} from './GrayFooter';



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
        <Container className = "header font">
          <Row>
            <h1 className="title mx-auto">Pricing</h1>
          </Row>
					<Row style={{paddingBottom: '40%'}}>
            <p className="paragraph-header mx-auto">A plan for everyone.</p>
          </Row>

          <Row>
			<Col>
            	<Card className = "rounded">
                <Card.Header className = "white-title-2 mx-auto" style = {{background: '#FCAD55', width: '100%'}}>TEAMS</Card.Header>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
										<Row>
											<Col lg = {4}>
												<p className="small-white-title mx-auto" style = {{color:'#B0B4C3'}}>
													$
                    							</p>
											</Col>
											<Col lg = {5}>
												<p className="large-white-title mx-auto" style = {{color:'#B0B4C3'}}>
													8
                    							</p>
											</Col>
										</Row>
										
										<Row>
											<p className="small-white-title mx-auto" style = {{color:'#B0B4C3'}}>
												user / month 
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
              								<Button variant="warning" style = {{width: '40%'}, {backgroundColor: '#FCAD55'}} size = "lg" className = "btn-rounded" href = "/signin">free trial</Button>
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
                  <blockquote className="blockquote mb-0">

				  	<Row>
						<p className="paragraph-text-2 mx-auto" style = {{color:'#FCAD55'}}>___________</p>
					</Row>
					<Row>
						<p className="paragraph-text-2 mx-auto" style = {{color:'#FCAD55'}}>___________</p>
					</Row>
					<Row>
						<p className="paragraph-text-2 mx-auto">Unlimited users</p>
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
										<Row>
						<p className="paragraph-text-2 mx-auto" style = {{color:'#FCAD55'}}>___________</p>
					</Row>

									</blockquote>
									<blockquote className="blockquote mb-0">

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
						<h1 className="title mx-auto" style = {{color:'#FCAD55'}}>Affected by Covid-19?</h1>
					</Row>
					<Row style = {{paddingTop: '5%'}}>
						<Col lg={1}></Col>
						<Col>
						<h1 className="paragraph-text mx-auto" style = {{color:'#837E7E'}}>
							Circal understands how Covid-19 has affected businesses. Contact us along 
							with a message of how your business was affected and how Circal can help.</h1>
						</Col>
						<Col lg={1}></Col>
					</Row>

          <Row>
						<h1 className="title mx-auto" style = {{color:'#FCAD55'}}>FAQs</h1>
					</Row>
					<Row style = {{paddingTop: '5%'}}>

            <Col lg={1}></Col>
						<Col>
						<h1 className="paragraph-text-grey mx-auto" style={{color: '#837E7E'}}>
							Q: How many teams can I create in the “team” package?</h1>
            <h1 className="paragraph-text-grey mx-auto" style={{color: '#837E7E'}}>
							A: As many or as less as you want. But, only a max of 20 people can be signed up
              with your organization. Ex. 4 teams of 5 or 2 teams of 10</h1>   
						</Col>
            <Col lg={1}></Col>
          </Row>
          
          <Row style = {{paddingTop: '5%'}}>

            <Col lg={1}></Col>
						<Col>
						<h1 className="paragraph-text-grey mx-auto" style={{color: '#837E7E'}}>
							Q: What payment methods do you accept?</h1>
            <h1 className="paragraph-text-grey mx-auto" style={{color: '#837E7E'}}>
							A: filler answer till we find payment gateway</h1>   

						</Col>
            <Col lg={1}></Col>
          </Row>

          <Row style = {{paddingTop: '5%'}}>

            <Col lg={1}></Col>
						<Col>
						<h1 className="paragraph-text-grey mx-auto" style={{color: '#837E7E'}}>
							Q: When does the trial end and what happens at the end of it?</h1>
            <h1 className="paragraph-text-grey mx-auto" style={{color: '#837E7E'}}>
							A: The Trial ends after 7 days of usage. After your trial is over, your features will be locked and you will have to choose a plan (listed above) to continue.</h1>   
						</Col>
            <Col lg={1}></Col>
          </Row>

		  <Row style = {{paddingTop: '5%'}}>
            <Col lg={1}></Col>
						<Col>
						<h1 className="paragraph-text-grey mx-auto" style={{color: '#837E7E'}}>
							Q: Will my data be private and safe?</h1>
            <h1 className="paragraph-text-grey mx-auto" style={{color: '#837E7E'}}>
							A: Security is of the upmost important to Circal! We keep your and your teams’ data secure.</h1>   
						</Col>
            <Col lg={1}></Col>
          </Row>

		  <Row style = {{paddingTop: '5%'}}>
            <Col lg={1}></Col>
						<Col>
						<h1 className="paragraph-text-grey mx-auto" style={{color: '#837E7E'}}>
							Q: Can I cancel my account at any time? </h1>
            <h1 className="paragraph-text-grey mx-auto" style={{color: '#837E7E'}}>
							A: Yes you can cancel your account or payment plan at any time through the dashboard in account settings.</h1>   
						</Col>
            <Col lg={1}></Col>
          </Row>

		  <Row style = {{paddingTop: '5%'}}>
            <Col lg={1}></Col>
						<Col>
						<h1 className="paragraph-text-grey mx-auto" style={{color: '#837E7E'}}>
							Q: When does the trial end and what happens at the end of it?</h1>
            <h1 className="paragraph-text-grey mx-auto" style={{color: '#837E7E'}}>
							A: The trial ends after 1 month, and after you can choose to continue'
              using Circal and use the paid version or stop using it.</h1>   
						</Col>
            <Col lg={1}></Col>
          </Row>

		  <Container style = {{paddingTop:'4rem'}}>
              <GrayFooter/>
          </Container>
        </Container>
	</Container>
  	</Container>
  	);
  }
}

export default Pricing;