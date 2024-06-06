import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setBody,
  setHashtags,
  setNotices,
  setTitle,
  setImageURL,
  setLocalImageURL,
  clearImage
} from '../../redux/createPostSlice';
import PostPreview from '../PostPreview/PostPreview';
import {
  OuterContainer,
  InnerContainer,
  LeftPanel,
  RightPanel,
  StBody,
  StNotices,
  StSelect,
  StTitle,
  StImageUpload,
  StButton,
  StImageDeleteBtn
} from './StyledCreatePost';
import { supabase } from '../../supabase';

const CreatePost = () => {
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
      let publicURL = imageURL;

      if (imageFile) {
        // 이미지 업로드
        const { data: storageData, error: storageError } = await supabase.storage
          .from('post_image_storage')
          .upload(`public/${imageFile.name}`, imageFile);

        if (storageError) {
          console.error('이미지 업로드 오류:', storageError);
          return;
        }

        // 이미지 URL 가져오기
        const { publicURL: newPublicURL, error: urlError } = supabase.storage
          .from('post_image_storage')
          .getPublicUrl(`public/${imageFile.name}`);

        if (urlError) {
          console.error('이미지 URL 가져오기 오류:', urlError);
          return;
        }

        dispatch(setImageURL(newPublicURL));
        publicURL = newPublicURL;
      }

      // 게시글 데이터 저장
      const { error: insertError } = await supabase.from('posts').insert({
        title,
        body,
        hashtags,
        notice: notices,
        posts_image_url: publicURL
      });

      if (insertError) {
        console.error('게시글 저장 오류:', insertError);
      } else {
        console.log('게시글 저장 성공');
      }
    } catch (error) {
      console.error('오류 발생:', error);
    }
  };

  return (
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
  );
};

export default CreatePost;
