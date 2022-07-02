import { ClockContainer, MainContainer, FormContainer } from "./style";
import { Clock } from "../Clock/Clock";

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
        <Clock />
      </ClockContainer>
    </MainContainer>
  );
};
