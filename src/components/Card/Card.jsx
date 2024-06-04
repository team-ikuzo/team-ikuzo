import {
  StCard,
  StContent,
  StCount,
  StCountBox,
  StHashtags,
<<<<<<< HEAD
  StHr,
  StInfo,
  StNameCard,
  StProfileDummyImage,
  StTitle,
} from "./StyledCard";

const Card = ({ post }) => {
=======
  StInfo,
  StNameCard,
  StProfileDummyImage,
  StTitle
} from './StyledCard';

const Card = () => {
  const post = {
    hashtags: ['Front-end', 'Back-end', 'Designer', 'UI Designer'],
    title: 'Hello World!',
    body: 'Hello My Team!!! Occaecat dolore ex minim duis do exercitation aute excepteur incididunt do dolore ad. Occaecat dolore ex minim duis do exercitation aute excepteur incididunt do dolore ad. Occaecat dolore ex minim duis do exercitation aute excepteur incididunt do dolore ad.',
    name: 'James',
    job: 'Web Developer',
    likesCount: 126,
    commentsCount: 12
  };

>>>>>>> 25c04c32d56ed1c8de900f21a504ee560e142fe9
  return (
    <StCard>
      <StHashtags>
        {post.hashtags.map((hashtag) => (
          <p>{hashtag}</p>
        ))}
      </StHashtags>
      <StTitle>{post.title}</StTitle>
      <StContent>{post.body}</StContent>
<<<<<<< HEAD
      <StHr />
=======
>>>>>>> 25c04c32d56ed1c8de900f21a504ee560e142fe9
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
