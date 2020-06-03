import React from 'react';
import {Container, Navbar} from 'react-bootstrap';

export class SignInNav extends React.Component {
    render() {
        return(
            <Navbar variant = "light" sticky = "top" style = {{width: '50%', left: '0'}}>
            <img
                alt=""
                src="/assests/BlackLogo.png"
                className="d-inline-block align-top"
                width="35"
                height="35"
            />
            <Navbar.Brand variant = "light" exact to = "/" href="/" style = {{fontSize: '2rem'}}>circal</Navbar.Brand>
            </Navbar>
        );
    }
}
export default SignInNav;