import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPost, toggleLike } from '../../redux/slices/postSlice';
import styled from 'styled-components';
import { supabase } from '@/supabase';
import Modal from './Modal'; // Modal 컴포넌트 임포트

// 스타일드 컴포넌트
const PostContainer = styled.div`
  max-width: 50%;
  height: auto;
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
  max-height: 250px;
`;

const ApplyButton = styled.button`
  background-color: #4caf50;
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

const Post = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { post, loading, error, likes } = useSelector((state) => state.post);
  const [userId, setUserId] = useState(null); // 현재 사용자 ID
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [application, setApplication] = useState({
    name: '',
    part: '',
    content: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { user }
      } = await supabase.auth.getUser();
      if (user) {
        setUserId(user.id);
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

  const handleSubmitApplication = async () => {
    if (userId) {
      try {
        const { payload } = await dispatch(submitApplication({
          userId,
          postId: id,
          hashtags: [application.part], // 배열로 변환
          body: application.content
        })).unwrap();
        console.log('Application submitted successfully:', payload);
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

  return (
    <PostContainer>
      <TopSection>
        <PostImage
          src={
            'https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2017%2F07%2Ftime-15-influential-video-game-characters-0.jpg?cbr=1&q=90'
          }
        />
        <UserInf>
          <UserName>{post.author_name}</UserName>
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
      <SectionTitle>프로젝트 및 팀 소개</SectionTitle>
      <PostingSection>{post.body}</PostingSection>
      <SectionTitle>모집 분야</SectionTitle>
      <HashContainer>
        {post.hashtags && post.hashtags.map((tag, index) => <HashTags key={index}>{tag}</HashTags>)}
      </HashContainer>
      <SectionTitle>미디어</SectionTitle>
      <MediaPart>
        <img
          style={{
            objectFit: 'contain',
            maxWidth: '400px'
          }}
          src="https://previews.123rf.com/images/toozdesign/toozdesign1710/toozdesign171000021/87433912-%EB%9D%BC%EC%9D%B8-%ED%85%9C%ED%94%8C%EB%A6%BF-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8.jpg"
          alt=""
        />
      </MediaPart>
      <ApplyButton onClick={handleApplyClick}>지원하기</ApplyButton>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <input
          type="text"
          placeholder="이름을 입력하세요"
          name="name"
          value={application.name}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="text"
          placeholder="지원 파트를 입력하세요"
          name="part"
          value={application.part}
          onChange={handleInputChange}
        />
        <br />
        <textarea
          placeholder="간단한 자기소개를 입력하세요"
          name="content"
          value={application.content}
          onChange={handleInputChange}
        />
        <br />
        <button onClick={handleSubmitApplication}>지원하기</button>
      </Modal>
    </PostContainer>
  );
};

export default Post;
