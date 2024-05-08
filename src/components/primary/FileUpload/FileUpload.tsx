import React from "react";
import styled from "styled-components";

const FileUploadDiv = styled.div`
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
    font-size: 1.2rem;
    transition-duration: 0.4s;
    cursor: pointer;
    border: none;
    border-radius: 4px;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }

  label:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const FileUpload = (props: {
  fileSetter: any;
}) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    props.fileSetter(file);
  };

  return (
    <FileUploadDiv>
      <StyledForm>
        <input
          type="file"
          name="file"
          id="file"
          onChange={handleFileChange}
          accept=".png, .jpg, .jpeg, .bmp, .jp2"
        />

        <label htmlFor="file">Choose a file</label>
      </StyledForm>
    </FileUploadDiv>
  );
};

export default FileUpload;
