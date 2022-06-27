import { TrashSimple, PencilSimple } from "phosphor-react";
import { Button } from "../Button/Button";
import category from "../../assets/fitness.svg";
import {
  TaskActionContainer,
  TaskInfoContainer,
  HeaderContainer,
} from "./style";

export const Task = () => {
  return (
    <div>
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
    </div>
  );
};
