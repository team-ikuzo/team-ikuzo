import styled from "styled-components";

export const StPostPreview = styled.div`
  background-color: #4c4c4c;
  padding: 20px;
  padding-bottom: 50px;
  border-radius: 20px;
  color: white;
  padding: 10px;
  width: 600px;
  height: 600px;
`;

export const StHashtags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  color: #4c4c4c;
  border-bottom: 2px dashed white;
  padding: 0 0 25px 0;
  margin-top: 10px;
`;

export const StHashtag = styled.p`
  border-radius: 12px;
  box-sizing: border-box;
  font-size: 12px;
  height: 24px;
  font-weight: bold;
  padding: 6px 10px;
  background-color: ${(props) => {
    switch (props.hashtag) {
      case "Front-end":
        return "aqua";
      case "Back-end":
        return "burlywood";
      case "Python":
        return "aquamarine";
      case "Java":
        return "orange";
      case "Kotlin":
        return "plum";
      case "Spring":
        return "lightgreen";
      case "JavaScript":
        return "gold";
      case "React":
        return "skyblue";
      case "NextJs":
        return "silver";
      case "TypeScript":
        return "deepskyblue";
      case "Deep-learnig":
        return "mediumslateblue";
      case "DataAnalysis":
        return "cornflowerblue";
      case "UI/UX-Designer":
        return "pink";
      case "Unity":
        return "darkgray";
      case "C":
        return "teal";
      default:
        return "white";
    }
  }};
`;

export const StTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: white;
  border-bottom: 2px dashed white;
  padding: 0 0 25px 0;
  margin-top: 10px;
`;

export const StBody = styled.div`
  font-weight: bold;
  font-size: 16px;
  color: white;
  border-bottom: 2px dashed white;
  padding: 0 0 25px 0;
  margin-top: 10px;
`;

export const StNotices = styled.div`
  font-weight: bold;
  font-size: 16px;
  color: white;
  padding: 0 0 25px 0;
  margin-top: 80px;
`;
