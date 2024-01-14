import React, { useState } from 'react';
import uniqid from 'uniqid';

import NewTaskForm from './components/new-task-form';
import TaskList from './components/task-list';
import Footer from './components/footer';

export default function App() {
  const [taskData, setTaskData] = useState([
    {
      taskStatus: 'completed',
      value: 'Completed task',
      uid: uniqid.time('task-'),
      date: Date.now(),
      timeToComplete: 3,
    },
    {
      taskStatus: 'editing',
      value: 'Try edit and press enter',
      uid: uniqid.time('task-'),
      date: Date.now(),
      timeToComplete: 10,
    },
    { taskStatus: 'active', value: 'Active task', uid: uniqid.time('task-'), date: Date.now(), timeToComplete: 10 },
  ]);
  const [filter, setFilter] = useState('all');

  const onAddTask = (value, timeInSeconds) => {
    setTaskData((prevTaskData) => {
      const newTaskData = prevTaskData.map((obj) => ({ ...obj }));

      newTaskData.unshift({
        taskStatus: 'active',
        value,
        uid: uniqid.time('task-'),
        date: Date.now(),
        timeToComplete: timeInSeconds,
      });
      return newTaskData;
    });
  };

  const handleToggleStatus = (uid) => {
    setTaskData((prevTaskData) => {
      const newTaskData = prevTaskData.map((obj) => ({ ...obj }));
      const idx = newTaskData.findIndex((element) => element.uid === uid);

      if (newTaskData[idx].taskStatus === 'active') {
        newTaskData[idx].taskStatus = 'completed';
      } else {
        newTaskData[idx].taskStatus = 'active';
      }

      return newTaskData;
    });
  };

  const handleDeleteTask = (uid) => {
    setTaskData((prevTaskData) => {
      const newTaskData = prevTaskData.map((obj) => ({ ...obj }));

      return newTaskData.filter((element) => element.uid !== uid);
    });
  };

  const handleFilter = (valueFilter) => {
    setFilter(valueFilter);
  };

  const handlerClearCompleted = () => {
    setTaskData((prevTaskData) => {
      const newTaskData = prevTaskData.map((obj) => ({ ...obj }));
      return newTaskData.filter((element) => element.taskStatus !== 'completed');
    });
  };

  const handleOnEditTask = (uid) => {
    setTaskData((prevTaskData) => {
      const newTaskData = prevTaskData.map((obj) => ({ ...obj }));
      const idx = newTaskData.findIndex((element) => element.uid === uid);

      newTaskData[idx].taskStatus = 'editing';
      return newTaskData;
    });
  };

  const handleEditTask = (value, uid) => {
    setTaskData((prevTaskData) => {
      const newTaskData = prevTaskData.map((obj) => ({ ...obj }));
      const idx = newTaskData.findIndex((element) => element.uid === uid);
      newTaskData[idx].taskStatus = 'active';
      newTaskData[idx].value = value;
      return newTaskData;
    });
  };

  const taskCounter = () => taskData.filter((element) => element.taskStatus === 'active').length;

  return (
    <div className="App">
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm onAddTask={onAddTask} />
        </header>
        <section className="main">
          <TaskList
            data={taskData}
            filter={filter}
            onToggleStatus={handleToggleStatus}
            onDeleteTask={handleDeleteTask}
            onEditTask={handleOnEditTask}
            taskEdit={handleEditTask}
          />
          <Footer onFilter={handleFilter} taskCounter={taskCounter} onClearCompleted={handlerClearCompleted} />
        </section>
      </section>
    </div>
  );
}
