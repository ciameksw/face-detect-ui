import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AttributesListType } from "../../../types";
import { FaceDataContext } from "../../../contexts/FaceDataContext";
import { mapAttributeValues, snakeToTitle } from "../../../utils";

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
  margin-top: 0.3rem;
`;

const Helper = styled.div`
  width: 20%;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ConfidenceContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  height: 1rem;
  width: 85%;
  margin-left: 1rem;
  position: relative;
`;

const Confidence = styled.div.attrs<{ confidence: number }>((props) => ({
  style: { width: `${props.confidence}%` },
}))`
  background-color: #e3e3e3;
  border-radius: 5px;
  height: 100%;
`;

const Marker = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  transform: translateX(-50%);
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
      {data.map((el) => (
        <Attribute key={el.attribute}>
          {snakeToTitle(el.attribute)}: {snakeToTitle(el.value)}
          <Wrapper>
            <Helper />
            <ConfidenceContainer>
              <Marker style={{ left: "25%" }} />
              <Marker style={{ left: "50%" }} />
              <Marker style={{ left: "75%" }} />
              <Confidence confidence={el.confidence} />
            </ConfidenceContainer>
            <Helper>{el.confidence}%</Helper>
          </Wrapper>
        </Attribute>
      ))}
    </div>
  );
};

export default Attributes;
