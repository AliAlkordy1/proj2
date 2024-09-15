import { Icon } from '@iconify/react';
export default function TopBar(){
    return<>
        <div className="topbar-container">
        <input type="text" className="search-input" placeholder='search'/>
        <div>
        <Icon icon="mingcute:notification-line" width="36" height="36" className='notification-icon'/>
            <div className="profile-image">IG</div>

        </div>
        </div>
    
    
    </>
}