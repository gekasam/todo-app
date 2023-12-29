import { Component } from 'react';
import PropTypes from 'prop-types';

export default class NewTaskForm extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
    };

    this.handlerInput = this.handlerInput.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
  }

  handlerInput(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  handlerSubmit(e) {
    const { inputValue } = this.state;
    const { onAddTask } = this.props;

    e.preventDefault();
    onAddTask(inputValue);
  }

  render() {
    const { inputValue } = this.state;
    return (
      <form onSubmit={this.handlerSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={inputValue}
          onChange={this.handlerInput}
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
        />
      </form>
    );
  }
}

NewTaskForm.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};
