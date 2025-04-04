"use client";
import dynamic from 'next/dynamic';
import { useState } from 'react';
import './eventCalendar.scss';
import "react-calendar/dist/Calendar.css";
import Image from 'next/image';

const Calendar = dynamic(() => import('react-calendar'), { ssr: false });

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece]; 

// TEMPORARY
const events = [
    {
      id: 1,
      title: "Lorem ipsum dolor",
      time: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor",
      time: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor",
      time: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];


const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className='eventCalendar'>
        <Calendar onChange={onChange} value={value} />
        <div className="eventCalendar__title">
            <h1>Events</h1>
            <Image src="/moreDark.png" alt='' width={20} height={20} />
        </div>
        <div className="eventCalendar__events">
            {events.map(event => (
                <div key={event.id} className="eventCalendar__events-box">
                    <div className="eventCalendar__events-title">
                        <h1>{event.title}</h1>
                        <span>{event.time}</span>
                    </div>
                    <p>{event.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default EventCalendar