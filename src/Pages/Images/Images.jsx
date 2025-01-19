import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../Footer/Footer";
import moment from "moment-timezone";

const Image = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [uploadedImages, setUploadedImages] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false); // To control modal visibility
    const [modalImage, setModalImage] = useState(null); // To hold image data for modal

    const API_URL = "https://jotter-backend.onrender.com";

    // Fetch uploaded images
    const fetchImages = async () => {
        try {
            const response = await axios.get(`${API_URL}/images`);
            // Convert timestamps to local timezone for each image
            const imagesWithLocalTime = response.data.map((image) => ({
                ...image,
                createdAt: moment.utc(image.createdAt).tz("Asia/Dhaka").format("YYYY-MM-DD HH:mm"),
            }));
            setUploadedImages(imagesWithLocalTime);
        } catch (error) {
            console.error("Error fetching images:", error);
        }
    };

    // Handle file input change
    const handleImageChange = (e) => {
        setSelectedImage(e.target.files[0]);
    };

    // Handle image upload
    const handleUpload = async () => {
        if (!selectedImage) {
            alert("Please select an image!");
            return;
        }

        const formData = new FormData();
        formData.append("file", selectedImage);

        try {
            await axios.post(`${API_URL}/images`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            alert("Image uploaded successfully!");
            setSelectedImage(null);
            fetchImages(); // Refresh the list of images
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };

    // Open modal with large image on double click
    const handleImageDoubleClick = (image) => {
        setModalImage(image);
        setIsModalOpen(true);
    };

    // Close modal
    const closeModal = () => {
        setIsModalOpen(false);
        setModalImage(null);
    };

    useEffect(() => {
        fetchImages();
    }, []);

    return (
        <div>
            <div className="min-h-screen bg-gray-50 p-8">
                <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Image Uploader</h1>

                    <div className="flex items-center gap-4 mb-6">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                        />
                        <button
                            onClick={handleUpload}
                            className="bg-green-600 text-white px-4 py-2 rounded-md font-medium hover:bg-green-700 transition duration-200"
                        >
                            Upload
                        </button>
                    </div>

                    <h2 className="text-xl font-bold text-gray-800 mb-4">Uploaded Images</h2>
                    {uploadedImages.length > 0 ? (
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                            {uploadedImages.map((image) => (
                                <div
                                    key={image._id}
                                    className="bg-gray-100 p-2 rounded-md shadow-sm cursor-pointer"
                                    onDoubleClick={() => handleImageDoubleClick(image)} // Trigger modal on double-click
                                >
                                    <img
                                        src={image.url}
                                        alt={image.name}
                                        className="w-full h-32 object-cover rounded"
                                    />
                                    <p className="text-center text-gray-600 mt-2">{image.name}</p>
                                    <p className="text-center text-sm text-gray-500 mt-1">
                                        Uploaded At: {image.createdAt}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-500">No images uploaded yet.</p>
                    )}
                </div>
            </div>

            {/* Modal to view the image in large size */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                    onClick={closeModal} // Close modal when clicking outside the image
                >
                    <div className="bg-white p-4 rounded-md max-w-full w-full sm:w-3/4 md:w-1/2 lg:w-1/3 overflow-hidden">
                        <img
                            src={modalImage.url}
                            alt={modalImage.name}
                            className="w-full h-auto max-h-[80vh] object-contain"
                        />
                        <p className="text-center mt-2 text-gray-700">{modalImage.name}</p>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default Image;
