import React, { useState } from "react";
import { detectFaces } from "../../api";
import Controls from "../Controls/Controls";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { PhotoType } from "../../types";
import { FileAndDataContext } from "../../contexts/FileAndDataContext";

const App = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [data, setData] = useState<PhotoType | null>(null);

  const fileSetHandler = (file: File) => {
    setSelectedFile(file);
    data && setData(null);
  };

  const fileUploadHandler = async () => {
    if (!selectedFile) return;

    const res = await detectFaces(selectedFile);

    // We only send one photo, so we can safely assume that the first element of the array is the one we want
    setData(res.photos[0]);
  };

  const fileAndData = { file: selectedFile, data };

  return (
    <div>
      <Controls
        fileSetter={fileSetHandler}
        fileUploader={fileUploadHandler}
      ></Controls>
      <FileAndDataContext.Provider value={fileAndData}>
        <Main />
      </FileAndDataContext.Provider>
      <Footer></Footer>
    </div>
  );
};

export default App;
