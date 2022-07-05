import { CaretDown, CaretUp, Pencil } from "phosphor-react";
import { useState } from "react";
import { MyForm, TitleContainer, Inputscontainer } from "./style";

interface SessionFormProps {
  children: React.ReactNode;
}
// interface FormEvent {}
export const SessionsForm = ({ children }: SessionFormProps) => {
  const [shrink, setshrink] = useState(false);
  const shrinkForm = () => {
    if (shrink) {
      return <>{children}</>;
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
            {shrink ? <CaretUp size={24} /> : <CaretDown size={24} />}
          </a>
        </TitleContainer>
        <Inputscontainer>{shrinkForm()}</Inputscontainer>
      </MyForm>
    </>
  );
};
