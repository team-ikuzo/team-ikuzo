import { Input } from '@/components/LoginInput';
import { Page } from '@/components/Page';
import { supabase } from '@/supabase';
import { useState } from 'react';
import { StForm } from './StyledSignUp';

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
      <StForm onSubmit={onSubmit}>
        <Input name={'email'} label={'이메일'} onChange={onChange} type={'email'} value={inputs.email} />
        <Input name={'password'} label={'비밀번호'} onChange={onChange} type={'password'} value={inputs.password} />
        <Input
          name={'passwordConfirm'}
          label={'비밀번호 확인'}
          onChange={onChange}
          type={'password'}
          value={inputs.passwordConfirm}
        />
        <button>회원가입</button>
      </StForm>
    </Page>
  );
};
