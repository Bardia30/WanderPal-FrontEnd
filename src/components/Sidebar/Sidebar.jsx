import React, { useState, useContext, useEffect } from 'react';
import userPic from '../../assets/user-pic.png';
import homeLogo from '../../assets/home_svgrepo.com.png';
import favoritesLogo from '../../assets/favorites_svgrepo.com.png';
import scheduleLogo from '../../assets/schedule_svgrepo.com.png';
import './Sidebar.scss';
import ThemeContext from '../context/theme-context';


const Sidebar = () => {
  const { theme, changeTheme } = useContext(ThemeContext);


  const [sidebarClass, setSidebarClass] = useState("sidebar");


  useEffect(() => {
    setSidebarClass("sidebar-dark");
  }, [theme])

  return (
    <header className={`header header--${theme}`}>
      <nav className={`${sidebarClass}`}>
        <img className={`${sidebarClass}__user-pic`} src={userPic} alt="user" />
        <section className={`${sidebarClass}__menu-item`}>
          <img className={`${sidebarClass}__logo`} src={homeLogo} alt="home" />
          <p className={`${sidebarClass}__menu-text`}>home</p>
        </section>
        <section className={`${sidebarClass}__menu-item`}>
          <img className={`${sidebarClass}__logo`} src={favoritesLogo} alt="favorites" />
          <p className={`${sidebarClass}__menu-text`}>favorites</p>
        </section>
        <section className={`${sidebarClass}__menu-item`}>
          <img className={`${sidebarClass}__logo`} src={scheduleLogo} alt="schedule" />
          <p className={`${sidebarClass}__menu-text`}>schedule</p>
        </section>
      </nav>
      <div className={`dark-light dark-light--${theme}`}>
        <p className={`dark-light__text dark-light__text--${theme} `}>{theme === "light" ? "Light Mode" : "Dark Mode"}</p>
        <div className={`dark-light__slot dark-light__slot--${theme}`}>
        <div onClick={changeTheme} className={`dark-light__button dark-light__button--${theme}`} ></div>
        </div>

      </div>
    </header>
  )
}

export default Sidebar