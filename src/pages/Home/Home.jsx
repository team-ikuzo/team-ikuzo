import { Card } from '@/components/Card';
import { Page } from '@/components/Page';
import { supabase } from '@/supabase';
import { useQuery } from '@tanstack/react-query';
import { StBackground, StDiv } from './StyledHome';

const Home = () => {
  const {
    data: posts,
    isLoading,
    error,
    isFetching
  } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const { data, error } = await supabase.from('posts').select('*');
      return data;
    }
  });
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
