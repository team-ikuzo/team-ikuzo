import { Card } from '@/components/Card';
import { Page } from '@/components/Page';
import dummy from '@/dummy/dummy.json';
import { StBackground, StDiv } from './StyledHome';

const Home = () => {
  return (
    <Page>
      <StBackground>
        <StDiv>
          {dummy.map((post, i) => (
            <Card key={i} post={post} />
          ))}
        </StDiv>
      </StBackground>
    </Page>
  );
};

export { Home };
