import React from "react";
import styled from "styled-components";
import Display from "../Display/Display";
import Data from "../Data/Data";
import { PhotoType } from "../../types/apiResponse";

const MainDiv = styled.div`
  background-color: #bbbbbb;
  height: 80vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = (props: {file: File | null, data: PhotoType | null}) => {

    return <MainDiv>
        <Display file={props.file} data={props.data}></Display>
        <Data data={props.data}></Data>
    </MainDiv>
};

export default Main;