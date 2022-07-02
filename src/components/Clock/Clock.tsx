import "react-circular-progressbar/dist/styles.css";
import { ProgressBar } from "./ProgressBar/ProgressBar";
import { ClockContainer } from "./style";
import { MyTimer } from "./Timer/Timer";

export const Clock = () => {
  return (
    <ClockContainer>
      {/* the progress will be equal to my timer value */}

      <MyTimer />
    </ClockContainer>
  );
};
