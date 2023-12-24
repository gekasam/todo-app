import React from 'react';

import NewTaskForm from './components/new-task-form';
import TaskList from './components/task-list';
import Footer from './components/footer';

function App() {
  const taskData = [
    { class: 'completed', value: 'Completed task' },
    { class: 'editing', value: 'Editing task' },
    { class: 'active', value: 'Active task' },
  ];

  return (
    <div className="App">
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm />
        </header>
        <section className="main">
          <TaskList data={taskData} />
          <Footer />
        </section>
      </section>
    </div>
  );
}

export default App;
