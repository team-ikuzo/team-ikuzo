import { Page } from '@/components/Page';
import { Card } from '@/components/PostCard';
import { supabase } from '@/supabase';
import { useEffect, useState } from 'react';
import { StBackground, StDiv } from './StyledHome';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('posts').select('*').limit(1);
      if (error) {
        console.error('Error fetching posts:', error);
      } else {
        console.log('Fetched posts:', data);
        const sortedPosts = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        setPosts(sortedPosts);
      }
    };
    fetchData();
  }, []);

  return (
    <Page>
      <StBackground>
        <StDiv>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            posts.map((post, i) => {
              console.log(post);
              return <Card key={i} post={post} />;
            })
          )}
        </StDiv>
      </StBackground>
    </Page>
  );
};

export { Home };
