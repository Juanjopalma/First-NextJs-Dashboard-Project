import EventCalendar from '@/components/EventCalendar/EventCalendar';
import Announcements from '@/components/Announcements/Announcements';
import BigCalendar from '@/components/BigCalendar/BigCalendar';
import './student.scss';


const StudentPage = () => {
    return (
        <div className='student'>
            {/* LEFT */}
            <div className="student__left">
                <div className="student__left-schedule">
                    <h1>Schedule (4A)</h1>
                    <BigCalendar />
                </div>
            </div>
            {/* RIGHT */}
            <div className="student__right">
                <EventCalendar />
                <Announcements />
            </div>
        </div>
    )
}

export default StudentPage;