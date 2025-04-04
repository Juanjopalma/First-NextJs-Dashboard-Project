import './announcements.scss';


const Announcements = () => {
  return (
    <div className='announcements'>
        <div className="announcements__title">
            <h1>Announcements</h1>
            <span>View all</span>
        </div>
        <div className="announcements__boxes">
            <div 
                className="announcements__boxes-box"
                style={{ background: '#EDF9FD'}}
            >
                <div className="announcements__boxes-title">
                    <h2>Lorem ipsum dolor sit.</h2>
                    <span>2025-01-01</span>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quis ducimus voluptate commodi.</p>
            </div>
            <div 
                className="announcements__boxes-box"
                style={{ background: '#CFCEFF'}}
            >
                <div className="announcements__boxes-title">
                    <h2>Lorem ipsum dolor sit.</h2>
                    <span>2025-01-01</span>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quis ducimus voluptate commodi.</p>
            </div>
            <div 
                className="announcements__boxes-box" 
                style={{ background: '#FAE27C'}}
                >
                <div className="announcements__boxes-title">
                    <h2>Lorem ipsum dolor sit.</h2>
                    <span>2025-01-01</span>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Exercitationem quis ducimus voluptate commodi.</p>
            </div>
        </div>
    </div>
  )
}

export default Announcements