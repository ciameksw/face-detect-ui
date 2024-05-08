import styled, { keyframes } from "styled-components";
import { useContext, useState } from "react";
import { FaceDataContext } from "../../../contexts/FaceDataContext";
import Attributes from "../Attributes/Attributes";
import DetectFacesButton from "../DetectFacesButton/DetectFacesButton";
import SelectFaceMessage from "../SelectFaceMessage/SelectFaceMessage";

const FaceDataDiv = styled.div`
  margin: 0 5vw 2rem 5vw;

  overflow-y: auto;
`;

const FaceDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5vh;
  text-align: center;
  font-size: 1.6rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const AttributesDiv = styled.div`
background-color: rgba(0, 0, 0, 0.2);
height: 60vh;
width: 40vw;
overflow-y: auto;
`;

const loading = keyframes`
  0% { content: "."; }
  33% { content: ".."; }
  66% { content: "..."; }
  100% { content: "."; }
`;

const LoadingDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 0.5em 1em;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }

    &:after {
      content: '...';
      animation: ${loading} 1s steps(3, end) infinite;
    }
  }
`;

const FaceData = (props: { fileUploader: () => Promise<void> }) => {
  const [loading, setLoading] = useState(false);

  const faceData = useContext(FaceDataContext);

  const handleDetectFaces = async (
    event: React.FormEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    setLoading(true);
    await props.fileUploader();
    setLoading(false);
  };

  return (
    <FaceDataDiv>
      <FaceDiv>
        {faceData && faceData.faceNumber ? "Face " + faceData.faceNumber : ""}
      </FaceDiv>

      <AttributesDiv>
        {loading ? (
          <LoadingDiv>
            <span>Loading</span>
          </LoadingDiv>
        ) : (
          <>
            <DetectFacesButton handleDetectFaces={handleDetectFaces} />
            <SelectFaceMessage />
            <Attributes />
          </>
        )}
      </AttributesDiv>
    </FaceDataDiv>
  );
};

export default FaceData;
