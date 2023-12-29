import React, { Component } from 'react';
import uniqid from 'uniqid';

import NewTaskForm from './components/new-task-form';
import TaskList from './components/task-list';
import Footer from './components/footer';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      taskData: [
        { taskStatus: 'completed', value: 'Completed task', uid: uniqid.time('task-'), date: Date.now() },
        { taskStatus: 'editing', value: 'Try edit and press enter', uid: uniqid.time('task-'), date: Date.now() },
        { taskStatus: 'active', value: 'Active task', uid: uniqid.time('task-'), date: Date.now() },
      ],
      filter: 'all',
    };

    this.onAddTask = (value) => {
      this.setState(({ taskData }) => {
        const newTaskData = taskData.map((obj) => ({ ...obj }));

        newTaskData.unshift({ taskStatus: 'active', value, uid: uniqid.time('task-'), date: Date.now() });
        return {
          taskData: newTaskData,
        };
      });
    };

    this.handleToggleStatus = (uid) => {
      this.setState(({ taskData }) => {
        const newTaskData = taskData.map((obj) => ({ ...obj }));
        const idx = newTaskData.findIndex((element) => element.uid === uid);

        if (newTaskData[idx].taskStatus === 'active') {
          newTaskData[idx].taskStatus = 'completed';
        } else {
          newTaskData[idx].taskStatus = 'active';
        }

        return {
          taskData: newTaskData,
        };
      });
    };

    this.handleDeleteTask = (uid) => {
      this.setState(({ taskData }) => {
        const newTaskData = taskData.map((obj) => ({ ...obj }));

        return {
          taskData: newTaskData.filter((element) => element.uid !== uid),
        };
      });
    };

    this.handleFilter = (filter) => {
      this.setState({
        filter,
      });
    };

    this.handlerClearCompleted = () => {
      this.setState(({ taskData }) => {
        const newTaskData = taskData.map((obj) => ({ ...obj }));
        return {
          taskData: newTaskData.filter((element) => element.taskStatus !== 'completed'),
        };
      });
    };

    this.handleOnEditTask = (uid) => {
      this.setState(({ taskData }) => {
        const newTaskData = taskData.map((obj) => ({ ...obj }));
        const idx = newTaskData.findIndex((element) => element.uid === uid);

        newTaskData[idx].taskStatus = 'editing';
        return {
          taskData: newTaskData,
        };
      });
    };

    this.handleEditTask = (value, uid) => {
      this.setState(({ taskData }) => {
        const newTaskData = taskData.map((obj) => ({ ...obj }));
        const idx = newTaskData.findIndex((element) => element.uid === uid);
        newTaskData[idx].taskStatus = 'active';
        newTaskData[idx].value = value;
        return {
          taskData: newTaskData,
        };
      });
    };
  }

  taskCounter = () => {
    const { taskData } = this.state;

    return taskData.filter((element) => element.taskStatus === 'active').length;
  };

  render() {
    const { taskData, filter } = this.state;

    return (
      <div className="App">
        <section className="todoapp">
          <header className="header">
            <h1>todos</h1>
            <NewTaskForm onAddTask={this.onAddTask} />
          </header>
          <section className="main">
            <TaskList
              data={taskData}
              filter={filter}
              onToggleStatus={this.handleToggleStatus}
              onDeleteTask={this.handleDeleteTask}
              onEditTask={this.handleOnEditTask}
              taskEdit={this.handleEditTask}
            />
            <Footer
              onFilter={this.handleFilter}
              taskCounter={this.taskCounter}
              onClearCompleted={this.handlerClearCompleted}
            />
          </section>
        </section>
      </div>
    );
  }
}
