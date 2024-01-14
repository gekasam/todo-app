import PropTypes from 'prop-types';
import { useState } from 'react';

export default function TaskFilter({ onFilter }) {
  const [activeFilter, setActiveFilter] = useState('all');

  function handlerFilter(filter) {
    onFilter(filter);
    setActiveFilter(filter);
  }

  return (
    <ul className="filters">
      <li>
        <FilterButton handlerFilter={() => handlerFilter('all')} isActive={activeFilter === 'all'}>
          All
        </FilterButton>
      </li>
      <li>
        <FilterButton
          handlerFilter={() => handlerFilter('active')}
          isActive={activeFilter === 'active'}
          text="Active"
        />
      </li>
      <li>
        <FilterButton
          handlerFilter={() => handlerFilter('completed')}
          isActive={activeFilter === 'completed'}
          text="Completed"
        />
      </li>
    </ul>
  );
}

TaskFilter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

function FilterButton({ handlerFilter, isActive, text, children }) {
  return (
    <button type="button" onClick={handlerFilter} className={isActive ? 'selected' : ''}>
      {text}
      {children}
    </button>
  );
}

FilterButton.defaultProps = {
  text: '',
  children: '',
};

FilterButton.propTypes = {
  handlerFilter: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  text: PropTypes.string,
  children: PropTypes.string,
};
