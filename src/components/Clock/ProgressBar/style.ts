import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

  .svg {
    display: block;
    margin: 20px auto;
    max-width: 100%;
  }

  .circular-bg {
    fill: none;
  }

  .circular-timer {
    fill: none;
  }

  .percentage {
    font-size: 2rem;
    text-anchor: middle;
    fill: #fff;
    font-weight: bold;
  }
`;
