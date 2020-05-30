import React from 'react';
import {Nav, Navbar, Image, Button, ButtonToolbar} from 'react-bootstrap';
import { Container, Row, Col, CardGroup, Card} from 'react-bootstrap';
import {Jumbotron} from 'react-bootstrap';
import {NavigationBar} from './NavigationBar.js';


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
            <Container>
                <NavigationBar />
                <Image src = "./assests/OrangeGradient.svg" style = {HeroImageContainer}/>
                <Container style = {OtherStyle} className = "font">

                </Container>
            </Container>
        );
    }
}

export default Pricing;