import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import SignInForm from './SignInForm';
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

const BottomImageContainer = {
    position: 'absolute',
    left: 0,
    zIndex:0,
    'padding-top': '60rem',
    width:'100%'
};

export class SignIn extends React.Component {
    render() {
      return (
          <Container fluid>
            <Image src = "./assests/PinkGradient.svg" style = {HeroImageContainer}/>
                <Container style = {OtherStyle} className = "font">
                    <Row>
                        <Col lg = {7}></Col>
                        <Col lg = "mx-auto">
                            <h1 className="title justify-content-md-center">Sign In</h1>
                        </Col>
                        <Col lg = {1}></Col>
                    </Row>
                    <Row>
                        <Col className ="col-lg-11 col-md-6 col-sm-6 col-xs-6 offset-5 float-md-center" style = {{'padding-top': '8rem'}}>
                            <SignInForm/>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Image src="./assests/AboutBottomLogo.svg" style={BottomImageContainer}/>
                </Container>

          </Container>
      );
    }
}
export default SignIn;