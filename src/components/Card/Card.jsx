import {
  StCard,
  StContent,
  StCount,
  StCountBox,
  StHashtags,
  StHr,
  StInfo,
  StNameCard,
  StProfileDummyImage,
  StTitle
} from './StyledCard';

const Card = ({ post }) => {
  return (
    <StCard>
      <StHashtags>
        {post.hashtags.map((hashtag, i) => (
          <p key={i}>{hashtag}</p>
        ))}
      </StHashtags>
      <StTitle>{post.title}</StTitle>
      <StContent>{post.body}</StContent>
      <StHr />
      <StNameCard>
        <StProfileDummyImage />
        <StInfo>
          <p className="name">{post.name}</p>
          <p className="job">{post.job}</p>
        </StInfo>
      </StNameCard>
      <StCountBox>
        <StCount>{post.likesCount}</StCount>
        <StCount>{post.commentsCount}</StCount>
      </StCountBox>
    </StCard>
  );
};

export { Card };
