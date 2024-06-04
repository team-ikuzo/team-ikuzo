import styled from 'styled-components';

export const StBackground = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #1d1f21;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 680px;
  padding: 90px 170px 120px 170px;
  background-color: #4c4c4c;
  border-radius: 20px;
`;

export const StInput = styled.div`
  width: 100%;
  margin: 16px 0;
  color: white;
  font-weight: 700;
`;

export const StForm = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const StButtons = styled.div`
  width: 100%;

  & button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    font-size: 16px;
    width: 100%;
    height: 50px;
    border-radius: 25px;
    cursor: pointer;
    border: 1px solid white;
    background-color: #4c4c4c;
    color: white;
    margin: 20px 0;
    & svg {
      position: absolute;
      left: 16px;
      height: 24px;
      fill: white;
    }
  }

  & button:hover {
    background-color: #6c6c6c;
  }

  & button.login {
    margin-top: 40px;
    color: #4c4c4c;
    background-color: white;
    font-weight: 700;
    border: none;
  }

  & button.login:hover {
    background-color: #d9d9d9;
  }
`;

export const StTitle = styled.h2`
  margin: 0 0 90px 0;
  font-size: 48px;
  font-weight: 900;
  color: white;
`;
