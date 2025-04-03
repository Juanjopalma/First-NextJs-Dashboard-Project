import Image from 'next/image';
import './navbar.scss';

const Navbar = () => {
    return (
        <div className='navbar'>
            {/* SEARCH BAR */}
            <div className="navbar__searchBar">
                <Image src="/search.png" alt='' width={14} height={14} />
                <input type="text" placeholder='Search...' />
            </div>
            {/* ICONS AND USER */}
            <div className="navbar__iconsAndUser">
                <div className='navbar__iconsAndUser-icons'>
                    <Image src="/message.png" alt='' width={20} height={20} />
                </div>
                <div className='navbar__iconsAndUser-icons' style={{ position: 'relative'}}>
                    <Image src="/announcement.png" alt='' width={20} height={20} />
                    <div className="navbar__iconsAndUser-notification">1</div>
                </div>
                <div className="navbar__iconsAndUser-user">
                    <span>Juanjo</span>
                    <span>Admin</span>
                </div>
                <Image src="/avatar.png" alt='' width={36} height={36} style={{ borderRadius: '50%'}} />
            </div>
        </div>
    )
}

export default Navbar;