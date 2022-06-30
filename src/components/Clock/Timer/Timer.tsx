import { Pause, Play, Repeat } from "phosphor-react";
import { useState } from "react";

export const MyTimer = () => {
  // const breakTime = 2;
  // const sessionTime = 5;
  //this default value will come from the backend

  const [sessionTime, setSessionTime] = useState(5);
  const [breakTime, setBreakTime] = useState(3);
  const [displayTime, setDisplayTime] = useState(5);
  const [timeOn, setTimeOn] = useState(false);
  const [onBreak, setOnBreak] = useState(false);
  const [breakAudio, setBreakAudio] = useState(
    new Audio("../../../assets/alarm-freesound.mp3")
  );

  const playBreakSound = () => {
    breakAudio.currentTime = 0;
    breakAudio.play();
  };

  //function for format the display time
  const formatTime = (time: any) => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    return (
      (minutes < 10 ? "0" + minutes : minutes) +
      ":" +
      (seconds < 10 ? "0" + seconds : seconds)
    );
  };
  const controlTime = () => {
    let second = 1000;
    let date = new Date().getTime();
    let nextDate = new Date().getTime() + second;
    let onBreakVariable = onBreak;

    if (!timeOn) {
      let interval = setInterval(() => {
        date = new Date().getTime();
        if (date > nextDate) {
          setDisplayTime((prev) => {
            if (prev <= 0 && !onBreakVariable) {
              playBreakSound();
              onBreakVariable = true;
              setOnBreak(true);
              return breakTime;
            } else if (prev <= 0 && onBreakVariable) {
              playBreakSound();
              onBreakVariable = false;
              setOnBreak(false);
              return sessionTime;
            }
            return prev - 1;
          });
          nextDate += second;
        }
      }, 30);
      localStorage.clear();
      localStorage.setItem("interval-id", `${interval}`);
    }
    if (timeOn) {
      clearInterval(Number(localStorage.getItem("interval-id")));
    }

    setTimeOn(!timeOn);
  };
  const resetTime = () => {
    setDisplayTime(25 * 60);
    setBreakTime(5 * 60);
    setSessionTime(25 * 60);
  };

  return (
    <div>
      <h1>{formatTime(displayTime)}</h1>
      <button onClick={controlTime}>
        {timeOn ? <Pause size={32} /> : <Play size={32} />}
      </button>
      <button onClick={resetTime}>
        <Repeat size={32} />
      </button>
    </div>
  );
};
