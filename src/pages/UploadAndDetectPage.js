
import React, { useState } from 'react';
import './Pages.css';

function UploadAndDetectPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setErrorMessage('Please select an X-ray image.');
      return;
    }

    const formData = new FormData();
    formData.append('xray', selectedFile);

    try {
    
      setUploadProgress(0);
      for (let i = 0; i <= 100; i += 10) {
        await new Promise((resolve) => setTimeout(resolve, 200));
        setUploadProgress(i);
      }

      // dear backend dev when it integrated, it would send 'formData' to your backend API
      console.log('File uploaded:', selectedFile);
      // After successful upload and processing, it would likely navigate to the ResultsPage
      // history.push('/results', { analysisData: response.data }); // Assuming the history is from React Router
    } catch (error) {
      console.error('Upload error:', error);
      setErrorMessage('Failed to upload the image. Please try again.');
    }
  };

  return (
    <div className="upload-container">
      <h2>Upload X-ray for Detection</h2>
      <div className="upload-box">
        <input type="file" accept="image/*" onChange={handleFileChange} className="file-input" />
        {selectedFile && (
          <p className="selected-file">Selected file: {selectedFile.name}</p>
        )}
        <button onClick={handleUpload} className="upload-button" disabled={!selectedFile}>
          {uploadProgress > 0 ? `Uploading... ${uploadProgress}%` : 'Upload and Detect'}
        </button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {uploadProgress > 0 && uploadProgress < 100 && (
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${uploadProgress}%` }}></div>
          </div>
        )}
        {uploadProgress === 100 && <p className="upload-success">Upload complete. Processing...</p>}
      </div>
    </div>
  );
}

export default UploadAndDetectPage;