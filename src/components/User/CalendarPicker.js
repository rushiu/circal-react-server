import React, {useState}from 'react';
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import {Calendar} from 'react-modern-calendar-datepicker';

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