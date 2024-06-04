import styled from 'styled-components';

export const StNavBar = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: 50px;
  background-color: #2d2d2d;

  & button {
    padding: 4px 10px;
    background-color: white;
    color: #2d2d2d;
    font-size: 12px;
    font-weight: 700;
    border-radius: 10px;
    border: none;
    cursor: pointer;
  }

  & button:hover {
    background-color: #d9d9d9;
  }
`;
