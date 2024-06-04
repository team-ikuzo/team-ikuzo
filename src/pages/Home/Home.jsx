import { Card } from '@/components/Card';
import dummy from '@/dummy/dummy.json';
import { StyledHome } from './StyledHome';

const Home = () => {
  return (
    <div>
      <StyledHome>Hello My Team!</StyledHome>

      {dummy.map((post, i) => (
        <Card key={i} post={post} />
      ))}
    </div>
  );
};

export { Home };
