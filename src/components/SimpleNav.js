import React from 'react';
import {Container, Navbar} from 'react-bootstrap';

export class SimpleNav extends React.Component {
    render() {
        return(
            <Navbar variant = "dark" sticky = "top" style = {{width: '50%', left: '0'}}>
            <img
                alt=""
                src="/assests/LogoImage.png"
                className="d-inline-block align-top"
                width="50"
                height="35"
            />
            <Navbar.Brand variant = "dark" exact to = "/" href="/" style = {{fontSize: '2rem'}}>circal</Navbar.Brand>
            </Navbar>
        );
    }
}
export default SimpleNav;