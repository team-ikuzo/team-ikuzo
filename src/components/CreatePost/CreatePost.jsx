import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setBody,
  setHashtags,
  setLikesCount,
  setNotices,
  setTitle,
} from "../../redux/slices/createPostSlice";
import PostPreview from "../PostPreview/PostPreview";
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
} from "./StyledCreatePost";

const CreatePost = () => {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.postSlice.title);
  const body = useSelector((state) => state.postSlice.body);
  const name = useSelector((state) => state.postSlice.name);
  const job = useSelector((state) => state.postSlice.job);
  const hashtags = useSelector((state) => state.postSlice.hashtags);
  const likes = useSelector((state) => state.postSlice.likesCount);
  const commentsCount = useSelector((state) => state.postSlice.commentsCount);
  const notices = useSelector((state) => state.postSlice.notices);

  return (
    <OuterContainer>
      <InnerContainer>
        <LeftPanel>
          <StTitle>
            [제목]
            <input
              type="text"
              value={title}
              placeholder="제목을 입력해주세요"
              onChange={(e) => dispatch(setTitle(e.target.value))}
            />
          </StTitle>

          <StSelect>
            [필수스택]
            <br />
            <select
              name="hashtag"
              onChange={(e) => dispatch(setHashtags(e.target.value))}
            >
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
            {console.log(hashtags)}
          </StSelect>

          <StNotices>
            [공지사항]
            <input
              type="text"
              placeholder="공지사항 입력란"
              value={notices}
              onChange={(e) => dispatch(setNotices(e.target.value))}
            />
          </StNotices>
        </LeftPanel>

        <RightPanel>
          <PostPreview />
        </RightPanel>

        <BottomPanel>
          <StBody>
            [내용] <br />
            <textarea
              type="text"
              placeholder="내용을 입력해주세요"
              value={body}
              onChange={(e) => dispatch(setBody(e.target.value))}
            />
          </StBody>
        </BottomPanel>
      </InnerContainer>
    </OuterContainer>
  );
};

export default CreatePost;
