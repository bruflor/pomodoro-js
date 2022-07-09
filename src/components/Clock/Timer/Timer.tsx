import { Pause, Play, Repeat, Stop } from "phosphor-react";
import { useEffect, useState } from "react";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import {
  MainContainer,
  TimeContainer,
  MyTimerContainer,
  ButtonsContainer,
} from "./style";
import audio from "../../../assets/alarm-freesound.mp3";
//
interface MyTimerProps {
  focusSession: number;
  shortBreakSession: number;
  longBreakSession: number;
  sessionsQuantity: number;
}

export const MyTimer = ({
  focusSession,
  shortBreakSession,
  longBreakSession,
  sessionsQuantity,
}: MyTimerProps) => {
  const alarm = new Audio(audio);

  const [displayTime, setDisplayTime] = useState(0);
  const [sessionStatus, setSessionStatus] = useState("Focus");
  const [sessions, setSessions] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const sessionNumber = sessionsQuantity;
  const focusTime = focusSession;
  const shortBreakTime = shortBreakSession;
  const LongBreakTime = longBreakSession;

  const timeminutes = 60 * 1000; //one timeminutes;

  const controlTime = () => {
    // console.log("starting timer");
    setTimerOn(!timerOn);
    return;
  };

  useEffect(() => {
    if (timerOn) {
      if (sessionStatus === "Focus" && sessions < sessionNumber) {
        if (displayTime < focusTime) {
          // console.log(displayTime);
          setTimeout(() => {
            setDisplayTime(displayTime + 1);
          }, timeminutes);
        } else {
          setTimerOn(!timerOn);

          alarm.play();
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
          }, timeminutes);
        } else {
          alarm.play();
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
          }, timeminutes);
        } else {
        }
      }
    } else {
      return;
    }
  }, [displayTime, timerOn]);

  const reset = () => {
    setTimerOn(false);
    setSessions(0);
    setSessionStatus("Focus");
    setDisplayTime(0);
    // console.log(displayTime);
  };

  const reduceProgressBar = (refTime: number) => {
    return (refTime - displayTime) / refTime;
  };

  return (
    <MainContainer>
      <TimeContainer>
        <ProgressBar
          size={250}
          progress={
            sessionStatus === "Focus"
              ? reduceProgressBar(focusTime - 1)
              : sessionStatus === "Short break"
              ? reduceProgressBar(shortBreakTime - 1)
              : reduceProgressBar(LongBreakTime - 1)
          }
          strokeWidth={10}
          circleOneStroke={"#A4D97E"}
          circleTwoStroke={"#777777 "}
          text=""
        />
        <MyTimerContainer>
          {sessionStatus === "Focus" ? (
            <>
              <h1>{focusTime - displayTime} m</h1>
              <h2>{`Session: ${sessionStatus}`}</h2>
              <h3>{`Session ${sessions + 1}/${sessionNumber}`}</h3>
            </>
          ) : sessionStatus === "Short break" ? (
            <>
              <h1>{shortBreakTime - displayTime}</h1>
              <h2>{`Session: ${sessionStatus}`}</h2>
              <h3>{`Session: ${sessions + 1}`}</h3>
            </>
          ) : (
            <>
              <h1>{LongBreakTime - displayTime}</h1>
              <h2>{`Session: ${sessionStatus}`}</h2>
              <h3>{`Session: ${sessions}`}</h3>
            </>
          )}
        </MyTimerContainer>
      </TimeContainer>
      <ButtonsContainer>
        <button
          onClick={() => {
            reset();
          }}
        >
          <Repeat size={24} />
        </button>
        {/* <button
          onClick={() => {
            setTimerOn(false);
            setSessions(0);
            setSessionStatus("Focus");
            setDisplayTime(0);
          }}
        >
          <Repeat size={24} />
        </button> */}
        <button
          className="playPauseButton"
          onClick={() => {
            controlTime();
          }}
        >
          {timerOn ? <Pause size={40} /> : <Play size={40} />}
        </button>
        <button
          onClick={() => {
            setTimerOn(false);
          }}
        >
          <Stop size={24} />
        </button>
      </ButtonsContainer>
    </MainContainer>
  );
};
