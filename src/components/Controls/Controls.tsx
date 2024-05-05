import React from "react";
import styled from "styled-components";

const ControlsDiv = styled.div`
  background-color: #aaaaaa;
  height: 10vh;
  width: 100vw;
`;

const StyledForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`;


const Controls = (props: {fileSetter: any, fileUploader: () => Promise<void>}) => {

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        props.fileSetter(file);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.fileUploader();
    }

    return <ControlsDiv>
        <StyledForm onSubmit={handleSubmit}>
            <input type="file" name="file" id="file" onChange={handleFileChange} accept=".png, .jpg, .jpeg, .bmp, .jp2"/>
            <input type="submit" value="Upload" />
        </StyledForm>
    </ControlsDiv>
}

export default Controls;