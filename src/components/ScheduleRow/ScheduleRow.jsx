import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import deleteLogo from '../../assets/delete-sched.png';
import editLogo from '../../assets/edit-sched.png';
import deleteLogoDark from '../../assets/delete-sched-dark.png';
import editLogoDark from '../../assets/edit-sched-dark.png';
import './ScheduleRow.scss';
import { timestampToTimeStr } from '../util/dateConverter';
import EditScheduleModal from '../EditScheduleModal/EditScheduleModal';
import DeleteScheduleModal from '../DeleteScheduleModal/DeleteScheduleModal';

const ScheduleRow = ({ setIsUpdated, data, theme, travelObj }) => {
  
  const { time, day,  name, activity_type, duration, website } = data;

  const [isEditScheduleClicked, setIsEditScheduleClicked] = useState(false);

  const [isDeleteClicked, setIsDeleteClicked] = useState(false);

  const { uid, travelId } = useParams();

  const handleEditLogo = () => {
    setIsEditScheduleClicked(true);
    setIsUpdated(false);
  }


  const handleDeleteLogo = () => {
    setIsDeleteClicked(true);
  }

  
  return (
    <React.Fragment>
      <section className={`sched__details sched__details--${theme}`}>
        <h4 className={`sched__detail-item sched__detail-item--${theme}`}>{timestampToTimeStr(time)}</h4>
        <h4 className={`sched__detail-item sched__detail-item--${theme} sched__detail-item--name`}>{name}</h4>
        <h4 className={`sched__detail-item sched__detail-item--${theme}`}>{activity_type}</h4>
        <h4 className={`sched__detail-item sched__detail-item--${theme}`}>{duration} hour</h4>
        <a className='sched__detail-link' href={website}>Visit</a>
        <div className='sched__actions'>
          <img className='sched__delete' onClick={handleDeleteLogo} src={theme === "light" ? deleteLogo : deleteLogoDark} alt="trash-button" />
          <img className='sched__edit' onClick={handleEditLogo} src={theme === "light" ? editLogo : editLogoDark} alt="update-button" />
        </div>
      </section>
      {isEditScheduleClicked &&
        <EditScheduleModal setIsUpdated={setIsUpdated} scheduleId={data._id} day={day} time={time} placeType={activity_type} website={website} duration={duration} name={name} uid={uid} travelId={travelId} travelObj={travelObj} setIsEditScheduleClicked={setIsEditScheduleClicked} />
      }
      {isDeleteClicked && 
        <DeleteScheduleModal setIsUpdated={setIsUpdated} scheduleId={data._id} travelId={travelId} setIsDeleteClicked={setIsDeleteClicked} />
      }
    </React.Fragment>

  )
}

export default ScheduleRow