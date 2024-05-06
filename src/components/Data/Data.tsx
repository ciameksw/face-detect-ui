import styled from "styled-components";
import { useContext } from "react";
import { AttributesContext } from "../../contexts/AttributesContext";

const DataDiv = styled.div`
  background-color: red;
  height: 60vh;
  width: 40vw;
  margin: 0 5vw;

`;

const Data = () => {
    const attributes = useContext(AttributesContext);
    console.log(attributes?.attributes)
    return <DataDiv>{JSON.stringify(attributes?.attributes)}</DataDiv>
};

export default Data;