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
import { Cards } from '../../components/Cards';
import { supabase } from '../../supabase';
import { useNavigate } from 'react-router-dom';

function MyPage() {
  const [users, setUsers] = useState([]);
  const [order, setOrder] = useState('');

  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const FetchData = async () => {
      setIsLoading(true);
      const {
        data: { user }
      } = await supabase.auth.getUser();
      console.log({ user });

      const { data, error } = await supabase.from('users').select('*').eq('user_id', user.id);
      if (error) {
        console.log('error =>', error);
      } else {
        console.log('data=>', data);
        setUsers(data);
      }
      setIsLoading(false);
    };
    FetchData();
  }, []);

  if (isLoading === true) {
    return <h1>로딩중</h1>;
  }

  return (
    <div>
      {users.map((user) => {
        console.log(user.profile_image_path);
        return (
          <div key={user.user_id}>
            <StContainer>
              <StMain>
                <StProfile>
                  <StProfileHeader>
                    <StProfilePhoto src={user.profile_image_path} alt={`${user.display_name}'s profile`} />

                    <StProfileInfo>
                      <StProfileTitle>{user.display_name}</StProfileTitle>
                      {/* <StProfileLink href="http://www.github.com">www.github.com</StProfileLink>
                      <StProfileLink href="http://www.velog.com">www.velog.com</StProfileLink> */}
                    </StProfileInfo>

                    <StProfileButton
                      onClick={() => {
                        navigate(`/UpdateProfile/${user.user_id}`);
                      }}
                    >
                      프로필 편집
                    </StProfileButton>
                  </StProfileHeader>

                  <StIntroduction>
                    <StIntroductionTitle>소개글</StIntroductionTitle>
                    {user.introduction}
                  </StIntroduction>

                  {user.hashtags.map((tag, index) => (
                    <StTag key={index}>{tag}</StTag>
                  ))}

                  <StTabs>
                    <StTabButton onClick={() => setOrder('latest')}>🕦최신순</StTabButton>
                    <StSectionDevider>|</StSectionDevider>
                    <StTabButton onClick={() => setOrder('likes')}>🖤좋아요순</StTabButton>
                  </StTabs>

                  <StPosts>
                    <Cards user={user} order={order} />
                  </StPosts>
                </StProfile>
              </StMain>
            </StContainer>
          </div>
        );
      })}
    </div>
  );
}

export default MyPage;
