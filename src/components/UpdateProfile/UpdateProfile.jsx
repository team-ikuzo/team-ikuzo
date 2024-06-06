import { updateImage, updateIntroduction, updateTags, updateTitle } from '@/redux/slices/updateProfileSlice';
import { supabase } from '@/supabase';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

const UpdateProfile = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [introduction, setIntroduction] = useState('');
  const [tags, setTags] = useState([]);

  const [profileUrl, setProfileUrl] = useState('');
  const fileInputRef = useRef(null);

  async function handleFileInputChange(files) {
    const [file] = files;

    if (!file) {
      return;
    }

    deleteStorage();

    const { data } = await supabase.storage.from('profile_image').upload(`profileImg_${id}.png`, file);

    setProfileUrl(`https://wmgakxxvdhvxoawgvdko.supabase.co/storage/v1/object/public/profile_image/${data.path}`);
  }

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data, error } = await supabase.from('users').select('*').eq('user_id', id).single();
        if (error) {
          throw Error(error.message);
        }
        setTitle(data.display_name);
        setIntroduction(data.introduction);
        setTags(data.hashtags);
        setProfileUrl(data.profile_image_path);
        return data;
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserData();
  }, []);
  const dispatch = useDispatch();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (title === '') {
      alert('닉네임을 입력하세요');
      return; // 아무것도 입력하지 않았을 때 dispatch 하지 않음
    }
    dispatch(updateTitle({ title }));
    dispatch(updateIntroduction({ introduction }));
    dispatch(updateTags({ tags }));
    dispatch(updateImage({ profileUrl }));

    const { error } = await supabase
      .from('users')
      .update({
        display_name: title,
        introduction: introduction,
        hashtags: tags,
        profile_image_path: profileUrl
      })
      .eq('user_id', id);
    if (error) {
      throw Error(error.message);
    }

    // const imageFile = event.target.files[0]
    // const { data, error } = await supabase.storage
    //     .from('profile_image')
    //     .upload(image, imageFile)

    navigate(`/myPage`);
  };

  const deleteImg = () => {
    deleteStorage();
    const { data } = supabase.storage.from('profile_image').getPublicUrl('default-profile.jpg');
    setProfileUrl(data.publicUrl);
  };
  const deleteStorage = () => {
    const { data } = supabase.storage.from('profile_image').remove(`profileImg_${id}.png`);
  };
  useEffect(() => {
    deleteImg();
  }, []);

  return (
    <StProfile>
      <StProfileHeader>
        <div>
          <img
            width={170}
            height={170}
            src={profileUrl}
            alt="profile"
            style={{
              borderRadius: '20%',
              objectFit: 'cover'
            }}
          />

          <StImgButtons>
            <StImgButton onClick={() => fileInputRef.current.click()}>
              수정
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileInputChange(e.target.files)}
                ref={fileInputRef}
                style={{ display: 'none' }}
              />
            </StImgButton>
            <StImgButton onClick={deleteImg}>삭제</StImgButton>
          </StImgButtons>
        </div>
        <StProfileInfo>
          <StProfileTitleInput
            type="text"
            placeholder={title}
            defaultValue={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </StProfileInfo>

        <StProfileButton onClick={onSubmitHandler}>편집 종료</StProfileButton>
      </StProfileHeader>

      <StIntroduction>
        <StIntroductionTitle>소개글</StIntroductionTitle>
        <StIntroductionInput
          type="text"
          placeholder={introduction}
          defaultValue={introduction}
          onChange={(e) => {
            setIntroduction(e.target.value);
          }}
        />
      </StIntroduction>

      <div className="tags">
        <StIntroductionTitle>나의 기술</StIntroductionTitle>
        <StTagsInput
          type="text"
          placeholder={tags}
          defaultValue={tags}
          onChange={(e) => {
            const inputTags = e.target.value.split(/,| /).filter((tag) => tag !== '');
            setTags(inputTags);
          }}
        />
      </div>
    </StProfile>
  );
};

export default UpdateProfile;

const StProfile = styled.div`
  background-color: #333;
  /* color: white; */
  padding: 20px;
  border-radius: 8px;
`;

const StProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const StProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  margin-left: 30px;
`;

const StProfileTitleInput = styled.input`
  border: none;
  margin: 30px 24px 0px 0px;
  height: 80px;
  width: 300px;
  border-radius: 12px;
  outline: none;
  padding: 0 10px;
  font-weight: bolder;
  font-size: 60px;
  background: transparent;
  color: white;
`;

const StIntroductionInput = styled.textarea`
  border: 1px solid #eee;
  margin: 5px 0 30px 0;
  height: 100px;
  width: 96%;
  border-radius: 12px;
  outline: none;
  padding: 0px 10px;
  background: transparent;
  color: white;
  resize: vertical;
  font-size: 16px;
`;

const StIntroduction = styled.p`
  margin: 30px 0 0px 0;
  color: white;
`;

const StIntroductionTitle = styled.h3`
  color: white;
  font-size: 25px;
  margin-bottom: 20px;
  font-weight: bold;
`;

const StTagsInput = styled.input`
  border: 1px solid #eee;
  margin: 10px 0 20px 0;
  height: 25px;
  width: 96%;
  border-radius: 12px;
  outline: none;
  padding: 0px 10px;
  background: transparent;
  color: white;
`;

const StProfileButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #f5f5f5;
  color: #333;
  font-weight: bold;

  &:hover {
    background-color: #e0e0e0;
  }

  &:active {
    background-color: #d0d0d0;
  }
`;

const StImgButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 10px;
`;

const StImgButton = styled.button`
  cursor: pointer;
  bottom: 0px;
  margin: 5px;
  padding: 5px 5px;
  border-radius: 5px;
  background-color: #bcbcbc;
  border: none;
  color: #333;
  font-weight: bold;

  &:hover {
    background-color: #e0e0e0;
  }

  &:active {
    background-color: #d0d0d0;
  }
`;
