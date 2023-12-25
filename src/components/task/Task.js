import { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';

function CreatedAgo() {
  return <span className="created">created {formatDistanceToNow(Date.now(), { includeSeconds: true })} ago</span>;
}

export default class Task extends Component {
  constructor() {
    super();
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      done: false,
    };
  }

  render() {
    const {
      data: { taskStatus, value, uid },
      onToggleStatus,
      onDeleteTask,
    } = this.props;

    return taskStatus !== 'editing' ? (
      <div className="view">
        <input id={uid} className="toggle" type="checkbox" onClick={() => onToggleStatus(uid)} />
        <label htmlFor={uid}>
          <span className="description">{value}</span>
          <CreatedAgo />
        </label>
        <button type="button" className="icon icon-edit" />
        <button type="button" className="icon icon-destroy" onClick={() => onDeleteTask(uid)} />
      </div>
    ) : (
      <>
        <div className="view">
          <input id={uid} className="toggle" type="checkbox" />
          <label htmlFor={uid}>
            <span className="description">{value}</span>
            <CreatedAgo />
          </label>
          <button type="button" className="icon icon-edit" />
          <button type="button" className="icon icon-destroy" />
        </div>
        <input type="text" className="edit" value={value} />
      </>
    );
  }
}

/* </li>
      <li className="editing">
        <div className="view">
          <label>
            <input className="toggle" type="checkbox" />
            <span className="description">Editing task</span>
            <span className="created">created 5 minutes ago</span>
          </label>
          <button type="button" className="icon icon-edit" />
          <button type="button" className="icon icon-destroy" />
        </div>
        <input type="text" className="edit" value="Editing task" />
      </li>
      <li className="active">
        <div className="view">
          <label>
            <input className="toggle" type="checkbox" />
            <span className="description">Active task</span>
            <span className="created">created 5 minutes ago</span>
          </label>
          <button type="button" className="icon icon-edit" />
          <button type="button" className="icon icon-destroy" />
        </div>
      </li>
    </> */
