import deleteLogo from '../../assets/delete-sched.png';
import editLogo from '../../assets/edit-sched.png';
import deleteLogoDark from '../../assets/delete-sched-dark.png';
import editLogoDark from '../../assets/edit-sched-dark.png';
import './ScheduleRow.scss';
import { timestampToTimeStr } from '../util/dateConverter';

const ScheduleRow = ({data, theme}) => {
    console.log(data);  
    const {time, name, activity_type, duration, website} = data;
  //have to have id for each data row, and also got to figure out the location part. 
    return (
    <section className={`sched__details sched__details--${theme}`}>
          <h4 className={`sched__detail-item sched__detail-item--${theme}`}>{timestampToTimeStr(time)}</h4>
          <h4 className={`sched__detail-item sched__detail-item--${theme} sched__detail-item--name`}>{name}</h4>
          <h4 className={`sched__detail-item sched__detail-item--${theme}`}>{activity_type}</h4>
          <h4 className={`sched__detail-item sched__detail-item--${theme}`}>{duration}</h4>
          {/* <a className='sched__detail-link' href="#">View On Map</a> */}
          <a className='sched__detail-link' href={website}>Visit</a>
          <div className='sched__actions'>
            <img src={theme === "light" ? deleteLogo : deleteLogoDark} alt="trash-button" />
            <img src={theme === "light" ? editLogo : editLogoDark} alt="update-button" />
          </div>
          
        </section>
  )
}

export default ScheduleRow