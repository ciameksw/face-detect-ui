import { useContext } from "react";
import styled from "styled-components";
import { FileAndDataContext } from "../../contexts/FileAndDataContext";
import { TagType } from "../../types";
import { AttributesContext } from "../../contexts/AttributesContext";

const FramesDiv = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Frame = styled.div.attrs<{
  center: { x: number; y: number };
  width: number;
  height: number;
  pitch: number;
  roll: number;
  yaw: number;
}>((props) => ({
  style: {
    top: `${props.center.y - props.height / 2}%`,
    left: `${props.center.x - props.width / 2}%`,
    width: `${props.width}%`,
    height: `${props.height}%`,
    transform: `rotateX(${props.pitch}deg) rotateY(${props.yaw}deg) rotateZ(${props.roll}deg)`, // TODO - check if this is correct
  },
}))`
  position: absolute;
  border: 2px solid green;
  cursor: pointer;
`;

const Frames = () => {
  const fileAndData = useContext(FileAndDataContext);
  const attributes = useContext(AttributesContext);

  const onFrameClick = (tag: TagType) => {
    if (attributes) {
      attributes.setAttributes(tag.attributes);
    }
  };

  return (
    <FramesDiv>
      {fileAndData.rawData &&
        fileAndData.rawData.tags.flatMap((tag) => {
          return [
            <Frame
              key={tag.tid}
              center={tag.center}
              width={tag.width}
              height={tag.height}
              pitch={tag.pitch}
              roll={tag.roll}
              yaw={tag.yaw}
              onClick={() => onFrameClick(tag)}
            />,
          ];
        })}
    </FramesDiv>
  );
};

export default Frames;
