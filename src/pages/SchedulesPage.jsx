import { useContext } from 'react';
import Button from '../components/Button/Button';
import MOCK_DATA from '../components/DropDownVacation/mockData';
import DropDownVacation from '../components/DropDownVacation/DropDownVacation';
import DropDownSchedule from '../components/DropDownSchedule/DropDownSchedule';
import './SchedulesPage.scss';
import ScheduleRow from '../components/ScheduleRow/ScheduleRow';
import ThemeContext from '../components/context/theme-context';



const SchedulesPage = () => {

  const {theme} = useContext(ThemeContext);

  const mockSchedData = [
    {
      day: 1,
      time: "5:00 PM",
      activity_name: "Beach",
      activity_type: "Swimming",
      duration: 120,
      location: {
        lat: 44.232434,
        lng: -15.342342
      },
      website: "www.CancunBeach.com"
    },
    {
      day: 1,
      time: "5:00 PM",
      activity_name: "Beach",
      activity_type: "Swimming",
      duration: 120,
      location: {
        lat: 44.232434,
        lng: -15.342342
      },
      website: "www.CancunBeach.com"
    },
    {
      day: 1,
      time: "5:00 PM",
      activity_name: "Beach",
      activity_type: "Swimming",
      duration: 120,
      location: {
        lat: 44.232434,
        lng: -15.342342
      },
      website: "www.CancunBeach.com"
    },
    {
      day: 1,
      time: "5:00 PM",
      activity_name: "Beach",
      activity_type: "Swimming",
      duration: 120,
      location: {
        lat: 44.232434,
        lng: -15.342342
      },
      website: "www.CancunBeach.com"
    },
    {
      day: 1,
      time: "5:00 PM",
      activity_name: "Beach",
      activity_type: "Swimming",
      duration: 120,
      location: {
        lat: 44.232434,
        lng: -15.342342
      },
      website: "www.CancunBeach.com"
    },
  ]



  return (
    <section className='sched'>
      <h1 className={`sched__title sched__title--${theme}`}>
        Bardia's Travel Schedule
      </h1>
      <div className='sched__controls'>
        <div className='sched__dropdowns'>
          <DropDownVacation
            data={MOCK_DATA}
            dropClass="sched__drop-vacation"
          />
          <DropDownSchedule
            data={MOCK_DATA}
            dropClass="sched__drop-schedule"
          />
        </div>
        <Button
          text="travel details"
          buttonClass="sched__cta"
          onClick={() => { }}
        />
      </div>
      <div className={`sched__table sched__table--${theme}`}>
        <section className={`sched__titles sched__titles--${theme}`}>
          <h3 className={`sched__table-title sched__table-title--${theme}`}>time</h3>
          <h3 className={`sched__table-title sched__table-title--${theme}`}>name</h3>
          <h3 className={`sched__table-title sched__table-title--${theme}`}>activity type</h3>
          <h3 className={`sched__table-title sched__table-title--${theme}`}>duration</h3>
          <h3 className={`sched__table-title sched__table-title--${theme}`}>location</h3>
          <h3 className={`sched__table-title sched__table-title--${theme}`}>website</h3>
          <h3 className={`sched__table-title sched__table-title--${theme}`}>action</h3>
        </section>
        {mockSchedData.map((data) =>
        (<ScheduleRow
          theme={theme}
          data={data}
        />)
        )}
      </div>
    </section>
  )
}

export default SchedulesPage