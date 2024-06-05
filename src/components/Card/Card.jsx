import { useEffect, useState } from 'react';
import { supabase } from '../../supabase';
import {
  StCard,
  StContent,
  StCount,
  StCountBox,
  StHashtags,
  StInfo,
  StNameCard,
  StProfileDummyImage,
  StTitle
} from './StyledCard';

const Card = ({ users, order }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const FetchData = async () => {
      const {
        data: { user }
      } = await supabase.auth.getUser();
      console.log({ user });

      const { data, error } = await supabase.from('posts').select('*').eq('author_id', user.id);
      if (error) {
        console.log('error =>', error);
      } else {
        console.log('data=>', data);
        setPosts(data);
      }
    };
    FetchData();
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
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <StCard>
              <StHashtags>
                {post.hashtags && post.hashtags.map((hashtag, index) => <p key={index}>{hashtag}</p>)}
              </StHashtags>
              <StTitle>{post.title}</StTitle>
              <StContent>{post.body}</StContent>
              <StNameCard>
                <StProfileDummyImage src={users[0].profile_image_path} />
                <StInfo>
                  <p className="name">{users[0].display_name}</p>
                  <p className="job">{users[0].job}</p>
                </StInfo>
              </StNameCard>
              <StCountBox>
                <StCount>🖤{post.likes_count}</StCount>
                <StCount>💬{post.comments_count}</StCount>
              </StCountBox>
            </StCard>
          </div>
        );
      })}
    </>
  );
};

export { Card };
