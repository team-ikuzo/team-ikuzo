import React, { useEffect, useState } from 'react';
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
  StIntroductionTitle,
  StTag,
  StProfileButton,
  StSectionDevider,
  StTabs,
  StTabButton,
  StPosts
} from './StyledMyPage';
import { Card } from '../../components/Card';
import { supabase } from '../../supabase';

function MyPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const FetchData = async () => {
      const { data, error } = await supabase.from('users').select('*');
      if (error) {
        console.log('error =>', error);
      } else {
        console.log('data=>', data);
        setUsers(data);
      }
    };
    FetchData();
  }, []);

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

            <StProfileButton>프로필 편집</StProfileButton>
          </StProfileHeader>

          <StIntroduction>
            <StIntroductionTitle>소개글</StIntroductionTitle>
            Lorem ipsum dolor sit amet consectetur. Ullamcorper mollis faucibus aenean sit cras. Egestas
          </StIntroduction>

          <StTag>Front-end</StTag>
          <StTag>Back-end</StTag>
          <StTag>Designer</StTag>
          <StTag>UI Designer</StTag>

          <StTabs>
            <StTabButton>최신순</StTabButton>
            <StSectionDevider>|</StSectionDevider>
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
