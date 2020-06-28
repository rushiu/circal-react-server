import React from 'react';
import ".././App.css";
import {Card, CardGroup, Container, Row, Col, Figure} from 'react-bootstrap';


export class ProblemStats extends React.Component {
    render() {
        return(
            <Container style = {{width: '80%', paddingTop: '5%'}}className = "font text-center" fluid>
                <Row style = {{ display: 'flex', flex: 'nowrap', justifyContent: 'center', color: 'silver'}}>
                    <Figure style = {{width: '33.33%'}}>
                        <h1 className = "stats">11</h1>
                        <Figure.Caption><h6>million meetings in <br></br> America everyday.</h6></Figure.Caption>
                    </Figure>
                    <Figure style = {{width: '33.33%'}}>
                        <h1 className = "stats">$399.1</h1>
                        <Figure.Caption><h6>billion loss in USA for poorly <br></br> organized meetings.</h6></Figure.Caption>
                    </Figure>
                    <Figure style = {{width: '33.33%'}}>
                        <h1 className = "stats">4.8</h1>
                        <Figure.Caption><h6>hours/week per professional <br></br> spent setting up meetings</h6></Figure.Caption>
                    </Figure>
                </Row>      
            </Container>

        );
    }
}

export default ProblemStats;