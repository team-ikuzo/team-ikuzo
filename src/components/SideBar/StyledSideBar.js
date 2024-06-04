import styled from 'styled-components';

export const StDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-top: 50px;
  position: fixed;
  top: 0;
  left: 0;
  width: 50px;
  height: 100%;
  background-color: #2d2d2d;
  & button {
    cursor: pointer;
    background-color: transparent;
    border: none;
    & svg {
      width: 32px;
      height: 32px;
      fill: white;
    }
  }

  & button:hover {
    & svg {
      fill: #d9d9d9;
    }
  }
`;
