import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPost } from '../../redux/slices/postSlice';
import styled from 'styled-components';

// 스타일드 컴포넌트
const PostContainer = styled.div`
  max-width: 60%;
  padding: 30px;
  margin: 0 auto;
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

const Post = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { post, loading, error } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  if (loading) return <div>로딩 중...</div>;
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
          <LikeButton>🤍</LikeButton>
          <div>126</div>
        </LikesSection>
      </TopSection>
      <PostTitle>{post.title}</PostTitle>
      <SectionTitle>프로젝트 및 팀 소개</SectionTitle>
      <PostingSection>{post.body}</PostingSection>
      <SectionTitle>모집 분야</SectionTitle>
      <HashContainer>
        {post.hashtags && post.hashtags.map((tag, index) => (
          <HashTags key={index}>{tag}</HashTags>
        ))}
      </HashContainer>
      <SectionTitle>미디어</SectionTitle>
      {/* 미디어 섹션 내용 추가 */}
    </PostContainer>
  );
};

export default Post;
