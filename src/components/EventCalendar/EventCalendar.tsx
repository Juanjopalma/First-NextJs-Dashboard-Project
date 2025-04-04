"use client";
import Calendar from 'react-calendar';
import { useState } from 'react';
import './eventCalendar.scss';
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece]; 


const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className='eventCalendar'><Calendar onChange={onChange} value={value} /></div>
  )
}

export default EventCalendar