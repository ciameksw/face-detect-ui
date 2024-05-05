import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PhotoType } from "../../types/apiResponse";

const DisplayDiv = styled.div`
  background-color: green;
  height: 60vh;
  width: 40vw;
  margin: 0 5vw;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const Display = (props: { file: File | null, data: PhotoType | null}) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (props.file) {
      setImageUrl(URL.createObjectURL(props.file));
    }
  }, [props.file]);

  return (
    <DisplayDiv>
      {imageUrl && <StyledImage src={imageUrl} alt="Uploaded content" />}
    </DisplayDiv>
  );
};

export default Display;
