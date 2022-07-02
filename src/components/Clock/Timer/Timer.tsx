import { Pause, Play, Repeat, Stop } from "phosphor-react";
import { useEffect, useState } from "react";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { MainContainer, TimeContainer, MyTimerContainer } from "./style";

//

export const MyTimer = () => {
  const [displayTime, setDisplayTime] = useState(0);
  const [sessionStatus, setSessionStatus] = useState("Focus");
  const [sessions, setSessions] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const sessionNumber = 3;
  const focusTime = 25;
  const shortBreakTime = 5;
  const LongBreakTime = 60;

  const minute = 1 * 1000; //one minute;

  const controlTime = () => {
    // console.log("starting timer");
    setTimerOn(!timerOn);
  };

  useEffect(() => {
    if (timerOn) {
      if (sessionStatus === "Focus" && sessions < sessionNumber) {
        if (displayTime < focusTime) {
          console.log(displayTime);
          setTimeout(() => {
            setDisplayTime(displayTime + 1);
          }, minute);
        } else {
          setSessionStatus("Short break");
          // console.log("Start break");
          setDisplayTime(0);
        }
      }
      //Short break if
      else if (sessionStatus === "Short break" && sessions < sessionNumber) {
        if (displayTime < shortBreakTime) {
          console.log(displayTime);
          setTimeout(() => {
            setDisplayTime(displayTime + 1);
          }, minute);
        } else {
          setSessionStatus("Focus");
          // console.log("Start session");
          setSessions(sessions + 1);
          setDisplayTime(0);
        }
      }
      //Long break if
      else {
        if (displayTime < LongBreakTime) {
          setSessionStatus("Long Break");
          // console.log(displayTime);
          // console.log("Start Long Break");
          setTimeout(() => {
            setDisplayTime(displayTime + 1);
          }, minute);
        } else {
        }
      }
    }
  }, [displayTime, timerOn]);
  return (
    <MainContainer>
      <TimeContainer>
        <ProgressBar
          size={250}
          progress={20}
          strokeWidth={10}
          circleOneStroke={"#777777"}
          circleTwoStroke={"#A4D97E"}
          text=""
        />
        <MyTimerContainer>
          {sessionStatus === "Focus" ? (
            <>
              <h1>{focusTime - displayTime}</h1>
              <h2>{`Session: ${sessionStatus}`}</h2>
              <h3>{`Session ${sessions + 1}/${sessionNumber}`}</h3>
            </>
          ) : sessionStatus === "Short break" ? (
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
        </MyTimerContainer>
      </TimeContainer>

      <button
        onClick={() => {
          setSessions(0);
          setDisplayTime(0);
          setSessionStatus("Focus");
          setTimerOn(false);
        }}
      >
        <Repeat size={32} />
      </button>
      <button
        onClick={() => {
          controlTime();
        }}
      >
        {timerOn ? <Pause size={32} /> : <Play size={32} />}
      </button>
      <button
        onClick={() => {
          setTimerOn(false);
        }}
      >
        <Stop size={32} />
      </button>
    </MainContainer>
  );
};
