import styled from "styled-components";

export const MenuContainer = styled.div`
  background: #27272a;
  height: 100vh;
  width: 15%;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top: 5px solid #18181b;
  border-right: 5px solid #18181b;
  .icon {
    margin-right: 32px;
  }
`;

export const Section = styled.div`
  width: 100%;
  height: 42px;
  color: #bcbcbc;
  font-size: 1.25rem;
  display: flex;
  gap: 8px;
  justify-content: left;
  align-items: center;
  padding-left: 1rem;

  :hover {
    cursor: pointer;
    color: #a4d97e;
  }
`;
