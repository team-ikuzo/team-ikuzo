import { Card } from '@/components/Card';
import dummy from '@/dummy/dummy.json';
import { StyledHome } from './StyledHome';

const Home = () => {
  return (
    <div>
      <h1>변경사항</h1>
      <StyledHome>Hello My Team!</StyledHome>

      {dummy.map((post, i) => (
        <Card key={i} post={post} />
      ))}
    </div>
  );
};

export { Home };
