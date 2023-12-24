import Task from '../task';

export default function TaskList({ data }) {
  const elements = data.map((element) =>
    element.class !== 'editing' ? (
      <li className={element.class} key={element.value + new Date().getTime()}>
        <Task value={element.value} />
      </li>
    ) : (
      <li className={element.class} key={element.value + new Date().getTime()}>
        <Task value={element.value} />
        <input type="text" className="edit" value={element.value} />
      </li>
    )
  );

  return <ul className="todo-list">{elements}</ul>;
}
