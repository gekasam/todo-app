import { Component } from 'react';
import PropTypes from 'prop-types';

export default class TaskFilter extends Component {
  constructor() {
    super();
    this.state = {
      activeFilter: 'all',
    };

    this.handlerFilter = this.handlerFilter.bind(this);
  }

  handlerFilter(filter) {
    const { onFilter } = this.props;

    onFilter(filter);
    this.setState({
      activeFilter: filter,
    });
  }

  render() {
    const { activeFilter } = this.state;

    return (
      <ul className="filters">
        <li>
          <FilterButton handlerFilter={() => this.handlerFilter('all')} isActive={activeFilter === 'all'}>
            All
          </FilterButton>
        </li>
        <li>
          <FilterButton
            handlerFilter={() => this.handlerFilter('active')}
            isActive={activeFilter === 'active'}
            text="Active"
          />
        </li>
        <li>
          <FilterButton
            handlerFilter={() => this.handlerFilter('completed')}
            isActive={activeFilter === 'completed'}
            text="Completed"
          />
        </li>
      </ul>
    );
  }
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
