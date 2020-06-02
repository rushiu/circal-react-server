import React from 'react';
import ".././App.css";
import {Card, CardGroup, Container, Row, Col, Figure} from 'react-bootstrap';


export class ProblemStats extends React.Component {
    render() {
        return(
            <Container style = {{width: '80%', paddingTop: '5%'}}className = "font text-center" fluid>
                <Row style = {{ display: 'flex', flex: 'nowrap', justifyContent: 'center', color: 'gray'}}>
                    <Figure style = {{width: '33.33%'}}>
                        <h1 style = {{fontSize: '5rem'}}>11</h1>
                        <Figure.Caption>million meetings in America everyday.</Figure.Caption>
                    </Figure>
                    <Figure style = {{width: '33.33%'}}>
                        <h1 style = {{fontSize: '5rem'}}>$399.1</h1>
                        <Figure.Caption>billion loss in USA for poorly <br></br> organized meetings.</Figure.Caption>
                    </Figure>
                    <Figure style = {{width: '33.33%'}}>
                        <h1 style = {{fontSize: '5rem'}}>4.8</h1>
                        <Figure.Caption>hours/week per professional <br></br> spent setting up meetings</Figure.Caption>
                    </Figure>
                </Row>      
            </Container>

        );
    }
}

export default ProblemStats;