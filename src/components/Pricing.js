import React from 'react';
import {Nav, Navbar, Image, Button, ButtonToolbar} from 'react-bootstrap';
import { Container, Row, Col, CardGroup, Card} from 'react-bootstrap';
import {Jumbotron} from 'react-bootstrap';
import {NavigationBar} from './NavigationBar.js';
import './../css/Pricing.css';
import './../App.css';
import {GrayFooter} from './GrayFooter';
import Accordion from 'react-bootstrap/Accordion'



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
  constructor() {
    super()
    this.state = {
      arrow1: 'ʌ',
      arrowState1: '',
      arrow2: 'ʌ',
      arrowState2: '',
      arrow3: 'ʌ',
      arrowState3: '',
      arrow4: 'ʌ',
      arrowState4: '',
      arrow5: 'ʌ',
      arrowState5: ''
    }
  }

  accordionArrowOnChange1(e) {
      console.log ('1st acc')
      const opt = this.state.arrowState1
      if (opt.length == 0) {
        this.setState({arrow1: 'v'})
        this.setState({arrowState1: 'on'})
      } else {
        this.setState({arrow1: 'ʌ'})
        this.setState({arrowState1: ''})
      }
      this.setState({arrow2: 'ʌ'})
      this.setState({arrowState2: ''})

      this.setState({arrow3: 'ʌ'})
      this.setState({arrowState3: ''})

      this.setState({arrow4: 'ʌ'})
      this.setState({arrowState4: ''})

      this.setState({arrow5: 'ʌ'})
      this.setState({arrowState5: ''})
  }

  accordionArrowOnChange2(e) {
      console.log ('2 acc')
      const opt = this.state.arrowState2
      if (opt.length == 0) {
        this.setState({arrow2: 'v'})
        this.setState({arrowState2: 'on'})
      } else {
        this.setState({arrow2: 'ʌ'})
        this.setState({arrowState2: ''})
      }
      this.setState({arrow1: 'ʌ'})
      this.setState({arrowState1: ''})

      this.setState({arrow3: 'ʌ'})
      this.setState({arrowState3: ''})

      this.setState({arrow4: 'ʌ'})
      this.setState({arrowState4: ''})

      this.setState({arrow5: 'ʌ'})
      this.setState({arrowState5: ''})
  }

  accordionArrowOnChange3(e) {
      console.log ('3 acc')
      const opt = this.state.arrowState3
      if (opt.length == 0) {
        this.setState({arrow3: 'v'})
        this.setState({arrowState3: 'on'})
      } else {
        this.setState({arrow3: 'ʌ'})
        this.setState({arrowState3: ''})
      }
      this.setState({arrow1: 'ʌ'})
      this.setState({arrowState1: ''})

      this.setState({arrow2: 'ʌ'})
      this.setState({arrowState2: ''})

      this.setState({arrow4: 'ʌ'})
      this.setState({arrowState4: ''})

      this.setState({arrow5: 'ʌ'})
      this.setState({arrowState5: ''})
  }

  accordionArrowOnChange4(e) {
      console.log ('4 acc')
      const opt = this.state.arrowState4
      if (opt.length == 0) {
        this.setState({arrow4: 'v'})
        this.setState({arrowState4: 'on'})
      } else {
        this.setState({arrow4: 'ʌ'})
        this.setState({arrowState4: ''})
      }

      this.setState({arrow1: 'ʌ'})
      this.setState({arrowState1: ''})

      this.setState({arrow2: 'ʌ'})
      this.setState({arrowState2: ''})

      this.setState({arrow3: 'ʌ'})
      this.setState({arrowState3: ''})

      this.setState({arrow5: 'ʌ'})
      this.setState({arrowState5: ''})
  }

  accordionArrowOnChange5(e) {
      console.log ('5 acc')
      const opt = this.state.arrowState5
      if (opt.length == 0) {
        this.setState({arrow5: 'v'})
        this.setState({arrowState5: 'on'})
      } else {
        this.setState({arrow5: 'ʌ'})
        this.setState({arrowState5: ''})
      }

      this.setState({arrow1: 'ʌ'})
      this.setState({arrowState1: ''})

      this.setState({arrow2: 'ʌ'})
      this.setState({arrowState2: ''})

      this.setState({arrow3: 'ʌ'})
      this.setState({arrowState3: ''})

      this.setState({arrow4: 'ʌ'})
      this.setState({arrowState4: ''})  
  }

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
					<Row style={{paddingBottom: '35%'}}>
            <p className="paragraph-header mx-auto">A plan for everyone.</p>
          </Row>

          <Row>
          <Col style={{paddingLeft: '5%'}}>
            	<Card className = "rounded pricing card" >
                <Card.Header className = "white-title-2 mx-auto" style = {{background: '#FCAD55', width: '100%'}}>STUDENT</Card.Header>
                <Card.Body>
                  <blockquote className="blockquote mb-0">

										<Row>
											<Col>
												<p className="large-white-title mx-auto" style = {{color:'#B0B4C3'}}>
													FREE
                    							</p>
											</Col>
										</Row>

										<Row>
											<p className="paragraph-text-grey mx-auto" style = {{color:'#B0B4C3'}}>max 5 users </p>
                    </Row>
										<Row>
											<p className="paragraph-text-grey mx-auto" style = {{color:'#B0B4C3'}}>meeting scheduling</p>
										</Row>
										<Row>
											<p className="paragraph-text-grey mx-auto" style = {{color:'#B0B4C3'}}>sync with 1 external calendar</p>
										</Row>
                    <Row style={{marginBottom: '13px'}}>
											<p className="paragraph-text-grey mx-auto" style = {{color:'#B0B4C3'}}>meeting agenda + notes</p>
										</Row>
                    

										<Row className = "center" style={{paddingTop:'30px'}}>
              								<Button variant="warning" style = {{width: '40%'}, {backgroundColor: '#FCAD55'}} size = "lg" className = "btn-rounded" href = "/signin">sign up</Button>
                  	</Row>
                  </blockquote>
                </Card.Body>
              </Card>
						</Col>


			      <Col>
            	<Card className = "rounded pricing card">
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
											<p className="paragraph-text-grey mx-auto" style = {{color:'#B0B4C3'}}>max 20 users </p>
										</Row>
										<Row>
											<p className="paragraph-text-grey mx-auto" style = {{color:'#B0B4C3'}}>meeting scheduling</p>
										</Row>
										<Row style={{marginBottom: '10px'}}>
											<p className="paragraph-text-grey mx-auto" style = {{color:'#B0B4C3'}}>pre-meeting agenda</p>
										</Row>

                   

										<Row className = "center">
              								<Button variant="warning" style = {{width: '40%'}, {backgroundColor: '#FCAD55'}} size = "lg" className = "btn-rounded" href = "/signin">free trial</Button>
                  	</Row>
                  </blockquote>
                </Card.Body>
              </Card>
						</Col>

						<Col style={{paddingRight: '5%'}}>
            	<Card className="rounded pricing card" style = {{background: '#FCAD55'}} >
                <Card.Body >
									<Card.Title>
										<p className = "white-title-2 mx-auto" style = {{background: '#FCAD55', width: '100%'}}>ENTERPRISE</p>
									</Card.Title>
                  <blockquote className="blockquote mb-0">

				  	        <Row>
						          <p className="paragraph-text-2 mx-auto" style = {{color:'#FCAD55'}}>___________</p>
					          </Row>
					          <Row>
						          <p className="paragraph-text-2 mx-auto">Unlimited users</p>
										</Row>
										<Row>
											<p className="paragraph-text-2 mx-auto">meeting scheduling</p>
										</Row>
										<Row>
											<p className="paragraph-text-2 mx-auto">pre meeting agenda</p>
										</Row>
										<Row style={{marginBottom: '55px'}}>
											<p className="paragraph-text-2 mx-auto">post meeting feedback</p>
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

					<Accordion className='faqs' style={{paddingTop:'5%'}}>
            <Card >
              <Accordion.Toggle as={Card.Header} eventKey="0" className='faqsTitle' onClick={this.accordionArrowOnChange1.bind(this)} >
                <span style = {{fontSize: '20px'}, {float: 'right'}}>{this.state.arrow1} </span>How many teams can I create in the 'team' package?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  As many or as less as you want. But, only a max of 20 people can be signed up
                      with your organization. Ex. 4 teams of 5 or 2 teams of 10
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1" className='faqsTitle' onClick={this.accordionArrowOnChange2.bind(this)} value='00'>
              <span style = {{fontSize: '20px'}, {float: 'right'}}>{this.state.arrow2} </span> What payment methods do you accept?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  Filler answer till we find payment gateway
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2" className='faqsTitle' onClick={this.accordionArrowOnChange3.bind(this)} value='000'>
              <span style = {{fontSize: '20px'}, {float: 'right'}}>{this.state.arrow3} </span> When does the trial end and what happens at the end of it?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  The Trial ends after 7 days of usage. After your trial is over, your features will be locked and you will have to choose a plan (listed above) to continue.
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3" className='faqsTitle' onClick={this.accordionArrowOnChange4.bind(this)} value='0000'>
              <span style = {{fontSize: '20px'}, {float: 'right'}}>{this.state.arrow4} </span> Will my data be private and safe?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  Security is of the upmost important to Circal! We keep your and your teams’ data secure.   
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="4" className='faqsTitle' onClick={this.accordionArrowOnChange5.bind(this)} value='00000'>
              <span style = {{fontSize: '20px'}, {float: 'right'}}>{this.state.arrow5} </span> Can I cancel my account at any time?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
                  Yes you can cancel your account or payment plan at any time through the dashboard in account settings. 
                </Card.Body>
              </Accordion.Collapse>
            </Card>

          </Accordion>
					

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