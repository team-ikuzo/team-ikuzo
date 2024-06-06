import {
  StCard,
  StContent,
  StCount,
  StCountBox,
  StHashtags,
  StInfo,
  StLink,
  StNameCard,
  StProfileDummyImage,
  StTitle
} from './StyledCard';

const Card = ({ post: { id: postId, author_id: userId, title, body, hashtags, author_name: username } }) => {
  console.log(title);
  console.log(body);
  return (
    <StLink to={`/post/${postId}`}>
      <StCard>
        <StHashtags>
          {/* {hashtags.map((hashtag) => (
            <p>{hashtag}</p>
          ))} */}
          <p>Front-end</p>
          <p>Back-end</p>
          <p>UI Design</p>
        </StHashtags>
        <StTitle>{title}</StTitle>
        <StContent>{body}</StContent>
        <StNameCard>
          <StProfileDummyImage />
          <StInfo>
            <p className="name">{username}</p>
            {/* <p className="job">{post.job}</p> */}
          </StInfo>
        </StNameCard>
        <StCountBox>
          <StCount>126</StCount>
          <StCount>10</StCount>
        </StCountBox>
      </StCard>
    </StLink>
  );
};

export { Card };
