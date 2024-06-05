import { Input } from '@/components/LoginInput';
import { Page } from '@/components/Page';
import { supabase } from '@/supabase';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StDiv, StForm } from './StyledLogin';

const Login = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = inputs;
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      console.log(data, error);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
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
        <StForm onSubmit={onSubmit}>
          <Input name={'email'} label={'이메일'} onChange={onChange} type={'email'} value={inputs.email} />
          <Input name={'password'} label={'비밀번호'} onChange={onChange} type={'password'} value={inputs.password} />
          <button>로그인</button>
        </StForm>

        <button onClick={signInWithGithub}>깃허브 로그인</button>
      </StDiv>
    </Page>
  );
};

export { Login };
