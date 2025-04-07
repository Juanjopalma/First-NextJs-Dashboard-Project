import Announcements from '@/components/Announcements/Announcements';
import BigCalendar from '@/components/BigCalendar/BigCalendar';
import './parent.scss';


const ParentPage = () => {
    return (
        <div className='parent'>
            {/* LEFT */}
            <div className="parent__left">
                <div className="parent__left-schedule">
                    <h1>Schedule (John Doe)</h1>
                    <BigCalendar />
                </div>
            </div>
            {/* RIGHT */}
            <div className="parent__right">
                <Announcements />
            </div>
        </div>
    )
}

export default ParentPage;