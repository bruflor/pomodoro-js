import styled from "styled-components";

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

//   export const HeaderContainer = styled.div``
//   export const HeaderContainer = styled.div``
