import React, { useState } from 'react';
import { detectFaces } from '../../api';
import Controls from '../Controls/Controls';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';


const App = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const file = event.target.files && event.target.files[0];
    //     setSelectedFile(file);
    // }

    // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     if (selectedFile) detectFaces(selectedFile);
    // }
  
    return (
        <div>
            <Controls></Controls>
            <Main></Main>
            <Footer></Footer>
        </div>
    );
}

export default App;