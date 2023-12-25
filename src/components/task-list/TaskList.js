import Task from '../task';

export default function TaskList({ data, onToggleStatus, onDeleteTask }) {
  const elements = data.map((element) => (
    <li className={element.taskStatus} key={element.uid}>
      <Task data={element} onToggleStatus={onToggleStatus} onDeleteTask={onDeleteTask} />
    </li>
  ));

  return <ul className="todo-list">{elements}</ul>;
}
