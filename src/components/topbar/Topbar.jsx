import './topbar.css';
import { Notifications, Language, Settings } from '@mui/icons-material/';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className='topbarWrapper'>
        <div className="topLeft">
          <span className="logo">Dashboard</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <Notifications />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">4</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
            <span className="topIconBadge">1</span>
          </div>
          <img src="https://cultivatedculture.com/wp-content/uploads/2019/12/LinkedIn-Profile-Picture-Example-Madeline-Mann-414x414.jpeg" alt="" className='topAvatar' />
        </div>
      </div>
    </div>
  )
}

export default Topbar
