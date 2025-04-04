import FinanceChart from '@/components/FinanceChart/FinanceChart';
import AttendanceChart from '@/components/AttendanceChart/AttendanceChart';
import CountChart from '@/components/CountChart/CountChart';
import UserCard from '@/components/UserCard/UserCard';
import './admin.scss';

const AdminPage = () => {
    return (
        <div className='admin'>
            {/* LEFT */}
            <div className="admin__left">
                {/* USER CARDS */}
                <div className="admin__left-userCards">
                    <UserCard type='student' />
                    <UserCard type='teacher' />
                    <UserCard type='parent' />
                    <UserCard type='staff' />
                </div>
                {/* MIDDLE CHARTS */}
                <div className="admin__left-middleCharts">
                    {/* COUNT CHART */}
                    <div className="admin__left-countChart">
                        <CountChart />
                    </div>
                    {/* ATTENDANCE CHART */}
                    <div className="admin__left-attendanceChart">
                        <AttendanceChart />
                    </div>
                </div>
                {/* BOTTOM CHARTS */}
                <div className="admin__left-bottomCharts">
                    <FinanceChart />
                </div>
            </div>
            {/* RIGHT */}
            <div className="admin__right">r</div>
        </div>
    )
}

export default AdminPage;