import { Page } from '@/components/Page';
import { supabase } from '@/supabase';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { fetchPost, setHashtags, setHashtagsDelete, submitApplication, toggleLike } from '../../redux/slices/postSlice';
import { Assignments } from './Assignments';
import Modal from './Modal'; // Modal 컴포넌트 임포트

// 스타일드 컴포넌트
const PostContainer = styled.div`
  width: 50%;
  height: 100%;
  padding: 30px;
  margin: 30px auto;
  border: 1px solid #ddd;
  border-radius: 15px;
  background-color: #4c4c4c;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: white;
`;

const PostImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const TopSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const UserInf = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`;

const UserName = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const UserJob = styled.div`
  font-size: 16px;
  color: #aaa;
`;

const LikesSection = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  font-size: 24px;
`;

const LikeButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.2);
  }

  &.liked {
    color: red;
  }
`;

const PostTitle = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
`;
const PostNotice = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const PostNoticeBpdy = styled.h1`
  font-size: 15px;
  /* font-weight: bold; */
  margin-bottom: 10px;
`;

const SectionTitle = styled.h2`
  font-size: 22px;
  margin-bottom: 10px;
  font-weight: bold;
`;

const PostingSection = styled.div`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const HashContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

const HashTags = styled.div`
  border-radius: 12px;
  padding: 6px 12px;
  background-color: white;
  color: black;
  font-size: 14px;
  font-weight: bold;
`;

const MediaPart = styled.div`
  max-width: 300px;
  height: auto;
`;

const ApplyButton = styled.button`
  margin-top: 20px;
  font-weight: bold;
  background-color: #3a5240;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
  transition: background-color 0.3s;
  border: 1px solid #45a04941;

  &:hover {
    background-color: #45a049;
  }
`;

const SelectedHashtagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 10px;
`;

const SelectedHashtag = styled.div`
  background-color: #fff;
  color: #000;
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 14px;
  cursor: pointer;
`;

const StSelect = styled.div`
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

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const Label = styled.label`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 300px;
  resize: none;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  margin-top: 20px;
`;

const SubmitButton = styled.button`
  background-color: #2d3b2d;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

const CloseButton = styled.button`
  background-color: #545454;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e53935;
  }
`;

const StBackground = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #1d1f21;
  display: flex;
  justify-content: center;
`;

const Post = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { post, loading, error, likes, hashtags } = useSelector((state) => state.post);
  const [userId, setUserId] = useState(null); // 현재 사용자 ID
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [application, setApplication] = useState({
    content: ''
  });
  const [username, setUsername] = useState(null);
  console.log(hashtags);

  useEffect(() => {
    const fetchData = async () => {
      setUsername('로딩중...');
      const {
        data: { user }
      } = await supabase.auth.getUser();
      const postData = await supabase.from('posts').select('*').eq('id', id).single();
      console.log(postData);
      if (user) {
        setUserId(user.id);
        const { data } = await supabase
          .from('users')
          .select('display_name')
          .eq('user_id', postData.data.author_id)
          .single();
        setUsername(data.display_name);
      } else {
        console.error('No user found');
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  const handleLikeClick = () => {
    if (userId) {
      dispatch(toggleLike({ postId: id, userId }));
    } else {
      console.error('User ID is null');
    }
  };

  const handleApplyClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApplication((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    if (hashtags.includes(selectedValue)) {
      dispatch(setHashtagsDelete(selectedValue));
    } else {
      dispatch(setHashtags(selectedValue));
    }
  };

  const handleSubmitApplication = async () => {
    if (userId) {
      try {
        await dispatch(
          submitApplication({
            userId,
            postId: id,
            hashtags,
            body: application.content
          })
        ).unwrap();
        console.log('Application submitted successfully');
        setIsModalOpen(false);
      } catch (error) {
        console.error('Application submission error:', error);
      }
    } else {
      console.error('User ID is null');
    }
  };

  const isLiked = likes.some((like) => like.post_id === id && like.user_id === userId);

  if (loading) return <div>NOW LOADING....</div>;
  if (error) return <div>게시글을 찾을 수 없습니다.</div>;
  if (!post) return <div>게시글이 존재하지 않습니다.</div>;

  console.log(post.post_image_url);

  return (
    <Page>
      <StBackground>
        <PostContainer>
          <TopSection>
            <PostImage src={post.users.profile_image_path || 'https://via.placeholder.com/800'} alt="Author profile" />
            <UserInf>
              <UserName>{username}</UserName>
              <UserJob>{post.job}</UserJob>
            </UserInf>
            <LikesSection>
              <LikeButton onClick={handleLikeClick} className={isLiked ? 'liked' : ''}>
                {isLiked ? '❤️' : '🤍'}
              </LikeButton>
              <div>{post.likes_count}</div>
            </LikesSection>
          </TopSection>
          <PostTitle>{post.title}</PostTitle>
          <PostNotice>공지사항</PostNotice>
          <PostNoticeBpdy> {post.notice}</PostNoticeBpdy>
          <SectionTitle>프로젝트 및 팀 소개</SectionTitle>
          <PostingSection>{post.body}</PostingSection>
          <SectionTitle>모집 분야</SectionTitle>
          <HashContainer>
            {post.hashtags && post.hashtags.map((tag, index) => <HashTags key={index}>{tag}</HashTags>)}
          </HashContainer>
          <SectionTitle>미디어</SectionTitle>
          <MediaPart>
            {post.post_image_url ? (
              <img
                style={{
                  objectFit: 'contain',
                  maxWidth: '400px'
                }}
                src={post.post_image_url}
                alt="Post media"
              />
            ) : (
              <div>첨부 이미지가 없습니다.</div>
            )}
          </MediaPart>
          <ApplyButton onClick={handleApplyClick}>지원하기</ApplyButton>
          <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
            <ModalContent>
              <Label>지원 파트를 선택하세요</Label>
              <StSelect>
                <select name="hashtag" onChange={handleSelectChange}>
                  <option value="Front-end">Front-end</option>
                  <option value="Back-end">Back-end</option>
                  <option value="Python">Python</option>
                  <option value="Java">Java</option>
                  <option value="Kotlin">Kotlin</option>
                  <option value="Spring">Spring</option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="React">React</option>
                  <option value="NextJs">NextJs</option>
                  <option value="TypeScript">TypeScript</option>
                  <option value="Deep-learning">Deep-learning</option>
                  <option value="DataAnalysis">DataAnalysis</option>
                  <option value="UI/UX-Designer">UI/UX-Designer</option>
                  <option value="Unity">Unity</option>
                  <option value="C">C</option>
                </select>
              </StSelect>
              <SelectedHashtagsContainer>
                {hashtags.map((hashtag, index) => (
                  <SelectedHashtag key={index} onClick={() => dispatch(setHashtagsDelete(hashtag))}>
                    {hashtag}
                  </SelectedHashtag>
                ))}
              </SelectedHashtagsContainer>
              <Label style={{ marginBottom: '10px' }}>지원사항</Label>
              <TextArea
                placeholder="간단한 자기소개를 입력하세요."
                name="content"
                value={application.content}
                onChange={handleInputChange}
              />
              <ButtonContainer>
                <SubmitButton onClick={handleSubmitApplication}>지원하기</SubmitButton>
                <CloseButton onClick={handleCloseModal}>닫기</CloseButton>
              </ButtonContainer>
            </ModalContent>
          </Modal>
          {post?.author_id === userId && <Assignments postId={id} />}
        </PostContainer>
      </StBackground>
    </Page>
  );
};

export default Post;
