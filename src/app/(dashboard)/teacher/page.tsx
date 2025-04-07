import Announcements from '@/components/Announcements/Announcements';
import BigCalendar from '@/components/BigCalendar/BigCalendar';
import './teacher.scss';


const TeacherPage = () => {
    return (
        <div className='teacher'>
            {/* LEFT */}
            <div className="teacher__left">
                <div className="teacher__left-schedule">
                    <h1>Schedule</h1>
                    <BigCalendar />
                </div>
            </div>
            {/* RIGHT */}
            <div className="teacher__right">
                <Announcements />
            </div>
        </div>
    )
}

export default TeacherPage;