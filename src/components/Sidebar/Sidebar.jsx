import React from 'react';
import userPic from '../../assets/user-pic.png';
import homeLogo from '../../assets/home_svgrepo.com.png';
import favoritesLogo from '../../assets/favorites_svgrepo.com.png';
import scheduleLogo from '../../assets/schedule_svgrepo.com.png';
import './Sidebar.scss';


const Sidebar = () => {
  return (
    <header>
      <nav className='sidebar'>
        <img className='sidebar__user-pic' src={userPic} alt="user" />
        <section className='sidebar__menu-item'>
          <img className='sidebar__logo' src={homeLogo} alt="home" />
          <p className='sidebar__menu-text'>home</p>
        </section>
        <section className='sidebar__menu-item'>
          <img className='sidebar__logo' src={favoritesLogo} alt="favorites" />
          <p className='sidebar__menu-text'>favorites</p>
        </section>
        <section className='sidebar__menu-item'>
          <img className='sidebar__logo' src={scheduleLogo} alt="schedule" />
          <p className='sidebar__menu-text'>schedule</p>
        </section>
      </nav>
      <div className='dark-light'>
        <p className='dark-light__text'>dark mode</p>
        <div className='dark-light__slot'>
          <div className='dark-light__button'></div>
        </div>

      </div>
    </header>
  )
}

export default Sidebar