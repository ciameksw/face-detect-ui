import styled from "styled-components";
import { PhotoType } from "../../types/apiResponse";

const DataDiv = styled.div`
  background-color: red;
  height: 60vh;
  width: 40vw;
  margin: 0 5vw;

`;

const Data = (props: {data: PhotoType | null}) => {
    return <DataDiv>{JSON.stringify(props.data)}</DataDiv>
};

export default Data;