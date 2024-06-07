import styled from 'styled-components';

export const StForm = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const StInput = styled.div`
  width: 100%;
  margin: 16px 0;
  color: white;
  font-weight: 700;
`;

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
  width: 600px;
  padding: 70px 130px 80px 130px;
  background-color: #4c4c4c;
  border-radius: 20px;
`;

export const StButtons = styled.div`
  width: 100%;
  margin-top: 60px;

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
  }

  & button:hover {
    background-color: #6c6c6c;
  }
`;

export const StTitle = styled.h2`
  margin: 0 0 90px 0;
  font-size: 48px;
  font-weight: 900;
  color: white;
`;
