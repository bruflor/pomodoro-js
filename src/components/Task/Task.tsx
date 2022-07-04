import { ClockContainer, MainContainer, FormContainer } from "./style";
import { MyTimer } from "../Clock/Timer/Timer";

//mock to come from the form in the future
// const myData = {
//   sessionNumber: 3,
//   focusTime: 25,
//   shortBreakTime: 5,
//   LongBreakTime: 60,
// };

export const Task = () => {
  return (
    <MainContainer>
      <FormContainer>Meu formulario</FormContainer>
      <ClockContainer>
        <MyTimer />
      </ClockContainer>
    </MainContainer>
  );
};
