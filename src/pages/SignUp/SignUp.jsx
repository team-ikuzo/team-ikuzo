import { Input } from '@/components/LoginInput';
import { Page } from '@/components/Page';
import { supabase } from '@/supabase';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StBackground, StButtons, StDiv, StForm, StInput, StTitle } from './StyledSignUp';

export const SignUp = () => {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    passwordConfirm: ''
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = inputs;
    setLoading(true);
    try {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) return;
      alert('인증메일이 전송되었습니다. 메일을 확인해주세요.');
      navigate('/login');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Page>
      <StBackground>
        <StDiv>
          <StTitle>SIGN UP</StTitle>
          <StForm onSubmit={onSubmit}>
            <StInput>
              <Input name={'email'} label={'이메일'} onChange={onChange} type={'email'} value={inputs.email} />
            </StInput>
            <StInput>
              <Input
                name={'password'}
                label={'비밀번호'}
                onChange={onChange}
                type={'password'}
                value={inputs.password}
              />
            </StInput>
            <StInput>
              <Input
                name={'passwordConfirm'}
                label={'비밀번호 확인'}
                onChange={onChange}
                type={'password'}
                value={inputs.passwordConfirm}
              />
            </StInput>
            <StButtons>
              <button disabled={isLoading}>{isLoading ? '처리중...' : '회원가입'}</button>
            </StButtons>
          </StForm>
        </StDiv>
      </StBackground>
    </Page>
  );
};
