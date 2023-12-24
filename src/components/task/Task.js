import { formatDistanceToNow } from 'date-fns';

function CreatedAgo() {
  return <span className="created">created {formatDistanceToNow(Date.now(), { includeSeconds: true })} ago</span>;
}

export default function Task({ value }) {
  return (
    <div className="view">
      <label>
        <input className="toggle" type="checkbox" />
        <span className="description">{value}</span>
        <CreatedAgo />
      </label>
      <button type="button" className="icon icon-edit" />
      <button type="button" className="icon icon-destroy" />
    </div>
  );
}

/* </li>
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
    </> */
