import React, { useState } from "react";
import { detectFaces } from "../../api";
import FileUpload from "../FileUpload/FileUpload";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { AttributeType, PhotoType } from "../../types";
import { FileAndDataContext } from "../../contexts/FileAndDataContext";
import { FaceDataContext } from "../../contexts/FaceDataContext";

const App = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [data, setData] = useState<PhotoType | null>(null);

  const [currentAttributes, setCurrentAttributes] = useState<AttributeType>({});
  const [faceNumber, setFaceNumber] = useState<number | null>(null);

  const fileSetHandler = (file: File) => {
    setSelectedFile(file);
    data && setData(null);
    setCurrentAttributes({});
    setFaceNumber(null);
  };

  const fileUploadHandler = async () => {
    if (!selectedFile) return;

    const res = await detectFaces(selectedFile);

    // We only send one photo, so we can safely assume that the first element of the array is the one we want
    setData(res.photos[0]);
  };

  const fileAndData = { file: selectedFile, rawData: data };
  const faceData = {
    data: currentAttributes,
    setAttributes: setCurrentAttributes,
    faceNumber: faceNumber,
    setFaceNumber: setFaceNumber,
  };

  return (
    <div>
      <FileUpload
        fileSetter={fileSetHandler}
      ></FileUpload>
      <FileAndDataContext.Provider value={fileAndData}>
        <FaceDataContext.Provider
          value={faceData}
        >
          <Main fileUploader={fileUploadHandler} />
        </FaceDataContext.Provider>
      </FileAndDataContext.Provider>
      <Footer></Footer>
    </div>
  );
};

export default App;
