import { CaretDown, Pencil } from "phosphor-react";
import { MyForm, TitleContainer, Inputscontainer } from "./style";

export const SessionsForm = () => {
  return (
    <>
      <MyForm>
        <TitleContainer>
          {/* <Pencil size={32} /> */}
          <h2>Edit my sessions</h2>
          <a>
            <CaretDown size={24} />
          </a>
        </TitleContainer>
        <Inputscontainer>
          <div>
            <label>Focus session</label>
            <input />
          </div>
          <div>
            <label>Shor break session</label>
            <input />
          </div>
          <div>
            <label>Long break session</label>
            <input />
          </div>
        </Inputscontainer>
        <button type="submit" onClick={() => {}}>
          Save sessions
        </button>
      </MyForm>
    </>
  );
};
