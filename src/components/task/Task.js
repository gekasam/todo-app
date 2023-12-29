import { Component } from 'react';
import PropTypes from 'prop-types';

import CreatedAgo from '../created-ago';

export default class Task extends Component {
  constructor({ data: { value } }) {
    super();
    this.state = {
      editValue: value,
    };

    this.checkedHandler = (status) => status !== 'active';
    this.handlerEdit = this.handlerEdit.bind(this);
  }

  handlerEdit(e) {
    this.setState({
      editValue: e.target.value,
    });
  }

  render() {
    const {
      data: { taskStatus, value, uid, date },
      onToggleStatus,
      onDeleteTask,
      onEditTask,
      taskEdit,
    } = this.props;
    const { editValue } = this.state;
    return (
      <>
        <div className="view">
          <input
            id={uid}
            className="toggle"
            type="checkbox"
            checked={this.checkedHandler(taskStatus)}
            onChange={() => onToggleStatus(uid)}
          />
          <label htmlFor={uid}>
            <span className="description">{value}</span>
            <CreatedAgo date={date} />
          </label>
          <button type="button" className="icon icon-edit" onClick={() => onEditTask(uid)} />
          <button type="button" className="icon icon-destroy" onClick={() => onDeleteTask(uid)} />
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            taskEdit(editValue, uid);
          }}
        >
          <input type="text" className="edit" value={editValue} onChange={this.handlerEdit} />
        </form>
      </>
    );
  }
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
