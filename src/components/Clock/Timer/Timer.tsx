import { Pause, Play, Repeat } from "phosphor-react";
import { useEffect, useState } from "react";
//

export const MyTimer = () => {
  const [displayTime, setDisplayTime] = useState(0);
  const [sessionStatus, setSessionStatus] = useState("working");
  const [sessions, setSessions] = useState(0);

  const sessionNumber = 3;
  const focusTime = 25;
  const shortBreakTime = 5;
  const LongBreakTime = 60;

  const timeSetTime = 60 * 1000; //one minute;

  useEffect(() => {
    if (sessionStatus === "working" && sessions < sessionNumber) {
      if (displayTime < focusTime) {
        console.log(displayTime);
        setTimeout(() => {
          setDisplayTime(displayTime + 1);
        }, timeSetTime);
      } else {
        setSessionStatus("short break");
        console.log("Start break");
        setDisplayTime(0);
      }
    }
    //short break if
    else if (sessionStatus === "short break" && sessions < sessionNumber) {
      if (displayTime < shortBreakTime) {
        console.log(displayTime);
        setTimeout(() => {
          setDisplayTime(displayTime + 1);
        }, timeSetTime);
      } else {
        setSessionStatus("working");
        console.log("Start session");
        setSessions(sessions + 1);
        setDisplayTime(0);
      }
    }
    //Long break if
    else {
      if (displayTime < LongBreakTime) {
        setSessionStatus("Long Break");
        console.log(displayTime);
        console.log("Start Long Break");
        setTimeout(() => {
          setDisplayTime(displayTime + 1);
        }, timeSetTime);
      } else {
      }
    }
  }, [displayTime]);

  return (
    <div>
      {sessionStatus === "working" ? (
        <>
          <h1>{focusTime - displayTime}</h1>
          <h2>{`Status: ${sessionStatus}`}</h2>
          <h3>{`Session: ${sessions + 1}`}</h3>
        </>
      ) : sessionStatus === "short break" ? (
        <>
          <h1>{shortBreakTime - displayTime}</h1>
          <h2>{`Status: ${sessionStatus}`}</h2>
          <h3>{`Session: ${sessions + 1}`}</h3>
        </>
      ) : (
        <>
          <h1>{LongBreakTime - displayTime}</h1>
          <h2>{`Status: ${sessionStatus}`}</h2>
          <h3>{`Session: ${sessions}`}</h3>
        </>
      )}

      {/* <button onClick={controlTime}>
        play
        {timeOn ? <Pause size={32} /> : <Play size={32} />}
      </button> */}
      {/* <button onClick={resetTime}>
        <Repeat size={32} />
      </button> */}
    </div>
  );
};
