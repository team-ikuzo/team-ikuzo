import { Input } from '@/components/LoginInput';
import { Page } from '@/components/Page';
import { supabase } from '@/supabase';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { StLi } from './StyledCreateProfile';

import { useNavigate } from 'react-router-dom';

export const CreateProfile = () => {
  const navigate = useNavigate();
  const [isProfile, setIsProfile] = useState(false);
  const signOut = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  const [inputs, setInputs] = useState({
    nickname: '',
    birthDate: '',
    gender: ''
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInputs((prev) => ({ ...prev, [name]: value }));
  };
  console.log(inputs);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { nickname, birthDate, gender } = inputs;
    try {
      const { error } = await supabase.from('users').insert({
        display_name: nickname,
        birth_date: birthDate,
        gender: gender
      });
      if (error) return;
      setIsProfile(true);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  useEffect(() => {
    const getProfile = async () => {
      const {
        data: { user }
      } = await supabase.auth.getUser();

      const { data: profile } = await supabase.from('users').select('*').eq('user_id', user.id);

      if (profile.length > 0) setIsProfile(true);
    };
    getProfile();
  }, []);

  if (isProfile) return <Navigate to={'/'} />;

  return (
    <Page>
      <form onSubmit={handleSubmit}>
        <StLi>
          <Input
            name={'nickname'}
            label={'닉네임'}
            type={'text'}
            value={inputs.nickname}
            onChange={handleInputChange}
          />
        </StLi>
        <StLi>
          <Input
            name={'birthDate'}
            label={'생일'}
            type={'date'}
            value={inputs.birthDate}
            onChange={handleInputChange}
          />
        </StLi>
        <StLi>
          <Input name={'gender'} label={'성별'} type={'text'} value={inputs.gender} onChange={handleInputChange} />
        </StLi>
        <div>
          <button>저장</button>
          <button onClick={signOut}>Log Out</button>
        </div>
      </form>
    </Page>
  );
};
