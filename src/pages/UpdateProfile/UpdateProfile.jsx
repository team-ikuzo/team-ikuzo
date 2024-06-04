import React from 'react';
import styled from 'styled-components';
import { supabase } from '../../supabase';

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

function UpdateProfile() {
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

        </StProfile>
      </StMain>
    </StContainer>
  );
}

export default UpdateProfile;
