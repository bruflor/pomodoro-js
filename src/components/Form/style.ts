import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  gap: 16px;
  & a {
    cursor: pointer;
  }
  & a:hover {
    color: #6ebf49;
  }
`;
export const MyForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: 200px; */
  background: #27272a;
  display: flex;
  justify-content: center;
  gap: 8px;
  max-height: 200px;
  padding: 32px;
  transition: 0.3s;

  & button {
    border: 1px solid #6ebf49;
    background: none;
    height: 32px;
    width: 150px;

    border-radius: 8px;
    color: #6ebf49;
  }
  & button:hover {
    background: #6ebf49;
    color: white;
    cursor: pointer;
  }
  & .small {
    height: 60px;
    max-height: 60px;
  }
`;
export const Inputscontainer = styled.section`
  display: flex;
  align-items: flex-end;
  justify-content: center;

  gap: 32px;
  & fieldset {
    display: flex;
    flex-direction: column;
    border: none;
    text-align: center;
  }
  & input {
    border: 1px solid #a4d97e;
    background: #18181b;
    border-radius: 8px;
    width: 180px;
    height: 30px;
    color: white;
    text-align: center;
  }
`;
