import styled from 'styled-components';

export const StContainer = styled.div`
  display: flex;
`;

export const StMain = styled.div`
  flex: 1;
  background-color: #f5f5f5;
  padding: 20px;
`;

export const StProfile = styled.div`
  background-color: #333;
  /* color: white; */
  padding: 20px;
  border-radius: 8px;
`;

export const StProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const StProfilePhoto = styled.div`
  width: 170px;
  height: 170px;
  background-color: white;
  border-radius: 20%;
`;

export const StProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  margin-left: 30px;
`;

export const StProfileTitle = styled.h1`
  font-size: 60px;
  margin-bottom: 10px;
  color: white;
`;

export const StProfileLink = styled.a`
  margin: 5px 0;
  color: white;

  &:hover {
    text-decoration: underline;
  }
`;

export const StIntroduction = styled.p`
  margin: 20px;
  color: white;
`;

export const StTag = styled.span`
  background-color: white;
  color: black;
  padding: 5px 10px;
  border-radius: 24px;
  margin-right: 5px;
`;

export const StProfileTemperature = styled.div`
  display: flex;
  align-items: center;
`;

export const StTabs = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  margin: 20px 0;
  border-top: 1px solid;
  border-bottom: 1px solid;
`;

export const StTabButton = styled.button`
  background-color: white;
  color: black;
  border: none;
  padding: 10px 20px;
  margin: 0 5px;
  border-radius: 5px;
  cursor: pointer;
`;

export const StPosts = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;
