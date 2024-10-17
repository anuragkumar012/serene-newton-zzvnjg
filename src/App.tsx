import React, { useState } from 'react';

const ImageTo3D = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [convertedFile, setConvertedFile] = useState(null);
  const [isConverting, setIsConverting] = useState(false);
  const [isVideo, setIsVideo] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setIsVideo(file.type.includes('video'));
    }
  };

  const handleConvert = () => {
    if (selectedFile) {
      setIsConverting(true);
      // Simulate AI conversion (this would be replaced with actual AI logic)
      setTimeout(() => {
        setConvertedFile(selectedFile);
        setIsConverting(false);
      }, 2000);
    }
  };

  const handleDownload = () => {
    if (convertedFile) {
      const link = document.createElement('a');
      link.href = URL.createObjectURL(convertedFile);
      link.download = '3d-image.pdf';
      link.click();
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-md shadow-md">
      <h1 className="text-3xl font-bold mb-4">2D to 3D Converter</h1>
      <input
        type="file"
        accept=".jpg, .jpeg, .png, .mp4, .avi"
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />
      {selectedFile && (
        <div className="mt-4">
          <button
            onClick={handleConvert}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
            disabled={isConverting}
          >
            {isConverting ? 'Converting...' : 'Convert to 3D'}
          </button>
        </div>
      )}
      {convertedFile && (
        <div className="mt-4">
          <button
            onClick={handleDownload}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Download as PDF
          </button>
        </div>
      )}
      {isVideo && (
        <div className="mt-4">
          <p className="text-gray-500">Note: Video conversion is not supported in this demo.</p>
        </div>
      )}
    </div>
  );
};

export default ImageTo3D;