import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import DestinationsPage from './pages/DestinationsPage';
import TravelDetailsPage from './pages/TravelDetailsPage';
import SchedulesPage from './pages/SchedulesPage';
import ScheduleDetailPage from './pages/ScheduleDetailPage';
import FavoritesPage from './pages/FavoritesPage';
import TravelDetailsDeletePage from './pages/TravelDetailsDeletePage';
import Sidebar from './components/Sidebar/Sidebar'; 
import './App.scss';
import ThemeContext from './components/context/theme-context';
import { useState } from 'react';



function App() {

  const [theme, setTheme] = useState("light");



  const changeTheme = ()=> {
    if (theme === "light") {
      setTheme("dark");
      document.body.style.background = "#001C30"
    } else {
      setTheme("light");
      document.body.style.background = "#F1FFFE"
    }
  }

  //probably might need to delete line47 and line 49
  

  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>
    <BrowserRouter>
    <Sidebar />
     <main>
      <Routes>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/signup' element={<SignUpPage />}></Route>
        <Route path='/:uid/destinations' element={<DestinationsPage />}/>
        <Route path='/:uid/favorites' element={<FavoritesPage />}/>
        <Route path='/:uid/travelDetails/:travelId' element={<TravelDetailsPage />}/>
        <Route path='/:uid/travelDetails/:travelId/delete' element={<TravelDetailsDeletePage />}/> 
        <Route path='/:uid/travelDetails/:travelId/schedules/:day' element={<SchedulesPage />}/>
        <Route path='/:uid/travelDetails/:travelId/schedules/:day/:scheduleId' element={<ScheduleDetailPage />}/>
        <Route path='*' element={<SignUpPage />}/>
      </Routes>
      </main>
    </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
