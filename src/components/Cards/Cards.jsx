import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabase';
import {
  NoResult,
  StCard,
  StCardContainer,
  StContent,
  StCount,
  StCountBox,
  StHashtags,
  StInfo,
  StNameCard,
  StProfileImage,
  StTitle
} from './StyledCard';

const Cards = ({ user, order, post }) => {
  // console.log(user);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  console.log(user);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('posts').select('*').eq('author_id', user.user_id);
      if (error) {
        console.log('Error fetching posts:', error);
      } else {
        console.log('Fetched posts:', data);
        const sortedPosts = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

        setPosts(sortedPosts);
      }
    };
    fetchData();
  }, []);

  // 최신순, 좋아요순 정렬
  useEffect(() => {
    if (order === 'latest') {
      const latestPosts = [...posts].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      setPosts(latestPosts);
    } else if (order === 'likes') {
      const likesPosts = [...posts].sort((a, b) => b.likes_count - a.likes_count);
      setPosts(likesPosts);
    }
  }, [order, posts]);

  return (
    <>
      {posts.length > 0 ? (
        posts.map((post) => {
          return (
            <StCardContainer key={post.id} onClick={() => navigate(`/post/${post.id}`)}>
              <StCard>
                <StHashtags>
                  {post.hashtags && post.hashtags.map((hashtag, index) => <p key={index}>{hashtag}</p>)}
                </StHashtags>
                <StTitle>{post.title}</StTitle>
                <StContent>{post.body}</StContent>
                <StNameCard>
                  <StProfileImage src={user.profile_image_path} />
                  <StInfo>
                    <p className="name">{user.display_name}</p>
                    <p className="job">{user.job}</p>
                  </StInfo>
                </StNameCard>
                <StCountBox>
                  <StCount>🖤{post.likes_count}</StCount>
                  {/* <StCount>💬{post.comments_count}</StCount> */}
                </StCountBox>
              </StCard>
            </StCardContainer>
          );
        })
      ) : (
        <NoResult></NoResult>
      )}
    </>
  );
};

export { Cards };
