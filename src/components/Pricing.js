import React from 'react';
import {Nav, Navbar, Image, Button, ButtonToolbar} from 'react-bootstrap';
import { Container, Row, Col, CardGroup, Card} from 'react-bootstrap';
import {Jumbotron} from 'react-bootstrap';

const HeroImageContainer = {
    position: 'absolute',
    top:0,
    left:0,
    zIndex:0,
    width:'100%'
};

export class Pricing extends React.Component {
    render() {
        return (
            <Container>
                <Image src = "./assests/OrangeGradient.svg" style = {HeroImageContainer}/>
            </Container>
        );
    }
}

export default Pricing;