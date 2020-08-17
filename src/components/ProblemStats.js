import React from 'react';
import ".././App.css";
import {Card, CardGroup, Container, Row, Col, Figure} from 'react-bootstrap';


export class ProblemStats extends React.Component {
    render() {
        return(
            <Container style = {{width: '80%', paddingTop: '5%'}}className = "font text-center" fluid>
                <Row style = {{ display: 'flex', flex: 'nowrap', justifyContent: 'center', color: 'silver'}}>
                    <Col lg = {3} md={true} sm = {12} className = "pr-5">
                        <Figure>
                            <h1 className = "stats">11</h1>
                            <Figure.Caption><h6>million meetings in <br></br> America everyday.</h6></Figure.Caption>
                        </Figure>
                    </Col>
                    <Col lg = {3} md={true} sm = {12} className = "pl-5 pr-md-5 mr-md-5">
                    <Figure>
                        <h1 className = "stats">$399.1</h1>
                        <Figure.Caption><h6>billion loss in USA for poorly <br></br> organized meetings.</h6></Figure.Caption>
                    </Figure>
                    </Col>
                    <Col lg = {3} md={true} sm = {12} >
                    <Figure>
                        <h1 className = "stats">4.8</h1>
                        <Figure.Caption><h6>hours/week per professional <br></br> spent setting up meetings</h6></Figure.Caption>
                    </Figure>
                    </Col>
                </Row>      
            </Container>

        );
    }
}

export default ProblemStats;