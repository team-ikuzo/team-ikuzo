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
  margin-top: 30px;

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

  & button.save {
    color: #4c4c4c;
    background-color: white;
    font-weight: 700;
    border: none;
  }

  & button.save:hover {
    background-color: #d9d9d9;
  }
`;

export const StTitle = styled.h2`
  margin: 0 0 32px 0;
  font-size: 48px;
  font-weight: 900;
  color: white;
`;

export const StDefaultPreview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 240px;
  color: white;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='20' ry='20' stroke='white' stroke-width='8' stroke-dasharray='6%2c 24' stroke-dashoffset='18' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 20px;
`;

export const StPreview = styled.img`
  width: 240px;
  height: 240px;
  object-fit: cover;
`;

export const StLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  border-radius: 20px;
  border: 1px solid white;
  cursor: pointer;

  margin: 16px 0 16px 0;
  font-size: 16px;
  color: white;

  &:hover {
    background-color: #6c6c6c;
  }
`;
