import styled from 'styled-components';

export const OuterContainer = styled.div`
  /* display: flex; */
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const InnerContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 0fr 1fr;
  gap: 10px;
  width: 1500px;
  height: auto;
  min-height: 600px;
  background-color: #4c4c4c;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
  border-radius: 30px;
`;

export const RightPanel = styled.div`
  grid-row: 1/2;
  grid-column: 2 / -1;
  padding: 10px;
  color: white;
`;

export const LeftPanel = styled.div`
  grid-row: 1 / span 1;
  grid-column: 1 / 2;
  justify-content: center;
  align-items: center;
  height: auto;
  min-height: 500px;
  border-radius: 20px;
`;

export const StTitle = styled.div`
  margin-bottom: 30px;

  input {
    height: 50px;
    width: 100%;
    border: 2px solid black;
    font-size: 15px;
    border-radius: 15px;
    padding-left: 5px;
    margin-top: 5px;
    background-color: rgb(233, 233, 233);
    transition: background-color 0.8s ease;
    &:focus {
      background-color: beige;
      outline: none;
      box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }
  }
`;

export const StSelect = styled.div`
  margin-bottom: 20px;
  select {
    height: 32px;
    border: 2px solid black;
    font-size: 15px;
    border-radius: 15px;
    margin-top: 5px;
    padding-left: 5px;
    background-color: rgb(233, 233, 233);
  }
`;

export const StNotices = styled.div`
  margin-bottom: 20px;
  input {
    height: 80px;
    width: 100%;

    border: 2px solid black;
    font-size: 15px;
    border-radius: 15px;
    margin-top: 5px;
    margin-bottom: 20px;
    padding-left: 5px;
    background-color: rgb(233, 233, 233);
    transition: background-color 0.8s ease;
    &:focus {
      background-color: beige;
      outline: none;
      box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }
  }
`;

export const StBody = styled.div`
  color: white;
  margin-bottom: 10px;

  textarea {
    margin-top: 10px;
    width: 100%;
    min-height: 120px;
    height: auto;
    white-space: pre-wrap;
    background-color: rgb(233, 233, 233);
    border-radius: 20px;
    padding: 10px;
    color: black;
    transition: background-color 0.8s ease;
    resize: none;

    &:focus {
      background-color: beige;
      outline: none;
      box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }
  }
`;

export const StImageUpload = styled.div`
  color: white;
  margin-bottom: 20px;
  display: flex;
  input[type='file'] {
    width: 200px;
    height: 150px;
    display: none;
    width: 200px;
    height: 150px;
    background-color: #2c2c2c;
    padding: 10px;
    border: 3px dashed #7c7c7c;
    border-radius: 20px;
  }

  label {
    display: block;
    height: 24px;
    margin-bottom: 10px;
    margin-top: 30px;
    background-color: #2c2c2c;
    color: #fff;
    text-align: center;
    padding: 10px 0;
    width: 45%;
    border-radius: 6px;
    cursor: pointer;
  }
`;

export const StImageDeleteBtn = styled.button`
  display: block;
  margin-bottom: 10px;
  margin-top: 30px;
  margin-left: auto;
  background-color: #2c2c2c;
  color: #fff;
  text-align: center;
  padding: 10px 0;
  width: 45%;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  border: none;
`;

export const StButton = styled.button`
  background-color: rgb(233, 233, 233);
  border: 2px solid black;
  color: black;
  padding: 8px 20px;
  text-align: center;
  text-decoration: none;

  font-size: 16px;
  margin: 2px 2px;
  margin-top: 20px;
  cursor: pointer;
  border-radius: 20px;
  transition:
    transform 0.2s ease,
    background-color 0.2s ease;
  &:hover {
    transform: scale(1.1);
    background-color: cornsilk;
  }
`;
