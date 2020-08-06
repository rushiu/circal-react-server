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
            <Container className = "w-75 ml-0 pl-0">
                    <FullCalendar
                    style = {{zIndex: '3', display: 'inline-block'}}
                    plugins={[ timeGridPlugin, dayGridPlugin]}
                    contentHeight = '630px'
                    businessHours = {true}
                    headerToolbar = {{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'timeGridWeek,timeGridDay'
                    }}
                    nowIndicator = {true}
                    initialView="timeGridDay"
                    dateClick = {this.handleDateClick}
                    />
            </Container>
        );
    }
}
