import React from 'react';
import ".././App.css";
import {Card, CardGroup, Container, Row, Col, Figure, Image} from 'react-bootstrap';


export class FourFeatures extends React.Component {
    render() {
        return(
            <Container style = {{width: '80%', paddingTop: '5%'}}className = "font text-center" fluid>
                <Row style = {{ display: 'flex', flex: 'nowrap', justifyContent: 'center', color: 'silver'}}>
                    <Figure style = {{width: '25%'}}>
                        <Image src="./assests/SyncIcon.svg"/>
                        <Figure.Caption><h4>2-Way Sync</h4></Figure.Caption>
                    </Figure>
                    <Figure style = {{width: '25%'}}>
                        <Image src="./assests/AgendaIcon.svg"/>
                        <Figure.Caption><h4>Meeting Agenda</h4></Figure.Caption>
                    </Figure>
                    <Figure style = {{width: '25%'}}>
                        <Image src="./assests/StatIcon.svg"/>
                        <Figure.Caption><h4>Meeting Statistics</h4></Figure.Caption>
                    </Figure>
                    <Figure style = {{width: '25%'}}>
                    <Image src="./assests/ScheduleIcon.svg"/>
                        <Figure.Caption><h4>Smart Meeting<br></br>Scheduling</h4></Figure.Caption>
                    </Figure>
                </Row>      
            </Container>

        );
    }
}

export default FourFeatures;