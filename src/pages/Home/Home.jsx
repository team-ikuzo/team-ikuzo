import { Page } from '@/components/Page';
import { Card } from '@/components/PostCard';
import { supabase } from '@/supabase';
import { useQuery } from '@tanstack/react-query';
import { StBackground, StDiv } from './StyledHome';

const Home = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: () => supabase.from('posts').select(`*, users(display_name, profile_image_path)`)
  });
  const posts = data?.data ?? [];
  console.log(posts);

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
