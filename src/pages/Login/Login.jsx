import { supabase } from '@/supabase';
import { StyledLogin } from './StyledLogin';
const Login = () => {
  const signInWithGithub = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: '/'
      }
    });
  };
  return (
    <>
      <StyledLogin>Login Page</StyledLogin>
      <button onClick={signInWithGithub}>눌러</button>
    </>
  );
};

export { Login };
