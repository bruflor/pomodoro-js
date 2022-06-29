import "react-circular-progressbar/dist/styles.css";
import { ProgressBar } from "./ProgressBar/ProgressBar";
import { ClockContainer } from "./style";

export const Clock = () => {
  return (
    <ClockContainer>
      {/* the progress will be equal to my timer value */}
      <ProgressBar
        size={250}
        progress={80}
        strokeWidth={10}
        circleOneStroke={"#777777"}
        circleTwoStroke={"#A4D97E"}
      />
      <div> This will be my timer </div>
    </ClockContainer>
  );
};
