import React from "react";
import styled from "styled-components";
import Display from "../Display/Display";
import Data from "../Data/Data";

const MainDiv = styled.div`
  background-color: #bbbbbb;
  height: 80vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = () => {


    return <MainDiv>
        <Display></Display>
        <Data></Data>
    </MainDiv>
};

export default Main;