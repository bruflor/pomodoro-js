import "react-circular-progressbar/dist/styles.css";
import { ProgressBar } from "./ProgressBar/ProgressBar";
import { ClockContainer } from "./style";
import { MyTimer } from "./Timer/Timer";

export const Clock = () => {
  return (
    <ClockContainer>
      {/* the progress will be equal to my timer value */}
      <ProgressBar
        size={250}
        progress={20}
        strokeWidth={10}
        circleOneStroke={"#777777"}
        circleTwoStroke={"#A4D97E"}
        text=""
      />
      <MyTimer />
    </ClockContainer>
  );
};
