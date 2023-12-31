import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import DestinationsPage from './pages/DestinationsPage';
import TravelDetailsPage from './pages/TravelDetailsPage';
import SchedulesPage from './pages/SchedulesPage';
import Sidebar from './components/Sidebar/Sidebar';
import './App.scss';
import ThemeContext from './components/context/theme-context';
import { useCallback, useState, React } from 'react';
import { AuthContext } from './components/authContext/authContext';



function App() {

  const [theme, setTheme] = useState("light");



  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.body.style.background = "#001C30"
    } else {
      setTheme("light");
      document.body.style.background = "#F1FFFE"
    }
  }



  const initialLoginState = !!sessionStorage.getItem('isLoggedIn');

  const [isLoggedIn, setIsLoggedIn] = useState(initialLoginState);


  const login = useCallback(() => {
    setIsLoggedIn(true);
    sessionStorage.setItem('isLoggedIn', 'true');
  }, []);


  const logout = useCallback(() => {
    setIsLoggedIn(false);
    sessionStorage.removeItem('isLoggedIn');
    localStorage.removeItem('token');  
    setUserPic("");                     
    setUserId("");                      
    setIsSidebar(true);
  }, [])

  const [userPic, setUserPic] = useState("");

  const [userId, setUserId] = useState("");


  //probably might need to delete line47 and line49


  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}>
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        <BrowserRouter>
          {isSidebar ? <Sidebar userId={userId} userPic={userPic} /> : null}
          <main>
            <Routes>
              {isLoggedIn ? (
                <>
                  <Route path="/:uid/destinations" element={<DestinationsPage setUserPic={setUserPic} setUserId={setUserId} />} />
                  <Route path="/:uid/travelDetails/:travelId" element={<TravelDetailsPage />} />
                  <Route path="/:uid/travelDetails/:travelId/schedules" element={<SchedulesPage />} />
                  <Route path="*" element={<DestinationsPage setUserPic={setUserPic} setUserId={setUserId} />} />
                </>
              ) : (
                <>
                  <Route path="/login" element={<LoginPage setIsSidebar={setIsSidebar} login={login} />} />
                  <Route path="/signup" element={<SignUpPage setIsSidebar={setIsSidebar} login={login} />} />
                  <Route path="/" element={<LoginPage setIsSidebar={setIsSidebar} login={login} />} />
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
