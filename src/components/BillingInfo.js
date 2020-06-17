import React from 'react'
import {Container, Button, Form, Row, Col, ProgressBar, Image} from 'react-bootstrap'

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
            <Container className = "w-100 font" fluid>
                <Row className = "w-25 pt-5 pl-5 mx-auto">
                    <Image src="./assests/GradientLogo.svg" className = "mx-auto pl-3" />
                </Row>
                <Row className = "w-50 pt-5 mx-auto">
                    <Col>
                        <ProgressBar>
                        <ProgressBar label animated now={25} variant = "primary"></ProgressBar>
                        <ProgressBar label animated now={25} variant = "warning"></ProgressBar>
                        </ProgressBar>
                    </Col>
                </Row>
                <Row className = "w-50 mx-auto pt-5">
                    <h1 className = "mx-auto grey-header">Billing Information</h1>
                </Row>
                <Row className = "w-75 mx-auto pt-5">
                    <Col>
                    <Button style = {{fontWeight: 'bold'}} size = "lg" variant = "outline-primary" 
                    className = "mx-auto btn-rounded w-25" onClick = {this.back}>previous</Button>
                    </Col>
                    <Col>
                    <Button style = {{fontWeight: 'bold'}} size = "lg" variant = "outline-primary" 
                    className = "mx-auto btn-rounded w-25" onClick = {this.continue}>next</Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default BillingInfo;