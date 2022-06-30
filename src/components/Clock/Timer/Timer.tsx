import { Pause, Play, Repeat } from "phosphor-react";
import { useState } from "react";
import { Length } from "./Length";

export const MyTimer = () => {
  const [displayTime, setDisplayTime] = useState(25 * 60);
  const [timeOn, setTimeOn] = useState(false);
  const [onBreak, setOnBreak] = useState(false);

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
            return prev - 1;
          });
          nextDate += second;
        }
      }, 30);
      localStorage.clear();
      localStorage.setItem("interval-id", `${interval}`);
    }
    if (timeOn) {
      clearInterval(localStorage.getItem("interval-id"));
    }

    setTimeOn(!timeOn);
  };
  const resetTime = () => {
    setDisplayTime(25 * 60);
    setTimeOn(false);
    // setTimeOn(false);
    // setBreakTime(5*60)
    // setBreakTime(5*60)
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
