import React, {useState}from 'react';
import {Container} from 'react-bootstrap';
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import {Calendar} from 'react-modern-calendar-datepicker';

const CalendarPicker = () => {
	const [selectedDay, setSelectedDay] = useState(null);
	console.log(getDay())
	function getDay() {
		if (selectedDay === null) {
			return '';
		} else {
			return selectedDay.month + '/' + selectedDay.day;
		}
	}
	return (
		<Container>
		<Calendar className = "font"
			value={selectedDay}
			onChange={setSelectedDay}
			colorPrimary="#9c88ff"
			inputPlaceholder="Select a day"
		/>
		<p>Selected day: {getDay()}</p>
	  </Container>
	);
  };
  
  export default CalendarPicker;