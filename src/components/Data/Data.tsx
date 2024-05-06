import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { AttributesContext } from "../../contexts/AttributesContext";
import { AttributesListType } from "../../types";
import { mapAttributeValues } from "../../utils";

const DataDiv = styled.div`
  background-color: red;
  margin: 0 5vw;

  overflow-y: auto;
`;

const FaceDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5vh;
  background-color: #f0f0f0;
  text-align: center;
  font-size: 1.2rem;
`;

const AttributesDiv = styled.div`
  height: 60vh;
  width: 40vw;
  overflow-y: auto;
`;

const Attribute = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  width: 100%;
  text-align: center;
  color: white;
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
  background-color: grey;
  border: 1px solid black;
  height: 1rem;
  width: 85%;
  margin-left: 1rem;
`;

const Confidence = styled.div.attrs<{ confidence: number }>((props) => ({
  style: { width: `${props.confidence}%` },
}))`
  background-color: green;
  height: 100%;
`;

const Data = () => {
  const [data, setData] = useState<Array<AttributesListType>>([]);
  const attributes = useContext(AttributesContext);

  useEffect(() => {
    if (attributes) {
      const data = mapAttributeValues(attributes.data).sort(
        (a, b) => b.confidence - a.confidence
      );

      setData(data);
    }
  }, [attributes?.data]);

  return (
    <DataDiv>
      <FaceDiv>
        {attributes && attributes.faceNumber
          ? "Face " + attributes.faceNumber
          : ""}
      </FaceDiv>
      <AttributesDiv>
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
