import PropTypes from 'prop-types';

import TaskFilter from '../task-filter';

export default function Footer({ onFilter, onClearCompleted, taskCounter }) {
  return (
    <footer className="footer">
      <span className="todo-count">{taskCounter()} items left</span>
      <TaskFilter onFilter={onFilter} />
      <button type="button" className="clear-completed" onClick={onClearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

Footer.propTypes = {
  onFilter: PropTypes.func.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
  taskCounter: PropTypes.func.isRequired,
};
