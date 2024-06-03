import styled from "styled-components";

export const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InnerContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 0fr 1fr;
  gap: 10px;
  width: 900px;
  height: auto;
  background-color: #4c4c4c;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  border-radius: 30px;
`;

export const LeftPanel = styled.div`
  grid-row: 1 / span 1;
  grid-column: 1 / 2;
  padding: 10px;
  color: white;
`;

export const RightPanel = styled.div`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 650px;
  width: 650px;
  border: 1px solid white;
  border-radius: 20px;
`;

export const BottomPanel = styled.div`
  grid-row: 2 / 3;
  grid-column: 1 / 3;
  padding: 20px;
`;

export const StTitle = styled.div`
  margin-bottom: 20px;
`;

export const StSelect = styled.div`
  margin-bottom: 20px;
`;

export const StNotices = styled.div`
  margin-bottom: 20px;
`;

export const StBody = styled.div`
  color: white;
  textarea {
    width: 100%;
    height: 200px;
  }
`;
