import React from 'react'
import {Container, Nav, Navbar, Image} from 'react-bootstrap'

const NavBarStyle = {
    position: 'absolute',
    left: 0,
    right: 0,
    marginTop: '1rem',
    minWidth: '100vw',
    width: '100vw',
    zIndex:3,
    color: '#B1B6C6'
};

export class TopNav extends React.Component {
    render() {
        return(
                <Navbar variant = "dark" expand = "lg" className = "title-nav shadow-sm bg-light w-100">
                                <div className = "logo-bg">
                                <img
                                alt=""
                                src="/assests/LogoImage.png"
                                className="d-inline-block align-top mt-3 ml-4"
                                width="70"
                                height="50"
                                style = {{zIndex: '3'}}
                                />
                                <Navbar.Brand className = "font" variant = "dark" className = "w-25 mt-2" style = {{zIndex: '3'}}><h1>circal</h1></Navbar.Brand>
                                </div>
                        <h4 className = "col-lg-1 col-md-2 col-xs-1 mx-auto my-auto w-50">Home</h4>
                </Navbar>
        );
    }
}

export default TopNav;