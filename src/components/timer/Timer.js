import { Component } from 'react';

import './Timer.css';

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerValue: 0,
      timerState: 0,
    };

    this.timerStart = this.timerStart.bind(this);
    this.handlerPlay = this.handlerPlay.bind(this);
    this.handlerPause = this.handlerPause.bind(this);
  }

  componentDidMount() {
    const { timeToComplete } = this.props;
    this.setState({
      timerValue: timeToComplete,
    });
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  handlerPlay() {
    this.setState({
      timerState: 1,
    });
    setTimeout(this.timerStart, 1000);
  }

  handlerPause() {
    this.setState({
      timerState: 0,
    });
    clearInterval(this.timer);
  }

  timerStart() {
    this.setState(({ timerValue }) => {
      if (timerValue !== 0) {
        const newTimerValue = timerValue - 1;
        return {
          timerValue: newTimerValue,
        };
      }
      this.setState({
        timerState: 0,
      });
      return clearTimeout(this.timer);
    });
    this.timer = setTimeout(this.timerStart, 1000);
  }

  formatTime() {
    const { timerValue } = this.state;

    const minutes = String(Math.floor(timerValue / 60)).padStart(2, '0');
    const seconds = String(Math.floor(timerValue % 60)).padStart(2, '0');
    return `${minutes}:${seconds}`;
  }

  render() {
    const { timerState } = this.state;
    return (
      <span className="description description-timer">
        <button type="button" className={`icon icon-play${timerState ? ' active' : ''}`} onClick={this.handlerPlay} />
        <button
          type="button"
          className={`icon icon-pause${!timerState ? ' active' : ''}`}
          onClick={this.handlerPause}
        />
        <div className="time-wrapper">{this.formatTime()}</div>
      </span>
    );
  }
}

/* 
function formatTime() {
    return (Math.floor(currentTime / 60) >= 10 ? Math.floor(currentTime / 60) : '0' + Math.floor(currentTime / 60)) 
            + ':' 
            + (currentTime % 60 >= 10 ? currentTime % 60 : '0' + currentTime % 60);
  } */
