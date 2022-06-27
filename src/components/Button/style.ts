import styled from "styled-components";

// interface ButtonProps {
//   background: string;
//   border: string;
//   color: string;
//   width: string;
// }

export const GreenButton = styled.button`
  border: 1px solid #6ebf49;
  border-radius: 8px;
  background: none;
  color: #6ebf49;
  font-size: 1rem;
  padding: 8px;
  height: 60px;
  width: 200px;
  transition-duration: 150ms;

  &:hover {
    border: none;
    background: #6ebf49;
    color: #22731f;
    cursor: pointer;
    transition-duration: 600ms;
    transform: translateY(-4px);
  }
`;
