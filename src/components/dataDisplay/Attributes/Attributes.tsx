import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AttributesListType } from "../../../types";
import { FaceDataContext } from "../../../contexts/FaceDataContext";
import { mapAttributeValues } from "../../../utils";

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

const Attributes = () => {
  const [data, setData] = useState<Array<AttributesListType>>([]);

  const faceData = useContext(FaceDataContext);

  useEffect(() => {
    if (faceData) {
      const data = mapAttributeValues(faceData.data).sort(
        (a, b) => b.confidence - a.confidence
      );
      setData(data);
    }
  }, [faceData?.data]);

  return (
    <div>
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
    </div>
  );
};

export default Attributes;
