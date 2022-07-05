import { ClockContainer, MainContainer, FormContainer } from "./style";
import { MyTimer } from "../Clock/Timer/Timer";
import { SessionsForm } from "../Form/SessionsForm";
import { useState } from "react";

//mock to come from the form in the future
// const myData = {
//   sessionNumber: 3,
//   focusTime: 25,
//   shortBreakTime: 5,
//   LongBreakTime: 60,
// };

export const Task = () => {
  const [focusSessionInput, setFocusSessionInput] = useState(0);
  const [shortBreakSessionInput, setShortBreakSessionInput] = useState(0);
  const [longBreakSession, setlongBreakSession] = useState(0);

  return (
    <MainContainer>
      <FormContainer>
        <SessionsForm>
          <div>
            <label>Focus session</label>
            <input
              onChange={(event) =>
                setFocusSessionInput(Number(event.target.value))
              }
            />
          </div>
          <div>
            <label>Short break session</label>
            <input />
          </div>
          <div>
            <label>Long break session</label>
            <input />
          </div>
          <button
            type="submit"
            onClick={() => {
              console.log(focusSessionInput);
            }}
          >
            Save sessions
          </button>
        </SessionsForm>
      </FormContainer>
      <ClockContainer>
        <MyTimer />
      </ClockContainer>
    </MainContainer>
  );
};
