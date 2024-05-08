import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FileAndDataContext } from "../../../contexts/FileAndDataContext";
import Frames from "../Frames/Frames";

const DisplayDiv = styled.div`
  margin: 0 5vw 2rem 5vw;
  
`;

const FileNameDiv = styled.div`
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

const ImgDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
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

  const truncate = (str: string) => {
    if (str.length > 25) {
      const start = str.slice(0, 10);
      const end = str.slice(str.length - 10, str.length);
      return `${start}...${end}`;
    }
    return str;
  }

  useEffect(() => {
    window.addEventListener("resize", handleImageLoad);
    return () => {
      window.removeEventListener("resize", handleImageLoad);
    };
  }, []);

  return (
    <DisplayDiv>
      <FileNameDiv>{fileAndData.file && truncate(fileAndData.file.name)}</FileNameDiv>
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
