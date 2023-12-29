import { formatDistanceToNow } from 'date-fns';
import { Component } from 'react';
import PropTypes from 'prop-types';

export default class CreatedAgo extends Component {
  constructor({ date }) {
    super();
    this.state = {
      createdAgo: formatDistanceToNow(date, { includeSeconds: true }),
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.distanseToNow(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  distanseToNow() {
    const { date } = this.props;
    this.setState({
      createdAgo: formatDistanceToNow(date, { includeSeconds: true }),
    });
  }

  render() {
    const { createdAgo } = this.state;
    return <span className="created">created {createdAgo} ago</span>;
  }
}

CreatedAgo.propTypes = {
  date: PropTypes.number.isRequired,
};
