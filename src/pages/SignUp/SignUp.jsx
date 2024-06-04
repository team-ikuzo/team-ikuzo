import { Input } from '@/components/LoginInput';
import { Page } from '@/components/Page';
import { supabase } from '@/supabase';
import { useState } from 'react';
import { StBackground, StButtons, StDiv, StForm, StInput, StTitle } from './StyledSignUp';

export const SignUp = () => {
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
    try {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) return;
    } catch (error) {
      console.log(error);
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
              <button>회원가입</button>
            </StButtons>
          </StForm>
        </StDiv>
      </StBackground>
    </Page>
  );
};
