import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBody, setHashtags, setImage, setNotices, setTitle } from '../../redux/createPostSlice';
import PostPreview from '../PostPreview/PostPreview';
import {
  OuterContainer,
  InnerContainer,
  LeftPanel,
  RightPanel,
  BottomPanel,
  StBody,
  StNotices,
  StSelect,
  StTitle,
  StImageUpload,
  StButton
} from './StyledCreatePost';
import { supabase } from '../../supabase';

const CreatePost = () => {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.postSlice.title);
  const body = useSelector((state) => state.postSlice.body);
  const name = useSelector((state) => state.postSlice.name);
  const job = useSelector((state) => state.postSlice.job);
  const hashtags = useSelector((state) => state.postSlice.hashtags);
  const likes = useSelector((state) => state.postSlice.likesCount);
  const notices = useSelector((state) => state.postSlice.notices);
  const imageUrl = useSelector((state) => state.postSlice.image);

  // supabase에 보낼데이터 title, body, hashtags, notices, imageUrl -> 5개
  const handleSave = async () => {
    const { data, error } = await supabase
      .from('posts')
      .insert({ title, body, hashtags, notice: { notices }, imageUrl: { post_image_url } });

    if (error) {
      console.log(error);
    } else {
      console.log('Supabase client is not properly configured or user is not authenticated');
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

          <StButton onClick={handleSave}>작성</StButton>
        </RightPanel>

        <LeftPanel>
          <PostPreview />
        </LeftPanel>

        <BottomPanel>
          <StBody>
            <textarea
              type="text"
              placeholder="내용을 입력해주세요"
              value={body}
              onChange={(e) => dispatch(setBody(e.target.value))}
            />
          </StBody>
          <StImageUpload>
            <label htmlFor="imageUpload">이미지 첨부</label>
            <input
              type="file"
              id="imageUpload"
              name="imageUpload"
              onChange={(e) => dispatch(setImage(URL.createObjectURL(e.target.files[0])))}
            />
          </StImageUpload>
        </BottomPanel>
      </InnerContainer>
    </OuterContainer>
  );
};

export default CreatePost;
