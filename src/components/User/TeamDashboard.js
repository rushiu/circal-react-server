import React from 'react';
import SideNavigation from './SideNavigation.js';
import TopNav from './TopNav.js';
import {Container} from 'react-bootstrap';

export default class TeamDashboard extends React.Component {
    render() {
        return(
            <Container className = "dashboard-bg font" fluid>
                <TopNav pageActive = "Team"/>
                <SideNavigation activeURL = "/my_team"/>
            </Container>
        );
    }
}