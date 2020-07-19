import React from 'react'
import {Container, Button, Form, Row, Col, ProgressBar, Image, CardDeck, Card, ToggleButtonGroup, ResponsiveEmbed, Pagination} from 'react-bootstrap'
import '../../css/signup.css'

const WhiteBackground = {
    minHeight: '100vh',
    minWidth: '100vw',
    width: '100vw',
    backgroundColor: 'white'
}
export class BillingInfo extends React.Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    render() {
        const {values, inputChange} = this.props;
        return(
            <Container className = "sign-up-full-bg animate__animated animate__fadeInUp font" fluid>
                <Container className = "min-vw-100 pl-0 ml-0" style = {WhiteBackground} fluid>
                 <Row className = "justify-content-center min-vw-100 ml-0  pl-0">
                    <img
                    alt=""
                    src="/assests/GradientLogo.svg"
                    className="align-top center pl-5 ml-5"
                    width="400"
                    height="200"
                    />
                </Row>
                <Row className = "grey-header pb-1">
                    <h2 className = "mx-auto text-center w-25">Pricing Plan</h2>
                </Row>
                <Row className = "grey-header pb-3">
                    <p className = "mx-auto text-center w-25">Choose a plan that fits your needs.</p>
                </Row>
                <Row className = "w-100">
                    <CardDeck className = "mx-auto w-75">
                        <Row className = "w-100 h-25">
                            <Col lg={4} md={12} sm = {12} xs={12} className = "pt-2">
                                <Card className = "min-vw-25 h-100 shadow" style = {{ border: 'hidden'}}>
                                    <Button type = "radio" variant = "transparent" style = {{height: '100%'}}>
                                    <Card.Body className = "mx-auto mt-n3 grey-header w-75">
                                        <Row>
                                            <ResponsiveEmbed aspectRatio = "16by9">
                                                <Image className = "mx-auto" src = "./assests/innovation_.svg"></Image>
                                            </ResponsiveEmbed>
                                        </Row>
                                        <Row className = "pt-4">
                                            <h6 className = "mx-auto text-warning">STUDENT</h6>
                                        </Row>
                                        <Row className = "pt-1">
                                            <h5 className = "mx-auto">Free</h5>
                                        </Row>
                                        <Row>
                                            <p>Made for college and high school students! No billing info required.</p>
                                        </Row>
                                    </Card.Body>
                                   
                                    </Button>
                                </Card>
                            </Col>

                            <Col lg={4} md={12} sm = {12} xs={12} className = "pt-2">
                                <Card className = "min-vw-25 h-100 shadow" style = {{ border: 'hidden'}}>
                                    <Button type = "radio" variant = "transparent" style = {{height: '100%'}}>
                                    <Card.Body className = "mx-auto mt-n3 grey-header w-75">
                                        <Row>
                                            <ResponsiveEmbed aspectRatio = "16by9">
                                                <Image className = "mx-auto" src = "./assests/team_work.svg"></Image>
                                            </ResponsiveEmbed>
                                        </Row>
                                        <Row className = "pt-4">
                                            <h6 className = "mx-auto text-primary">TEAMS</h6>
                                        </Row>
                                        <Row className = "pt-1">
                                            <h5 className = "mx-auto">$8/user/month</h5>
                                        </Row>
                                        <Row>
                                            <p>Sign up your team with Circal. Billing information required</p>
                                        </Row>
                                    </Card.Body>
                                    </Button>
                                </Card>
                            </Col>
                                

                            <Col lg={4} md={12} sm = {12} xs={12} className = "pt-2">
                                <Card className = "min-vw-25 h-100 shadow" style = {{ border: 'hidden'}}>
                                    <Button type = "radio" variant = "transparent" style = {{height: '100%'}}>
                                    <Card.Body className = "mx-auto mt-n3 grey-header w-75">
                                        <Row>
                                            <ResponsiveEmbed aspectRatio = "16by9">
                                                <Image className = "mx-auto" src = "./assests/achievement_.svg"></Image>
                                            </ResponsiveEmbed>
                                        </Row>
                                        <Row className = "pt-4">
                                            <h6 className = "mx-auto text-primary">ENTERPRISE</h6>
                                        </Row>
                                        <Row className = "pt-1">
                                            <h5 className = "mx-auto">contact us</h5>
                                        </Row>
                                        <Row>
                                            <p>Get your entire company on Circal today. Billing information required</p>
                                        </Row>
                                    </Card.Body>
                                    </Button>
                                </Card>
                            </Col>
                        </Row>
                    </CardDeck>
                    
                </Row>
                <Row className = "pt-5">
                    <Col className = "w-25 px-0">
                        <Pagination>
                            <Pagination.Prev className = "font-weight-bold mx-auto" onClick = {this.back}>Previous</Pagination.Prev>
                        </Pagination>
                    </Col>
                    <Col className = "w-25 px-0">
                        <Pagination>
                            <Pagination.Next className = "font-weight-bold mx-auto" onClick = {this.continue}>Next</Pagination.Next>
                        </Pagination>
                    </Col>
                </Row>
                </Container>
            </Container>
        );
    }
}

export default BillingInfo;