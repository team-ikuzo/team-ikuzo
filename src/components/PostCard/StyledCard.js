import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StCard = styled.div`
  width: 280px;
  background-color: #4c4c4c;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 20px;
  a {
    text-decoration: none;
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

export const StTitle = styled.h3`
  font-weight: bold;
  font-size: 24px;
  color: white;
`;

export const StContent = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: white;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  word-break: keep-all;
`;

export const StProfileImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 24px;
`;

export const StProfileDummyImage = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background-color: #d9d9d9;
`;

export const StNameCard = styled.div`
  display: flex;
  gap: 6px;
`;

export const StInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  gap: 4px;
  & p.name {
    font-size: 12px;
    font-weight: 900;
  }
  & p.job {
    font-size: 10px;
    font-weight: 500;
  }
`;

export const StCountBox = styled.div`
  color: white;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const StCount = styled.div`
  display: flex;
  align-items: center;

  gap: 4px;
  & p {
    padding-top: 4px;
    color: white;
    font-size: 16px;
    font-weight: bold;
  }

  & svg {
    width: 20px;
    height: 20px;
    fill: white;
  }
`;

export const StLink = styled(Link)`
  text-decoration: none;
`;
