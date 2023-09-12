import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import axios from 'axios';
import Popup from '@/componenets/Popup';

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [collectionName, setCollectionName] = useState('');
  const [collectionExists, setCollectionExists] = useState<boolean | null>(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleCollectionNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCollectionName(event.target.value);
  };

  const handleVerifyCollection = async () => {
    try {
      const response = await axios.get(`http://4.224.47.39:5000/api/verify-collection/${collectionName}`);
      const { exists } = response.data;
      setCollectionExists(exists);
      if (exists) {
        setAlertMessage('Collection name already exists! Try other names!');
        setShowAlert(true);
      }

    } catch (error) {
      console.error('Error verifying collection:', error);
      setCollectionExists(null);
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const fileReader = new FileReader();
      fileReader.readAsBinaryString(selectedFile);

      fileReader.onload = (event) => {
        const data = event.target?.result as string;
        const workbook = XLSX.read(data, { type: 'binary' });

        workbook.SheetNames.forEach((sheet) => {
          const rowObject = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);

          const finalCollectionName = collectionName || 'open';

          axios.post(`http://4.224.47.39:5000/api/store/${finalCollectionName}`, rowObject)
            .then((response) => {
              console.log('Data sent to the server:', response.data);
            })
            .catch((error) => {
              console.error('Error sending data to the server:', error);
            });
        });
      };
    }
  };

  useEffect(() => {
    setCollectionExists(null);
  }, [collectionName]);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-7xl text-primary-600 dark:text-primary-500">Flashgen</h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-3xl dark:text-white">Flash tool to create flashcards</p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Upload your questions in excel format here. We automate the options and flashcards generation for you.</p>
          <p className="mb-4 text-sm font-light text-gray-300 dark:text-gray-400">
            Upload Instructions
            <br />
            Please ensure that your excel file contains the headers
            as Question, Option1, Option2, Option3, Option4 and Solution.
            For now our app supports the following DataModel only.
            We will bring you an update very soon.
          </p>
	  <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-40">The default open source collection is open. Click Verify Collection without any collection name to contribute to the collection of open source flashcards.</p>
          <img src='Example.png' alt='example' />
          <br />
          <div className="col-md-3">
            <input className="form-control p-2 rounded-md" type="file" id="input" accept=".xls,.xlsx" onChange={handleFileChange} />
          </div>
          <br />
          <div>
            <input
              className="form-control p-2 rounded-md"
              type="text"
              placeholder="Enter Collection Name"
              value={collectionName}
              onChange={handleCollectionNameChange}
            />
            <br />
            <button className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4" onClick={handleVerifyCollection}>Verify Collection</button>
            <br />
            {collectionExists === false && (
              <button className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4" onClick={handleUpload} id="button">Upload .xlsx file</button>
            )}
            {showAlert && <Popup message={alertMessage} onClose={handleCloseAlert} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Upload;
