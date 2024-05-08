import { useContext } from "react";
import { FaceDataContext } from "../../../contexts/FaceDataContext";
import { FileAndDataContext } from "../../../contexts/FileAndDataContext";
import styled from "styled-components";

const MessageDiv = styled.div`
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
  }
`;

const SelectFaceMessage = () => {
  const faceData = useContext(FaceDataContext);
  const fileAndData = useContext(FileAndDataContext);

  const shouldDisplayMessage =
    fileAndData.file && fileAndData.rawData && faceData && !faceData.faceNumber;

  if (!shouldDisplayMessage) return null;

  const message =
    fileAndData.rawData && fileAndData.rawData.tags.length > 0
      ? "Select a face to see its attributes"
      : "No faces detected";

  return (
    <MessageDiv>
      <span>{message}</span>
    </MessageDiv>
  );
};

export default SelectFaceMessage;
