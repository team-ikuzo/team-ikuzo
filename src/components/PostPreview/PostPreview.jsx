import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StPostPreview, StHashtags, StHashtag, StTitle, StBody, StNotices, StImageWrapper } from './StyledPostPreview';
import { setHashtags, setHashtagsDelete } from '../../redux/createPostSlice';


const PostPreview = () => {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.postSlice.title);
  const body = useSelector((state) => state.postSlice.body);
  const hashtags = useSelector((state) => state.postSlice.hashtags);
  const notices = useSelector((state) => state.postSlice.notices);
  const localImageURL = useSelector((state) => state.postSlice.localImageURL);

  const StButton = {
    border: 'none',
    backgroundColor: 'transparent',
    pointer: 'cursor'
  };

  return (
    <StPostPreview>
      <StTitle>
        <h1>{title}</h1>
      </StTitle>

      <div>
        <h3>요구스택</h3>
        <StHashtags>
          {hashtags.map((hashtag, index) => (
            <div key={index}>
              <StHashtag hashtag={hashtag}>
                {hashtag}
                <button style={StButton} onClick={() => dispatch(setHashtagsDelete(hashtag))}>
                  x
                </button>
              </StHashtag>
            </div>
          ))}
        </StHashtags>
      </div>

      <StBody>
        {body.split('\n').map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
        <StImageWrapper>{localImageURL && <img src={localImageURL} alt="Uploaded" />}</StImageWrapper>
      </StBody>

      <StNotices>{notices}</StNotices>
    </StPostPreview>
  );
};

export default PostPreview;
