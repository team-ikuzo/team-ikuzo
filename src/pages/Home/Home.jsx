import { Card } from '@/components/Card';
import dummy from '@/dummy/dummy.json';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabase';
import { StyledHome } from './StyledHome';

const Home = () => {
  const navigate = useNavigate();

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  const createUserData = async () => {
    const result = await supabase.from('users').insert({ display_name: 'hello' });
    console.log(result);
  };

  return (
    <div>
      <StyledHome>Hello My Team!</StyledHome>

      <button onClick={signOut}>Log Out</button>
      <button onClick={createUserData}>가입하기</button>
      {dummy.map((post, i) => (
        <Card key={i} post={post} />
      ))}
    </div>
  );
};

export { Home };
