import { Page } from '@/components/Page';
import { supabase } from '@/supabase';
import { useDispatch } from 'react-redux';
import { StDiv } from './StyledLogin';

const Login = () => {
  const dispatch = useDispatch();
  const signInWithGithub = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: '/'
      }
    });
  };
  return (
    <Page>
      <StDiv>
        <h1>Login Page</h1>
        <button onClick={signInWithGithub}>눌러</button>
      </StDiv>
    </Page>
  );
};

export { Login };
