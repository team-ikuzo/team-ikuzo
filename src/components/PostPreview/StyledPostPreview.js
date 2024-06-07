import styled from 'styled-components';

export const StPostPreview = styled.div`
  background-color: #3c3c3c;
  border-radius: 20px;
  color: white;
  padding: 30px;
  width: 850px;
  height: auto;
  min-height: 800px;
  transition: background-color 0.5s ease;
  &:hover {
    background-color: #2c2c2c;
  }
`;

export const StHashtags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  color: #4c4c4c;
  border-bottom: 2px solid gray;
  padding: 0 0 15px 0;
  margin-top: 10px;
`;

export const StHashtag = styled.p`
  border-radius: 12px;

  font-size: 12px;
  font-weight: bold;
  padding: 4px 10px;
  transition:
    transform 0.2s ease,
    background-color 0.2s ease;
  &:hover {
    transform: scale(1.05);
    background-color: #dcdcdc;
  }
  background-color: ${(props) => {
    switch (props.hashtag) {
      case 'Front-end':
        return 'aqua';
      case 'Back-end':
        return 'burlywood';
      case 'Python':
        return 'aquamarine';
      case 'Java':
        return 'orange';
      case 'Kotlin':
        return 'plum';
      case 'Spring':
        return 'lightgreen';
      case 'JavaScript':
        return 'gold';
      case 'React':
        return 'skyblue';
      case 'NextJs':
        return 'silver';
      case 'TypeScript':
        return 'deepskyblue';
      case 'Deep-learnig':
        return 'mediumslateblue';
      case 'DataAnalysis':
        return 'cornflowerblue';
      case 'UI/UX-Designer':
        return 'pink';
      case 'Unity':
        return 'darkgray';
      case 'C':
        return 'teal';
      default:
        return 'white';
    }
  }};
`;

export const StTitle = styled.div`
  font-weight: bold;
  font-size: 24px;
  height: auto;
  min-height: 40px;
  color: white;
  border-bottom: 2px solid gray;
  margin-bottom: 15px;
`;

export const StBody = styled.div`
  font-weight: bold;
  font-size: 16px;
  color: white;
  border-bottom: 2px solid gray;
  padding: 0 0 25px 0;
  height: auto;
  min-height: 500px;
  margin-top: 10px;
  line-height: 1.4;
`;

export const StNotices = styled.div`
  font-weight: bold;
  font-size: 12px;
  color: white;
  padding: 0 0 25px 0;
  margin-top: 20px;
  height: auto;
  min-height: 200px;
`;

export const StImageWrapper = styled.div`
  img {
    max-width: 100%;
    margin-bottom: 15px;
    border-radius: 10px;
  }
`;
