import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import {
  clearHashtags,
  clearImage,
  setBody,
  setHashtags,
  setLocalImageURL,
  setNotices,
  setTitle
} from '../../redux/createPostSlice';
import { supabase } from '../../supabase';
import { Page } from '../Page';
import PostPreview from '../PostPreview/PostPreview';
import {
  InnerContainer,
  LeftPanel,
  OuterContainer,
  RightPanel,
  StBody,
  StButton,
  StImageDeleteBtn,
  StImageUpload,
  StNotices,
  StSelect,
  StTitle
} from './StyledCreatePost';

const StBackground = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #1d1f21;
  display: flex;
  justify-content: center;
`;

const CreatePost = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const title = useSelector((state) => state.postSlice.title);
  const body = useSelector((state) => state.postSlice.body);
  const hashtags = useSelector((state) => state.postSlice.hashtags);
  const notices = useSelector((state) => state.postSlice.notices);
  const imageURL = useSelector((state) => state.postSlice.imageURL);
  const localImageURL = useSelector((state) => state.postSlice.localimages);

  const [imageFile, setImageFile] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      dispatch(setLocalImageURL(imageUrl));
      setImageFile(file);
    }
  };

  const handleRemoveImage = () => {
    dispatch(clearImage());
    setImageFile(null);
  };

  const handleSave = async () => {
    try {
      let postId = uuidv4();
      let imageId = uuidv4();
      let imageUrl = null;
      if (imageFile) {
        // 이미지 업로드
        const { data: storageData, error: storageError } = await supabase.storage
          .from('post_image_storage')
          .upload(`${postId}/${imageId}`, imageFile);

        if (storageError) {
          console.error('이미지 업로드 오류:', storageError);
          return;
        }
        const result = supabase.storage.from('post_image_storage').getPublicUrl(`${postId}/${imageId}`);
        console.log(result.data.publicUrl);
      }
      console.log(imageUrl);
      // 게시글 데이터 저장
      const { error: insertError } = await supabase.from('posts').insert({
        title,
        body,
        hashtags,
        notice: notices,
        post_image_url: imageUrl
      });

      if (insertError) {
        console.error('게시글 저장 오류:', insertError);
      } else {
        console.log('게시글 저장 성공');
        setBody, setHashtags, setLocalImageURL, setNotices, setTitle;
        dispatch(setBody(''));
        dispatch(clearHashtags());
        dispatch(setNotices(''));
        dispatch(setTitle(''));
        dispatch(setLocalImageURL(''));

        navigate('/');
      }
    } catch (error) {
      console.error('오류 발생:', error);
    }
  };

  return (
    <Page>
      <StBackground>
        <OuterContainer>
          <InnerContainer>
            <RightPanel>
              <StTitle>
                [제목]
                <br />
                <input
                  type="text"
                  value={title}
                  placeholder="제목을 입력해주세요"
                  onChange={(e) => dispatch(setTitle(e.target.value))}
                />
              </StTitle>

              <StNotices>
                [공지사항]
                <br />
                <input
                  type="text"
                  placeholder="공지사항 입력란"
                  value={notices}
                  onChange={(e) => dispatch(setNotices(e.target.value))}
                />
              </StNotices>

              <StBody>
                [내용]
                <br />
                <textarea
                  type="text"
                  placeholder="내용을 입력해주세요"
                  value={body}
                  onChange={(e) => dispatch(setBody(e.target.value))}
                />
              </StBody>
              <StSelect>
                [요구스택]
                <br />
                <select name="hashtag" onChange={(e) => dispatch(setHashtags(e.target.value))}>
                  <option value="Front-end">Front-end</option>
                  <option value="Back-end">Back-end</option>
                  <option value="Python">Python</option>
                  <option value="Java">Java</option>
                  <option value="Kotlin">Kotlin</option>
                  <option value="Spring">Spring</option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="React">React</option>
                  <option value="NextJs">NextJs</option>
                  <option value="TypeScript">TypeScript</option>
                  <option value="Deep-learnig">Deep-learnig</option>
                  <option value="DataAnalysis">DataAnalysis</option>
                  <option value="UI/UX-Designer">UI/UX-Designer</option>
                  <option value="Unity">Unity</option>
                  <option value="C">C</option>
                </select>
              </StSelect>
              <StImageUpload>
                <label htmlFor="imageUpload">이미지 첨부</label>
                <input type="file" multiple id="imageUpload" name="imageUpload" onChange={handleImageChange} />

                <StImageDeleteBtn onClick={handleRemoveImage}>이미지 삭제</StImageDeleteBtn>
              </StImageUpload>

              <StButton onClick={handleSave}>작성</StButton>
            </RightPanel>

            <LeftPanel>
              <PostPreview />
            </LeftPanel>
          </InnerContainer>
        </OuterContainer>
      </StBackground>
    </Page>
  );
};

export default CreatePost;
