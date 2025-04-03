import Image from 'next/image';
import './userCard.scss';

const UserCard = ({ type }: { type: string }) => {
    return (
        <div className="userCard">
            <div className="userCard__title">
                <span>2024/25</span>
                <Image src="/more.png" alt='' width={20} height={20} />
            </div>
            <h1>1,234</h1>
            <h2>{type}s</h2>
        </div>
    )
}

export default UserCard;