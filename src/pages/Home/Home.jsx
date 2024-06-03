import { Card } from '@/components/Card';
import dummy from '@/dummy/dummy.json';
import { supabase } from '../../supabase';
import { StyledHome } from './StyledHome';

const Home = () => {
  const createUserData = async () => {
    const result = await supabase.from('users').insert({ display_name: 'hello' });
    console.log(result);
  };

  return (
    <div>
      <StyledHome>Hello My Team!</StyledHome>

      <button onClick={createUserData}>가입하기</button>
      {dummy.map((post, i) => (
        <Card key={i} post={post} />
      ))}
    </div>
  );
};

export { Home };
