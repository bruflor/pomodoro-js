import { TrashSimple, PencilSimple, PictureInPicture } from "phosphor-react";
import { Button } from "../Button/Button";
import category from "../../assets/fitness.svg";
import { Title } from "../Title/Title";

import {
  TaskActionContainer,
  TaskInfoContainer,
  HeaderContainer,
  ClockContainer,
  MainContainer,
  ClockHeader,
} from "./style";
import { Clock } from "../Clock/Clock";

export const Task = () => {
  return (
    <MainContainer>
      <HeaderContainer>
        <TaskInfoContainer>
          <img src={category}></img>
          <div>
            <h2>Task name</h2>
            <p>Frequency</p>
            <span>time spent | sessions</span>
          </div>
        </TaskInfoContainer>
        <TaskActionContainer>
          <TrashSimple />
          <PencilSimple />
          <Button>Complete task</Button>
        </TaskActionContainer>
      </HeaderContainer>
      <ClockContainer>
        <ClockHeader>
          <Title name={"Focus"} />
          {/* <PictureInPicture size={"1.5rem"} /> */}
        </ClockHeader>
        <Clock />
        <div></div>
      </ClockContainer>
    </MainContainer>
  );
};
