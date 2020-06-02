import React, {useState}from 'react';
import '.././App.css';
import ModernDatepicker from 'react-modern-datepicker';
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import {DatePicker, Calendar} from 'react-modern-calendar-datepicker';
import {Jumbotron, Container} from 'react-bootstrap';

const CalendarPicker = () => {
	const [selectedDay, setSelectedDay] = useState(null);
	return (
	  <Calendar className = "font"
		value={selectedDay}
		onChange={setSelectedDay}
		colorPrimary="#9c88ff"
		inputPlaceholder="Select a day"
	  />
	);
  };
  
  export default CalendarPicker;