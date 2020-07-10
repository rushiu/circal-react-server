import React from 'react'
import {Container, Button, Form, Row, Col, ProgressBar, Image, Pagination} from 'react-bootstrap'

export class PersonalInfo extends React.Component {
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
                        <ProgressBar label animated now={25} variant = "primary" className = "bg-light outline-light"></ProgressBar>
                    </Col>
                </Row>
                <Row className = "w-50 mx-auto pt-5">
                    <h1 className = "mx-auto grey-header">Personal Information</h1>
                </Row>
                <Row className = "w-50 pt-4 mx-auto">
                    <Form className = "w-75 mx-auto">
                        <Form.Row>
                            <Form.Control type = "role" placeholder = "Role" onChange = {inputChange('role')} value = {values.role}/>
                        </Form.Row>
                        <Form.Row className = "pt-3">
                            <Form.Control type = "team" placeholder = "Team options"/>
                        </Form.Row>
                        <Form.Row className = "pt-3">
                            <Form.Control type = "password" placeholder = "Password" onChange = {inputChange('password')} value = {values.password}/>
                        </Form.Row>
                        <Form.Row className = "pt-3">
                            <Form.Control type = "confirmPassword" placeholder = "Confirm Password"/>
                        </Form.Row>
                    </Form>
                </Row>
                <Row className = "w-75 pt-5 mx-auto">
                    <Col className = "w-25">
                        <Pagination>
                            <Pagination.Prev className = "font-weight-bold mx-auto" onClick = {this.back}>Previous</Pagination.Prev>
                        </Pagination>
                    </Col>
                    <Col className = "w-25">
                        <Pagination>
                            <Pagination.Next className = "font-weight-bold mx-auto" onClick = {this.continue}>Next</Pagination.Next>
                        </Pagination>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default PersonalInfo;