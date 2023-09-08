import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from '../components/Button/Button';
// import MOCK_DATA from '../components/DropDownVacation/mockData';
import DropDownVacation from '../components/DropDownVacation/DropDownVacation';
import DropDownSchedule from '../components/DropDownSchedule/DropDownSchedule';
import './SchedulesPage.scss';
import ScheduleRow from '../components/ScheduleRow/ScheduleRow';
import ThemeContext from '../components/context/theme-context';



const SchedulesPage = () => {

  const { uid, travelId } = useParams();

  const navigate = useNavigate();

  const [userName, setUserName ] = useState("");

  const [userDestination, setUserDestination] = useState([]);


  // const [selectedDestinationId, setSelectedDestinationId] = useState("");


  useEffect(() => {
    axios.get(`http://localhost:8080/user/${uid}`)  
      .then((res) => {
        setUserName(res.data.name);
      })
      .catch(err => {
        console.log(err.message);
      })
  }, [])

  useEffect(()=> {
    axios.get(`http://localhost:8080/destinations/${uid}/${travelId}`)
      .then(res => {
        setUserDestination(res.data.destination);
      })
      .catch(err => console.log(err.message));
  },[])



  const {theme} = useContext(ThemeContext);

  const [schedules, setSchedules] = useState([]);



  return (
    <section className='sched'>
      <h1 className={`sched__title sched__title--${theme}`}>
        {userName}'s {userDestination} Schedule
      </h1>
      <div className='sched__controls'>
        <div className='sched__dropdowns'>
          {/* <DropDownVacation
            data={userDestinations}
            dropClass="sched__drop-vacation"
            setSelectedDestinationId={setSelectedDestinationId}
          /> */}
          <DropDownSchedule
            selectedDestinationId={travelId}
            uid={uid}
            dropClass="sched__drop-schedule"
            setSchedules={setSchedules}
          />
        </div>
        <Button
          text="travel details"
          buttonClass="sched__cta"
          onClick={(e) => { 
            e.preventDefault();
            navigate(`/${uid}/travelDetails/${travelId}`)
          }}
        />
      </div>
      <div className={`sched__table sched__table--${theme}`}>
        <section className={`sched__titles sched__titles--${theme}`}>
          <h3 className={`sched__table-title sched__table-title--${theme}`}>time</h3>
          <h3 className={`sched__table-title sched__table-title--${theme}`}>name</h3>
          <h3 className={`sched__table-title sched__table-title--${theme}`}>activity type</h3>
          <h3 className={`sched__table-title sched__table-title--${theme}`}>duration</h3>
          {/* <h3 className={`sched__table-title sched__table-title--${theme}`}>location</h3> */}
          <h3 className={`sched__table-title sched__table-title--${theme} sched__table-title--web`}>website</h3>
          <h3 className={`sched__table-title sched__table-title--${theme}`}>action</h3>
        </section>
        {schedules.length > 0 ? schedules.map((data) =>
        (<ScheduleRow
          theme={theme}
          data={data}
        />)
        ) : <h3>Select Vacation and day to see schedule</h3>}
      </div>
    </section>
  )
}

export default SchedulesPage