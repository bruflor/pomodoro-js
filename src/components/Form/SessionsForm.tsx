import { CaretDown, CaretUp, Pencil } from "phosphor-react";
import { useState } from "react";
import { MyForm, TitleContainer, Inputscontainer } from "./style";

export const SessionsForm = () => {
  const [shrink, setshrink] = useState(false);
  const shrinkForm = () => {
    if (shrink) {
      return (
        <>
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
        </>
      );
    }
  };

  return (
    <>
      <MyForm className={shrink ? "small" : ""}>
        <TitleContainer>
          {/* <Pencil size={32} /> */}
          <h2>Edit my sessions</h2>
          <a
            onClick={() => {
              setshrink(!shrink);
            }}
          >
            {shrink ? <CaretDown size={24} /> : <CaretUp size={24} />}
          </a>
        </TitleContainer>
        <Inputscontainer>{shrinkForm()}</Inputscontainer>
        {/* <Inputscontainer>
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
        </button> */}
      </MyForm>
    </>
  );
};
