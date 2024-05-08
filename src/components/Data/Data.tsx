import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { FaceDataContext } from "../../contexts/FaceDataContext";
import { AttributesListType } from "../../types";
import { mapAttributeValues } from "../../utils";
import { FileAndDataContext } from "../../contexts/FileAndDataContext";

const DataDiv = styled.div`
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

const CenterDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    display: block;
    padding: 0.5em 1em;
    background-color: rgba(0, 0, 0, 0.7);
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    font-size: 1.2rem;
    transition-duration: 0.4s;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    color: #e3e3e3;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }

  button:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }

  span {
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 0.5em 1em;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;

const AttributesDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  height: 60vh;
  width: 40vw;
  overflow-y: auto;
`;

const Attribute = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  width: 100%;
  text-align: center;
  margin-top: 0.8rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & span {
    padding-right: 1rem;
    padding-bottom: 0.3rem;
  }
`;

const ConfidenceContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  height: 1rem;
  width: 85%;
  margin-left: 1rem;
`;

const Confidence = styled.div.attrs<{ confidence: number }>((props) => ({
  style: { width: `${props.confidence}%` },
}))`
  background-color: #e3e3e3;
  border-radius: 5px;
  height: 100%;
`;

const Data = (props: { fileUploader: () => Promise<void> }) => {
  const [data, setData] = useState<Array<AttributesListType>>([]);
  const faceData = useContext(FaceDataContext);
  const fileAndData = useContext(FileAndDataContext);

  useEffect(() => {
    if (faceData) {
      const data = mapAttributeValues(faceData.data).sort(
        (a, b) => b.confidence - a.confidence
      );

      setData(data);
    }
  }, [faceData?.data]);

  console.log(faceData);
  console.log(fileAndData);

  const handleDetectFaces = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    props.fileUploader();
  };

  return (
    <DataDiv>
      <FaceDiv>
        {faceData && faceData.faceNumber
          ? "Face " + faceData.faceNumber
          : ""}
      </FaceDiv>

      <AttributesDiv>
        {fileAndData.file && !fileAndData.rawData ? (
          <CenterDiv>
            <button onClick={handleDetectFaces}>Detect faces</button>
          </CenterDiv>
        ) : null}

        {fileAndData.file && fileAndData.rawData && faceData && !faceData.faceNumber ? (
          <CenterDiv>
            <span>Select a face to see its attributes</span>
          </CenterDiv>
        ) : null}

        {data.map((attribute) => (
          <Attribute key={attribute.attribute}>
            {attribute.attribute}: {attribute.value}
            <Wrapper>
              <ConfidenceContainer>
                <Confidence confidence={attribute.confidence} />
              </ConfidenceContainer>
              <span>{attribute.confidence}%</span>
            </Wrapper>
          </Attribute>
        ))}
      </AttributesDiv>
    </DataDiv>
  );
};

export default Data;
