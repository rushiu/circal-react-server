import React from 'react';
import {Container, Navbar} from 'react-bootstrap';

export class SimpleNav extends React.Component {
    render() {
        return(
            <Navbar variant = "dark" sticky = "top" style = {{width: '50%', left: '0'}} >
            <img
                alt=""
                src="/assests/LogoImage.png"
                className="d-inline-block align-top"
                width="70"
                height="50"
            />
            <Navbar.Brand className = "font" variant = "dark" exact to = "/" href="/" style = {{fontSize: '2rem', paddingTop: '0.5rem'}}><h1>circal</h1></Navbar.Brand>
            </Navbar>
        );
    }
}
export default SimpleNav;