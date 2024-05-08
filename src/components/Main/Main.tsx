import React from "react";
import styled from "styled-components";
import Display from "../Display/Display";
import Data from "../Data/Data";

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

const Main = () => {


    return <MainDiv>
        <Display></Display>
        <Data></Data>
    </MainDiv>
};

export default Main;