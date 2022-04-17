import React from 'react'
import './topbar.css'
import { NotificationsNone, Language, Settings } from '@mui/icons-material/';

const Topbar = () => {
  return (
    <div className='topbarWrapper'>
      <div className="topLeft">
        <span className="logo">Dashboard</span>
      </div>
      <div className="topRight">
        <div className="topbarIconContainer">
          <NotificationsNone />
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
  )
}

export default Topbar
