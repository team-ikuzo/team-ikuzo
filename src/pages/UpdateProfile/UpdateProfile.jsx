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
              <StProfileTitle>
                <input type='text'>원래 이름 불러오기</input>
              </StProfileTitle>
              <StProfileLink href="http://www.github.com"><input type='text'>원래 주소 불러오기</input></StProfileLink>
              <StProfileLink href="http://www.velog.com"><input type='text'>원래 주소 불러오기</input></StProfileLink>
            </StProfileInfo>

            <StProfileTemperature>
              <button>편집 종료</button>
            </StProfileTemperature>
          </StProfileHeader>

          <StIntroduction>
            <h3>소개글</h3>
            <input type='text'>원래 소개글 불러오기</input>
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
