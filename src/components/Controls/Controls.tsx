import React from "react";
import styled from "styled-components";

const ControlsDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  height: 10vh;
  width: 100vw;
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 10vw;

  input {
    display: none;
  }

  label {
    display: block;
    padding: 0.5em 1em;
    background-color: rgba(0, 0, 0, 0.5);
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    transition-duration: 0.4s;
    cursor: pointer;
    border: none;
    border-radius: 4px;
  }

  label:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const Controls = (props: {
  fileSetter: any;
  fileUploader: () => Promise<void>;
}) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    props.fileSetter(file);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.fileUploader();
  };

  return (
    <ControlsDiv>
      <StyledForm onSubmit={handleSubmit}>
        <input
          type="file"
          name="file"
          id="file"
          onChange={handleFileChange}
          accept=".png, .jpg, .jpeg, .bmp, .jp2"
        />
        <input id="submit" type="submit" value="Detect faces" />

        <label htmlFor="file">Choose a file</label>
        <label htmlFor="submit">Detect faces</label>
      </StyledForm>
    </ControlsDiv>
  );
};

export default Controls;
