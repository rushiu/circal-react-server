import React from 'react';
import SideNavigation from './SideNavigation.js';
import TopNav from './TopNav.js';
import {Container} from 'react-bootstrap';

export default class AgendaDashboard extends React.Component {
    render() {
        return(
            <Container className = "dashboard-bg font" fluid>
                <TopNav pageActive = "Agendas"/>
                <SideNavigation style = {{position: 'fixed'}} activeURL = "/my_agendas"/>
            </Container>
        );
    }
}

