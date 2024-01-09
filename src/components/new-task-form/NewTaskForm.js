import { Component } from 'react';
import PropTypes from 'prop-types';

export default class NewTaskForm extends Component {
  constructor() {
    super();
    this.state = {
      inputNewTask: '',
      inputMinutes: '',
      inputSeconds: '',
    };

    this.handlerNewTask = this.handlerNewTask.bind(this);
    this.handlerMin = this.handlerMin.bind(this);
    this.handlerSec = this.handlerSec.bind(this);
    this.handlerKeyDown = this.handlerKeyDown.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
  }

  handlerNewTask(e) {
    this.setState({
      inputNewTask: e.target.value,
    });
  }

  handlerMin(e) {
    if (e.target.value.match(/^\d*$/) && e.target.value <= 60) {
      this.setState({
        inputMinutes: e.target.value,
      });
    }
  }

  handlerSec(e) {
    if (e.target.value.match(/^\d*$/) && e.target.value <= 60) {
      this.setState({
        inputSeconds: e.target.value,
      });
    }
  }

  handlerKeyDown(e) {
    if (e.key === 'Enter') {
      this.handlerSubmit();
    }
  }

  handlerSubmit() {
    const { inputNewTask, inputMinutes, inputSeconds } = this.state;
    const { onAddTask } = this.props;

    const timeInSeconds = inputMinutes * 60 + +inputSeconds;

    if (inputNewTask && (inputMinutes > 0 || inputSeconds > 0)) {
      this.setState({
        inputNewTask: '',
        inputMinutes: '',
        inputSeconds: '',
      });
      onAddTask(inputNewTask, timeInSeconds);
    }
  }

  render() {
    const { inputNewTask, inputMinutes, inputSeconds } = this.state;
    return (
      <form className="new-todo-form">
        <input
          name="new-task-input"
          className="new-todo"
          placeholder="What needs to be done?"
          value={inputNewTask}
          onChange={this.handlerNewTask}
          onKeyDown={this.handlerKeyDown}
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
        />
        <input
          name="min-input"
          className="new-todo-form__timer"
          placeholder="Min"
          value={inputMinutes}
          onChange={this.handlerMin}
          onKeyDown={this.handlerKeyDown}
        />
        <input
          name="sec-input"
          className="new-todo-form__timer"
          placeholder="Sec"
          value={inputSeconds}
          onChange={this.handlerSec}
          onKeyDown={this.handlerKeyDown}
        />
      </form>
    );
  }
}

NewTaskForm.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};
