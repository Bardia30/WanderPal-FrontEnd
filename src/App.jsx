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



function App() {
  return (
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
  );
}

export default App;
