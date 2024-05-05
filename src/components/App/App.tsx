import React, { useState } from 'react';
import { detectFaces } from '../../api';
import Controls from '../Controls/Controls';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { PhotoType } from '../../types/apiResponse';


const App = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [data, setData] = useState<PhotoType | null>(null);

    const fileUploadHandler = async () => {
        if (!selectedFile) return;
        
        const res = await detectFaces(selectedFile);
        console.log(res);
        // We only send one photo, so we can safely assume that the first element of the array is the one we want
        setData(res.photos[0]);
    };

    return (
        <div>
            <Controls fileSetter={setSelectedFile} fileUploader={fileUploadHandler}></Controls>
            <Main file={selectedFile} data={data}></Main>
            <Footer></Footer>
        </div>
    );
}

export default App;