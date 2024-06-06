import { supabase } from '@/supabase';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { styled } from 'styled-components';

const AssignmentList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 40px;
`;

const AssignmentItem = styled.li`
  margin-bottom: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #e0e0e0;
`;

const UserInfo = styled.div`
  color: #4c4c4c;
  display: flex;
  align-items: center;

  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }

  p {
    margin: 0;
    font-weight: bold;
  }
`;

const CreatedAt = styled.div`
  font-size: 12px;
  color: #888;
`;

const Content = styled.div`
  padding: 10px;

  p {
    margin: 5px 0;
  }
`;

export const StHashtags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  p {
    border-radius: 12px;
    box-sizing: border-box;
    font-size: 12px;
    height: 24px;
    font-weight: bold;
    padding: 6px 10px;
    background-color: white;
    color: black;
  }
`;

export const Assignments = ({ postId }) => {
  const { data: assignments, isLoading } = useQuery({
    queryKey: ['assignments'],
    queryFn: () =>
      supabase.from('assignments').select(`*, users(display_name, profile_image_path)`).eq('post_id', postId)
  });

  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <AssignmentList>
        {assignments?.data.map((assignment) => {
          const user = assignment.users;
          console.log(assignment);
          return (
            <AssignmentItem key={assignment.id}>
              <Info>
                <UserInfo>
                  <img src={user.profile_image_path} alt="" />
                  <p>{user.display_name}</p>
                </UserInfo>
                <CreatedAt>{dayjs(assignment.created_at).format('YYYY -MM-DD HH:mm')}</CreatedAt>
              </Info>
              <Content>
                <StHashtags>
                  {assignment.hashtags.map((hashtag, i) => (
                    <p key={i}>{hashtag}</p>
                  ))}
                </StHashtags>
                <p>{assignment.body}</p>
              </Content>
            </AssignmentItem>
          );
        })}
      </AssignmentList>
    </>
  );
};
