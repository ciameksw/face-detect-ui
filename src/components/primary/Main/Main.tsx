import React from "react";
import styled from "styled-components";
import Photo from "../../photoDisplay/Photo/Photo";
import Data from "../../dataDisplay/Data/Data";

const MainDiv = styled.div`
  min-height: 80vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Main = (props: { fileUploader: () => Promise<void> }) => {
  return (
    <MainDiv>
      <Photo></Photo>
      <Data fileUploader={props.fileUploader}></Data>
    </MainDiv>
  );
};

export default Main;
