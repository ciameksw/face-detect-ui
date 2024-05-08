import React from "react";
import styled from "styled-components";
import Photo from "../../photoDisplay/Photo/Photo";
import FaceData from "../../dataDisplay/FaceData/FaceData";

const MainContentDiv = styled.div`
  min-height: 80vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MainContent = (props: { fileUploader: () => Promise<void> }) => {
  return (
    <MainContentDiv>
      <Photo></Photo>
      <FaceData fileUploader={props.fileUploader}></FaceData>
    </MainContentDiv>
  );
};

export default MainContent;
