import { useContext } from "react";
import styled from "styled-components";
import { FileAndDataContext } from "../../contexts/FileAndDataContext";
import { TagType } from "../../types";
import { FaceDataContext } from "../../contexts/FaceDataContext";

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
  border: 2px dashed #e3e3e3;
  box-shadow: 0 0 0 2px #000000;
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: bold;
  transition-duration: 0.4s;

  color: #e3e3e3;
  text-shadow: 4px 4px 6px #000000;

  &:hover {
    border: 2px solid rgba(0, 0, 0, 0.3);
    background-color: rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Frames = () => {
  const fileAndData = useContext(FileAndDataContext);
  const faceData = useContext(FaceDataContext);

  const onFrameClick = (tag: TagType, n: number) => {
    if (faceData) {
      faceData.setAttributes(tag.attributes);
      faceData.setFaceNumber(n);
    }
  };

  return (
    <FramesDiv>
      {fileAndData.rawData &&
        fileAndData.rawData.tags.flatMap((tag, i) => {
          const n = i + 1;
          return [
            <Frame
              key={tag.tid}
              center={tag.center}
              width={tag.width}
              height={tag.height}
              pitch={tag.pitch}
              roll={tag.roll}
              yaw={tag.yaw}
              onClick={() => onFrameClick(tag, n)}
            >{n}</Frame>,
          ];
        })}
    </FramesDiv>
  );
};

export default Frames;
