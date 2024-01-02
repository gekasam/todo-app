import PropTypes from 'prop-types';

import Task from '../task';

import './TaskList.css';

export default function TaskList({ data, filter, onToggleStatus, onDeleteTask, onEditTask, taskEdit }) {
  function handlerFilter(status) {
    if (filter === 'all' || (filter === 'active' && status === 'editing')) {
      return '';
    }

    return filter !== status ? ' hidden' : '';
  }

  const elements = data.map((element) => (
    <li className={`${element.taskStatus}${handlerFilter(element.taskStatus)}`} key={element.uid}>
      <Task
        data={element}
        onToggleStatus={onToggleStatus}
        onDeleteTask={onDeleteTask}
        onEditTask={onEditTask}
        taskEdit={taskEdit}
      />
    </li>
  ));

  return <ul className="todo-list">{elements}</ul>;
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
