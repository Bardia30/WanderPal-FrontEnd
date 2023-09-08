import React, { useState, useContext, useEffect } from 'react';
import homeLogo from '../../assets/home_svgrepo.com.png';
import './Sidebar.scss';
import ThemeContext from '../context/theme-context';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import { AuthContext } from '../authContext/authContext';



const Sidebar = ({ userPic, userId }) => {
  const { theme, changeTheme } = useContext(ThemeContext);

  const [sidebarClass, setSidebarClass] = useState("sidebar");

  const location = useLocation();

  const navigate = useNavigate();

  const { logout } = useContext(AuthContext);
  

  useEffect(() => {
    setSidebarClass("sidebar-dark");
  }, [theme])

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    alert('you have been successfully logged out!')
    navigate('/login');
  }


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
      </nav>
      
      <div className={`dark-light dark-light--${theme}`}>
      <button className={`logout-cta logout-cta--${theme}`} onClick={handleLogout}>LOGOUT</button>
        
        <p className={`dark-light__text dark-light__text--${theme} `}>{theme === "light" ? "Dark Mode" : "Light Mode"}</p>
        <div className={`dark-light__slot dark-light__slot--${theme}`}>
        <div onClick={changeTheme} className={`dark-light__button dark-light__button--${theme}`} ></div>
        </div>
      </div>
    </header>
  )
}

export default Sidebar