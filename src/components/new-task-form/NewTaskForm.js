import { useState } from 'react';
import PropTypes from 'prop-types';

export default function NewTaskForm({ onAddTask }) {
  const [inputNewTask, setInputNewTask] = useState('');
  const [inputMinutes, setInputMinutes] = useState('');
  const [inputSeconds, setInputSeconds] = useState('');

  function handlerNewTask(e) {
    setInputNewTask(e.target.value);
  }

  function handlerMin(e) {
    if (e.target.value.match(/^\d*$/) && e.target.value <= 60) {
      setInputMinutes(e.target.value);
    }
  }

  function handlerSec(e) {
    if (e.target.value.match(/^\d*$/) && e.target.value <= 60) {
      setInputSeconds(e.target.value);
    }
  }

  function handlerSubmit() {
    const timeInSeconds = inputMinutes * 60 + +inputSeconds;

    if (inputNewTask && (inputMinutes > 0 || inputSeconds > 0)) {
      setInputNewTask('');
      setInputMinutes('');
      setInputSeconds('');
      onAddTask(inputNewTask, timeInSeconds);
    }
  }

  function handlerKeyDown(e) {
    if (e.key === 'Enter') {
      handlerSubmit();
    }
  }

  return (
    <form className="new-todo-form">
      <input
        name="new-task-input"
        className="new-todo"
        placeholder="What needs to be done?"
        value={inputNewTask}
        onChange={handlerNewTask}
        onKeyDown={handlerKeyDown}
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus
      />
      <input
        name="min-input"
        className="new-todo-form__timer"
        placeholder="Min"
        value={inputMinutes}
        onChange={handlerMin}
        onKeyDown={handlerKeyDown}
      />
      <input
        name="sec-input"
        className="new-todo-form__timer"
        placeholder="Sec"
        value={inputSeconds}
        onChange={handlerSec}
        onKeyDown={handlerKeyDown}
      />
    </form>
  );
}

NewTaskForm.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};
