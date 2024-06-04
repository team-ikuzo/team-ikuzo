import { Page } from '@/components/Page';
import { supabase } from '@/supabase';
import { StDiv } from './StyledLogin';

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
    <Page>
      <StDiv>
        {/* <StInput>
          <Input name={} label={} type={} value={} ></Input>
        </StInput> */}

        <button onClick={signInWithGithub}>눌러</button>
      </StDiv>
    </Page>
  );
};

export { Login };
