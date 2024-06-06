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
  padding: 20px;
  border-radius: 8px;
`;

export const StProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const StProfilePhoto = styled.img`
  width: 170px;
  height: 170px;

  border-radius: 20%;
`;

export const StProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  margin-left: 30px;
`;

export const StProfileTitle = styled.h1`
  font-size: 60px;
  font-weight: bolder;
  margin-bottom: 20px;
  color: white;
`;

export const StProfileLink = styled.a`
  margin: 5px 0;
  color: white;
  display: inline;

  &:hover {
    text-decoration: underline;
  }
`;

export const StIntroduction = styled.p`
  margin: 20px 0 30px 0;
  color: white;
`;

export const StIntroductionTitle = styled.h3`
  font-size: 25px;
  margin-bottom: 20px;
  font-weight: bold;
`;

export const StTag = styled.span`
  background-color: white;
  color: black;
  padding: 5px 10px;
  border-radius: 24px;
  margin-right: 5px;
  font-weight: bold;
`;

export const StProfileButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #f5f5f5;
  color: #333;
  font-weight: bold;

  &:hover {
    background-color: #e0e0e0;
  }

  &:active {
    background-color: #d0d0d0;
  }
`;

export const StTabs = styled.div`
  color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px 0;
  border-top: 1px solid;
  border-bottom: 1px solid;
  padding: 10px 0;
`;

export const StTabButton = styled.button`
  background-color: white;
  color: black;
  padding: 10px 20px;
  margin: 0 5px;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }

  &:active {
    background-color: #d0d0d0;
  }
`;

export const StSectionDevider = styled.div`
  background-color: white;
  height: 20px;
  width: 2px;
  color: transparent;
`;

export const StPosts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
