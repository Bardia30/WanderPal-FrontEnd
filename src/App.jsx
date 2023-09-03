import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
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
import { useCallback, useState, React } from 'react';
import { AuthContext } from './components/authContext/authContext';



function App() {

  const [theme, setTheme] = useState("light");

  const { uid } = useParams();

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.body.style.background = "#001C30"
    } else {
      setTheme("light");
      document.body.style.background = "#F1FFFE"
    }
  }

  // const [isLoggedIn, setIsLoggedIn] = useState(false);


  // const login = useCallback(() => {
  //   setIsLoggedIn(true);
  // }, [])

  // const logout = useCallback(() => {
  //   setIsLoggedIn(false);
  // })
  const initialLoginState = !!sessionStorage.getItem('isLoggedIn');

  const [isLoggedIn, setIsLoggedIn] = useState(initialLoginState);


  const login = useCallback(() => {
    setIsLoggedIn(true);
    sessionStorage.setItem('isLoggedIn', 'true');
  }, []);


  const logout = useCallback(() => {
    setIsLoggedIn(false);
    sessionStorage.removeItem('isLoggedIn');
  }, [])


  
  //probably might need to delete line47 and line49


  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}>
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        <BrowserRouter>
          {isSidebar ? <Sidebar /> : null}
          <main>
            <Routes>
            {isLoggedIn ? (
              <>
              <Route path="/:uid/destinations" element={<DestinationsPage uid={uid} />} />
              <Route path="/:uid/favorites" element={<FavoritesPage />} />
              <Route path="/:uid/travelDetails/:travelId" element={<TravelDetailsPage />} />
              <Route path="/:uid/travelDetails/:travelId/delete" element={<TravelDetailsDeletePage />} />
              <Route path="/:uid/travelDetails/:travelId/schedules/:day" element={<SchedulesPage />} />
              <Route path="/:uid/travelDetails/:travelId/schedules/:day/:scheduleId" element={<ScheduleDetailPage />} />
              <Route path="*" element={<DestinationsPage uid={uid} />} />
              </>
            ): (
              <>
              <Route path="/login" element={<LoginPage setIsSidebar={setIsSidebar} login={login}/>} />
              <Route path="/signup" element={<SignUpPage setIsSidebar={setIsSidebar} login={login}/>} />
              <Route path="/" element={<LoginPage setIsSidebar={setIsSidebar} login={login}/>} />
              </>
            )}
            </Routes>
          </main>
        </BrowserRouter>
      </ThemeContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
