import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  display: flex;
  align-items: center;
`;

export const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  justify-content: center;
  & h1 {
    font-size: 64px;
  }
`;

export const MyTimerContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  align-items: center;
`;

export const ButtonsContainer = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > button {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    padding: 8px;
    background: #f2efef;
    color: #aaaaaa;
    border: none;
    cursor: pointer;
    transition: 200ms;
  }
  & button:hover {
    transform: translateY(-4px);
    transition: 800ms;
  }
  .playPauseButton {
    width: 80px;
    height: 80px;
    background: #22731f;
    color: #a4d97e;
  }
`;
