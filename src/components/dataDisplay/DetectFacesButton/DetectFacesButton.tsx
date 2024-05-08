import styled from "styled-components";
import { FileAndDataContext } from "../../../contexts/FileAndDataContext";
import { useContext } from "react";

const ButtonDiv = styled.div`
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
`;

const DetectFacesButton = (props: {
  handleDetectFaces: (
    event: React.FormEvent<HTMLButtonElement>
  ) => Promise<void>;
}) => {
  const fileAndData = useContext(FileAndDataContext);

  const shouldDisplayButton = fileAndData.file && !fileAndData.rawData;
  if (shouldDisplayButton) {
    return (
      <ButtonDiv>
        <button onClick={props.handleDetectFaces}>Detect faces</button>
      </ButtonDiv>
    );
  }
  return null;
};

export default DetectFacesButton;
