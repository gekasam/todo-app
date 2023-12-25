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
        { taskStatus: 'completed', value: 'Completed task', uid: uniqid.time('task-') },
        { taskStatus: 'editing', value: 'Editing task', uid: uniqid.time('task-') },
        { taskStatus: 'active', value: 'Active task', uid: uniqid.time('task-') },
      ],
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
  }

  render() {
    const { taskData } = this.state;

    return (
      <div className="App">
        <section className="todoapp">
          <header className="header">
            <h1>todos</h1>
            <NewTaskForm />
          </header>
          <section className="main">
            <TaskList data={taskData} onToggleStatus={this.handleToggleStatus} onDeleteTask={this.handleDeleteTask} />
            <Footer />
          </section>
        </section>
      </div>
    );
  }
}
