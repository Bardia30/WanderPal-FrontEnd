import React, { useState, useContext, useEffect } from 'react';
import homeLogo from '../../assets/home_svgrepo.com.png';
import favoritesLogo from '../../assets/favorites_svgrepo.com.png';
import scheduleLogo from '../../assets/schedule_svgrepo.com.png';
import './Sidebar.scss';
import ThemeContext from '../context/theme-context';
import { useLocation, useNavigate } from 'react-router-dom';


const Sidebar = ({ userPic, userId }) => {
  const { theme, changeTheme } = useContext(ThemeContext);

  const [sidebarClass, setSidebarClass] = useState("sidebar");

  const location = useLocation();

  const navigate = useNavigate();

  

  

  useEffect(() => {
    setSidebarClass("sidebar-dark");
  }, [theme])




  const [heightStyle, setHeightStyle] = useState(null);

  useEffect(()=> {
    if (location.pathname.includes('destinations') || location.pathname.includes('schedules')) {
      setHeightStyle('height');
    } else {
      setHeightStyle(null);
    }
  }, [location])
  

  const handleHomeClick = () => {
    
    navigate(`/${userId}/destinations`)
    
    
  }


  

  return (
    <header className={`header header--${theme} header--${heightStyle}`}>
      <nav className={`${sidebarClass}`}>
      <div className='sidebar__pic-border'>
      <img className={`${sidebarClass}__user-pic`} src={userPic} alt="user" />
      </div>
        
        <section onClick={handleHomeClick} className={`${sidebarClass}__menu-item`}>
          <img className={`${sidebarClass}__logo`} src={homeLogo} alt="home" />
          <p className={`${sidebarClass}__menu-text`}>home</p>
        </section>
        {/* <section onClick={handleFavoritesClick} className={`${sidebarClass}__menu-item`}>
          <img className={`${sidebarClass}__logo`} src={favoritesLogo} alt="favorites" />
          <p className={`${sidebarClass}__menu-text`}>favorites</p>
        </section> */}
        {/* <section onClick={handleScheduleClick} className={`${sidebarClass}__menu-item`}>
          <img className={`${sidebarClass}__logo`} src={scheduleLogo} alt="schedule" />
          <p className={`${sidebarClass}__menu-text`}>schedule</p>
        </section> */}
      </nav>
      <div className={`dark-light dark-light--${theme}`}>
        <p className={`dark-light__text dark-light__text--${theme} `}>{theme === "light" ? "Dark Mode" : "Light Mode"}</p>
        <div className={`dark-light__slot dark-light__slot--${theme}`}>
        <div onClick={changeTheme} className={`dark-light__button dark-light__button--${theme}`} ></div>
        </div>

      </div>
    </header>
  )
}

export default Sidebar