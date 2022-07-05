import { ClockContainer, MainContainer, FormContainer } from "./style";
import { MyTimer } from "../Clock/Timer/Timer";
import { SessionsForm } from "../Form/SessionsForm";
import { useState } from "react";

export const Task = () => {
  const [sessionsQuantity, setsessionsQuantity] = useState(3);
  const [focusSessionInput, setFocusSessionInput] = useState(25);
  const [shortBreakSessionInput, setShortBreakSessionInput] = useState(5);
  const [longBreakSession, setlongBreakSession] = useState(60);

  return (
    <MainContainer>
      <FormContainer>
        <SessionsForm>
          <fieldset>
            <label>How many sessions</label>
            <input
              value={sessionsQuantity}
              name="sessionsNumber"
              type="number"
              max={10}
              min={1}
              onChange={(event) =>
                setsessionsQuantity(Number(event.target.value))
              }
            />
          </fieldset>
          <fieldset>
            <label>Focus session (m)</label>
            <input
              value={focusSessionInput}
              type="number"
              max={60}
              min={1}
              maxLength={2}
              onChange={(event) =>
                setFocusSessionInput(Number(event.target.value))
              }
            />
          </fieldset>
          <fieldset>
            <label>Short break session (m)</label>
            <input
              value={shortBreakSessionInput}
              type="number"
              max={30}
              min={1}
              maxLength={2}
              onChange={(event) =>
                setShortBreakSessionInput(Number(event.target.value))
              }
            />
          </fieldset>
          <fieldset>
            <label>Long break session (m)</label>
            <input
              value={longBreakSession}
              type="number"
              max={240}
              min={30}
              maxLength={2}
              onChange={(event) =>
                setlongBreakSession(Number(event.target.value))
              }
            />
          </fieldset>
          {/* <button type="submit" onClick={() => {}}>
            Save sessions
          </button> */}
        </SessionsForm>
      </FormContainer>
      <ClockContainer>
        <MyTimer
          focusSession={focusSessionInput}
          shortBreakSession={shortBreakSessionInput}
          longBreakSession={longBreakSession}
          sessionsQuantity={sessionsQuantity}
        />
      </ClockContainer>
    </MainContainer>
  );
};
