import styled from "styled-components";
import { useContext } from "react";
import { FileAndDataContext } from "../../contexts/FileAndDataContext";

const DataDiv = styled.div`
  background-color: red;
  height: 60vh;
  width: 40vw;
  margin: 0 5vw;

`;

const Data = () => {
    const FileAndData = useContext(FileAndDataContext);

    return <DataDiv>{JSON.stringify(FileAndData.rawData)}</DataDiv>
};

export default Data;