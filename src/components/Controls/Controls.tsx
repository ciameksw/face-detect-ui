import React from "react";
import styled from "styled-components";

const ControlsDiv = styled.div`
  background-color: #aaaaaa;
  height: 10vh;
  width: 100vw;
`;


const Controls = () => {

    return <ControlsDiv>
        <form>
            <input type="file" name="file" id="file" />
            <input type="submit" value="Upload" />
        </form>
    </ControlsDiv>
}

export default Controls;