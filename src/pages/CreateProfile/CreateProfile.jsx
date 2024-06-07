import { Input } from '@/components/LoginInput';
import { Page } from '@/components/Page';
import { supabase } from '@/supabase';
import { useEffect, useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';
import {
  StBackground,
  StButtons,
  StDefaultPreview,
  StDiv,
  StForm,
  StInput,
  StLabel,
  StPreview,
  StTitle
} from './StyledCreateProfile';

import { useNavigate } from 'react-router-dom';

export const CreateProfile = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState(null);
  const [isProfile, setIsProfile] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const imgRef = useRef(null);
  const [inputs, setInputs] = useState({
    nickname: '',
    birthDate: '',
    gender: ''
  });

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const onFileChange = (e) => {
    const file = imgRef.current.files[0];
    setImageFile(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageUrl(reader.result);
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bucket = 'profile_image';
    const FILE_NAME = 'profileImage';
    const fileUrl = `${FILE_NAME}_${userId}`;
    const { nickname, birthDate, gender } = inputs;
    try {
      const { imageUploadResult, imageUploadError } = await supabase.storage.from(bucket).upload(fileUrl, imageFile);

      if (imageUploadError) {
        console.log(imageUploadError);
        return;
      }
      let publicUrl;
      if (!imageFile) {
        publicUrl = supabase.storage.from('profile_image').getPublicUrl('default-profile.jpg');
      } else {
        publicUrl = supabase.storage.from(bucket).getPublicUrl(fileUrl);
      }
      const { dataUploadResult, dataUploadError } = await supabase.from('users').insert({
        display_name: nickname,
        birth_date: birthDate,
        gender: gender,
        profile_image_path: publicUrl.data.publicUrl,
        hashtags: []
      });
      if (dataUploadError) return;
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

      setUserId(user.id);
      if (profile.length > 0) setIsProfile(true);
    };
    getProfile();
  }, []);

  if (isProfile) return <Navigate to={'/'} />;

  return (
    <Page>
      <StBackground>
        <StDiv>
          <StTitle>YOUR PROFILE</StTitle>
          <StForm onSubmit={handleSubmit}>
            {imageUrl ? <StPreview src={imageUrl} /> : <StDefaultPreview>이미지 없음</StDefaultPreview>}
            <StLabel htmlFor="profile-image">이미지 선택</StLabel>
            <input
              id="profile-image"
              ref={imgRef}
              type="file"
              accept="image/*"
              onChange={onFileChange}
              style={{ display: 'none' }}
            />
            <StInput>
              <Input
                name={'nickname'}
                label={'닉네임'}
                type={'text'}
                value={inputs.nickname}
                onChange={handleInputChange}
              />
            </StInput>
            <StInput>
              <Input
                name={'birthDate'}
                label={'생일'}
                type={'date'}
                value={inputs.birthDate}
                onChange={handleInputChange}
              />
            </StInput>
            <StInput>
              <Input name={'gender'} label={'성별'} type={'text'} value={inputs.gender} onChange={handleInputChange} />
            </StInput>
            <StButtons>
              <button className="save">저장</button>
              <button onClick={signOut}>Log Out</button>
            </StButtons>
          </StForm>
        </StDiv>
      </StBackground>
    </Page>
  );
};
