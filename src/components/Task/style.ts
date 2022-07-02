import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const ClockContainer = styled.div`
  background: #27272a;
  width: 600px;
  height: 550px;
  border-radius: 16px;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding: 16px; */
`;
export const ClockHeader = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #777777;
  padding: 16px;
  justify-content: center;
`;
export const FormContainer = styled.div`
  height: 100px;
  width: 100%;
  background: #27272a;
  padding: 8px;
  display: flex;
  align-items: center;
  /* background: red; */
`;
