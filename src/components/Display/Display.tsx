import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { PhotoType } from "../../types/apiResponse";

const DisplayDiv = styled.div`
  background-color: green;
  height: 60vh;
  width: 40vw;
  margin: 0 5vw;
`;

const ImageContainer = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  display: block;
  object-fit: contain;
`;

const Overlay = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Display = (props: { file: File | null; data: PhotoType | null }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (props.file) {
      setImageUrl(URL.createObjectURL(props.file));
    }
  }, [props.file]);

  const handleImageLoad = () => {
    if (imgRef.current && overlayRef.current) {
      const { width, height } = imgRef.current.getBoundingClientRect();
      overlayRef.current.style.width = `${width}px`;
      overlayRef.current.style.height = `${height}px`;
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleImageLoad);
    return () => {
      window.removeEventListener('resize', handleImageLoad);
    };
  }, []);

  return (
    <DisplayDiv>
      {imageUrl && (
        <ImageContainer>
          <StyledImage
            src={imageUrl}
            ref={imgRef}
            alt="Uploaded content"
            onLoad={handleImageLoad}
          />
          <Overlay ref={overlayRef}></Overlay>
        </ImageContainer>
      )}
    </DisplayDiv>
  );
};

export default Display;
