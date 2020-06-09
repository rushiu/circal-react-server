import React from 'react';
import {Container, Navbar} from 'react-bootstrap';

export class SignInNav extends React.Component {
    render() {
        return(
            <Navbar variant = "light" sticky = "top" style = {{width: '50%', left: '0'}}>
            <a href = "/">
            <img
                alt=""
                src="./assests/GradientLogo.svg"
                className="d-inline-block align-top"
                width="300"
                height="60"
            />
            </a>
            </Navbar>
        );
    }
}
export default SignInNav;