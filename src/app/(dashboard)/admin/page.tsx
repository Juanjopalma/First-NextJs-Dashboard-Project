import UserCard from '@/components/UserCard/UserCard';
import './admin.scss';

const AdminPage = () => {
    return (
        <div className='admin'>
            <div className="admin__left">
                {/* USER CARDS */}
                <div className="admin__left-userCards">
                    <UserCard type='student' />
                    <UserCard type='teacher' />
                    <UserCard type='parent' />
                    <UserCard type='staff' />
                </div>
            </div>
            <div className="admin__right">r</div>
        </div>
    )
}

export default AdminPage;