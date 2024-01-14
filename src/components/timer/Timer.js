import { useState, useEffect } from 'react';

import './Timer.css';

export default function Timer({ taskStatus, timeToComplete }) {
  const [timerValue, setTimerValue] = useState(timeToComplete);
  const [timerState, setTimerState] = useState(0);
  const [timer, setTimer] = useState();

  function timerStart() {
    setTimerValue((prevTimerValue) => {
      if (prevTimerValue) {
        return prevTimerValue - 1;
      }
      setTimerState(0);
      clearTimeout(timer);
      return 0;
    });
    const id = setTimeout(timerStart, 1000);
    setTimer(id);
  }

  function handlerPlay() {
    if (!timerState) {
      setTimerState(1);
      setTimeout(timerStart, 1000);
    }
  }

  function handlerPause() {
    setTimerState(0);
    clearTimeout(timer);
  }

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    taskStatus === 'completed' && handlerPause();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [taskStatus]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => clearTimeout(timer), []);

  function formatTime() {
    const minutes = String(Math.floor(timerValue / 60)).padStart(2, '0');
    const seconds = String(Math.floor(timerValue % 60)).padStart(2, '0');
    return `${minutes}:${seconds}`;
  }

  return (
    <span className="description description-timer">
      <button type="button" className={`icon icon-play${timerState ? ' active' : ''}`} onClick={handlerPlay} />
      <button type="button" className={`icon icon-pause${!timerState ? ' active' : ''}`} onClick={handlerPause} />
      <div className="time-wrapper">{formatTime()}</div>
    </span>
  );
}
