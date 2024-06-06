import { useEffect, useState } from 'react';
import { supabase } from '@/supabase';

import { Page } from '@/components/Page';
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
          {/* {posts.map((post) => (
            <Card key={post.id} post={post} />
          ))} */}
        </StDiv>
      </StBackground>
    </Page>
  );
};

export { Home };
