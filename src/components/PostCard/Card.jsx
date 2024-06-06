import {
  StCard,
  StContent,
  StCount,
  StHashtags,
  StInfo,
  StLink,
  StNameCard,
  StProfileImage,
  StTitle
} from './StyledCard';

const Card = ({ post: { id: postId, title, body, hashtags, author_name: username, likes_count, users: user } }) => {
  return (
    <StLink to={`/post/${postId}`}>
      <StCard>
        <StHashtags>
          {hashtags.map((hashtag, i) => (
            <p key={i}>{hashtag}</p>
          ))}
        </StHashtags>
        <StTitle>{title}</StTitle>
        <StContent>{body}</StContent>
        <StNameCard>
          <StProfileImage src={user.profile_image_path} />
          <StInfo>
            <p className="name">{user.display_name}</p>
          </StInfo>
        </StNameCard>
        <StCount>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
          </svg>
          <p>{likes_count}</p>
        </StCount>
      </StCard>
    </StLink>
  );
};

export { Card };
