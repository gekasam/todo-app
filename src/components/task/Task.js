import { useState } from 'react';
import PropTypes from 'prop-types';

import CreatedAgo from '../created-ago';
import Timer from '../timer';
import './Task.css';

export default function Task({
  data: { taskStatus, value, uid, date, timeToComplete },
  onToggleStatus,
  onDeleteTask,
  onEditTask,
  taskEdit,
}) {
  const [editValue, setEditValue] = useState(value);

  const checkedHandler = (status) => status !== 'active';

  function handlerEdit(e) {
    setEditValue(e.target.value);
  }

  const editClass = `icon icon-edit${taskStatus === 'completed' ? ' disabled' : ''}`;
  return (
    <>
      <div className="view">
        <input
          id={uid}
          className="toggle"
          type="checkbox"
          checked={checkedHandler(taskStatus)}
          onChange={() => onToggleStatus(uid)}
        />
        <label htmlFor={uid}>
          <span className="title">{value}</span>
          <Timer taskStatus={taskStatus} timeToComplete={timeToComplete} />
          <CreatedAgo date={date} />
        </label>
        <button
          type="button"
          className={editClass}
          onClick={() => onEditTask(uid)}
          disabled={taskStatus === 'completed'}
        />
        <button type="button" className="icon icon-destroy" onClick={() => onDeleteTask(uid)} />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (editValue) taskEdit(editValue, uid);
        }}
      >
        <input name="edit-input" type="text" className="edit" value={editValue} onChange={handlerEdit} />
      </form>
    </>
  );
}

Task.propTypes = {
  data: PropTypes.shape({
    taskStatus: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    uid: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
  }).isRequired,
  onToggleStatus: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  onEditTask: PropTypes.func.isRequired,
  taskEdit: PropTypes.func.isRequired,
};
