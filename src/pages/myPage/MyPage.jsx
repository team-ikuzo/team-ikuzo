import React from 'react';
import {
  StContainer,
  StMain,
  StProfile,
  StProfileHeader,
  StProfilePhoto,
  StProfileInfo,
  StProfileTitle,
  StProfileLink,
  StIntroduction,
  StTag,
  StProfileTemperature,
  StTabs,
  StTabButton,
  StPosts
} from './StyledMyPage';
import { Card } from '../../components/Card';

function MyPage() {
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

          <StTag>Front-end</StTag>
          <StTag>Back-end</StTag>
          <StTag>Designer</StTag>
          <StTag>UI Designer</StTag>

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

export default MyPage;
