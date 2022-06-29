import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
`;

export const TaskActionContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  color: #6ebf49;
  font-size: 1.25rem;
`;

export const TaskInfoContainer = styled.div`
  display: flex;
  gap: 16px;

  & > h2 {
    color: #6ebf49;
    font-size: 1.5rem;
    font-weight: 400;
  }

  & > p {
    font-size: 1rem;
  }

  & > span {
    font-size: 0.8rem;
  }
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
  /* padding: 16px; */
`;
export const ClockHeader = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #777777;
  padding: 16px;
  justify-content: center;
`;
//   export const HeaderContainer = styled.div``
