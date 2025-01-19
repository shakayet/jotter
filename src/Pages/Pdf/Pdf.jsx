import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../Footer/Footer";
import moment from "moment-timezone";

const Pdf = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedPdfs, setUploadedPdfs] = useState([]);

  const API_URL = "https://jotter-backend.onrender.com";

  // Fetch uploaded PDFs
  const fetchPdfs = async () => {
    try {
      const response = await axios.get(`${API_URL}/pdfs`);
      // Convert timestamps to local timezone for each PDF
      const pdfsWithLocalTime = response.data.map((pdf) => ({
        ...pdf,
        createdAt: moment.utc(pdf.createdAt).tz("Asia/Dhaka").format("YYYY-MM-DD HH:mm"),
      }));
      setUploadedPdfs(pdfsWithLocalTime);
    } catch (error) {
      console.error("Error fetching PDFs:", error);
    }
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // Handle file upload
  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file!");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      await axios.post(`${API_URL}/upload-pdf`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("File uploaded successfully!");
      setSelectedFile(null);
      fetchPdfs(); // Refresh the list of PDFs
    } catch (error) {
      console.error("Error uploading PDF:", error);
    }
  };

  useEffect(() => {
    fetchPdfs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">PDF Uploader</h1>

        <div className="flex items-center gap-4 mb-6">
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          <button
            onClick={handleUpload}
            className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition duration-200"
          >
            Upload
          </button>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mb-4">Uploaded PDFs</h2>
        {uploadedPdfs.length > 0 ? (
          <ul className="space-y-3">
            {uploadedPdfs.map((pdf) => (
              <li key={pdf._id} className="bg-gray-100 p-4 rounded-md shadow-sm">
                <div className="flex justify-between items-center">
                  <a
                    href={pdf.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-medium hover:underline"
                  >
                    {pdf.name}
                  </a>
                  <span className="text-sm text-gray-500">Uploaded At: {pdf.createdAt}</span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No PDFs uploaded yet.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Pdf;
