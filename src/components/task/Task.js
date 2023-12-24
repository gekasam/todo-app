export default function Task() {
  return (
    <>
      <li className="completed">
        <div className="view">
          <label>
            <input className="toggle" type="checkbox" />
            <span className="description">Completed task</span>
            <span className="created">created 17 seconds ago</span>
          </label>
          <button type="button" className="icon icon-edit" />
          <button type="button" className="icon icon-destroy" />
        </div>
      </li>
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
    </>
  );
}
