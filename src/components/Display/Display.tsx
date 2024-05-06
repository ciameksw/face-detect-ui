import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FileAndDataContext } from "../../contexts/FileAndDataContext";
import Frames from "../Frames/Frames";

const DisplayDiv = styled.div`
  background-color: green;
  margin: 0 5vw;
`;

const FileNameDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5vh;
  background-color: #f0f0f0;
  text-align: center;
  font-size: 1.2rem;
`;

const ImgDiv = styled.div`
  height: 60vh;
  width: 40vw;
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
`;

const Display = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const fileAndData = useContext(FileAndDataContext);

  useEffect(() => {
    if (fileAndData.file) {
      setImageUrl(URL.createObjectURL(fileAndData.file));
    }
  }, [fileAndData.file]);

  const handleImageLoad = () => {
    if (imgRef.current && overlayRef.current) {
      const { width, height } = imgRef.current.getBoundingClientRect();
      overlayRef.current.style.width = `${width}px`;
      overlayRef.current.style.height = `${height}px`;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleImageLoad);
    return () => {
      window.removeEventListener("resize", handleImageLoad);
    };
  }, []);

  return (
    <DisplayDiv>
      <FileNameDiv>{fileAndData.file && fileAndData.file.name}</FileNameDiv>
      <ImgDiv>
        {imageUrl && (
          <ImageContainer>
            <StyledImage
              src={imageUrl}
              ref={imgRef}
              alt="Uploaded content"
              onLoad={handleImageLoad}
            />
            <Overlay ref={overlayRef}>
              <Frames />
            </Overlay>
          </ImageContainer>
        )}
      </ImgDiv>
    </DisplayDiv>
  );
};

export default Display;
