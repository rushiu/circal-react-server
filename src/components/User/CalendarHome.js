import React from 'react';
import {Container, ResponsiveEmbed} from 'react-bootstrap';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from '@fullcalendar/timegrid';
import '@fortawesome/fontawesome-free/css/all.css';

export default class CalendarHome extends React.Component {
    render() {
        return(
            <Container className = "w-75 ml-0 mx-auto">
                    <FullCalendar
                    style = {{zIndex: '3', display: 'inline-block'}}
                    plugins={[ timeGridPlugin, dayGridPlugin]}
                    contentHeight = '630px'
                    headerToolbar = {{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'timeGridWeek,timeGridDay'
                    }}
                    titleFormat = {{ year: 'numeric', month: 'short', day: 'numeric' }}
                    nowIndicator = {true}
                    initialView="timeGridWeek"
                    dateClick = {this.handleDateClick}
                    />
            </Container>
        );
    }
}
