import React from 'react';
import styled from 'styled-components';
import { Card } from '../../components/Card';

const StContainer = styled.div`
  display: flex;
`;

const StMain = styled.div`
  flex: 1;
  background-color: #f5f5f5;
  padding: 20px;
`;

const StProfile = styled.div`
  background-color: #333;
  /* color: white; */
  padding: 20px;
  border-radius: 8px;
`;

const StProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const StProfilePhoto = styled.div`
  width: 170px;
  height: 170px;
  background-color: white;
  border-radius: 20%;
`;

const StProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  margin-left: 30px;
`;

const StProfileTitle = styled.h1`
  margin-bottom: 10px;
  color: white;
`;

const StProfileLink = styled.a`
  margin: 5px 0;
  color: white;

  &:hover {
    text-decoration: underline;
  }
`;

const StIntroduction = styled.p`
  margin-top: 0;
  color: white;
`;

const StTag = styled.span`
  background-color: white;
  color: black;
  padding: 5px 10px;
  border-radius: 24px;
  margin-right: 5px;
`;

const StProfileTemperature = styled.div`
  display: flex;
  align-items: center;
`;

const StTabs = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  margin: 20px 0;
  border-top: 1px solid;
  border-bottom: 1px solid;
`;

const StTabButton = styled.button`
  background-color: white;
  color: black;
  border: none;
  padding: 10px 20px;
  margin: 0 5px;
  border-radius: 5px;
  cursor: pointer;
`;

const StPosts = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

function MyPages() {
  return (
    <StContainer>
      <StMain>
        <StProfile>
          <StProfileHeader>
            <StProfilePhoto />

            <StProfileInfo>
              <StProfileTitle>James</StProfileTitle>
              <StProfileLink href="http://www.github.com">www.github.com</StProfileLink>
              <StProfileLink href="http://www.velog.com">www.velog.com</StProfileLink>
            </StProfileInfo>

            <StProfileTemperature>
              <button>프로필 편집</button>
            </StProfileTemperature>
          </StProfileHeader>

          <StIntroduction>
            <h3>소개글</h3>
            Lorem ipsum dolor sit amet consectetur. Ullamcorper mollis faucibus aenean sit cras. Egestas
          </StIntroduction>

          <div className="tags">
            <StTag>Front-end</StTag>
            <StTag>Back-end</StTag>
            <StTag>Designer</StTag>
            <StTag>UI Designer</StTag>
          </div>

          <StTabs>
            <StTabButton>최신순</StTabButton>
            <StTabButton>좋아요순</StTabButton>
          </StTabs>

          <StPosts>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </StPosts>
        </StProfile>
      </StMain>
    </StContainer>
  );
}

export default MyPages;
