import React, { useState, useEffect } from "react";
import axios from "axios";

const Recent = () => {
  const [recentItems, setRecentItems] = useState([]);

  const API_URL = "https://jotter-backend.onrender.com";

  // Fetch the 5 most recent items
  const fetchRecentItems = async () => {
    try {
      const [pdfsResponse, imagesResponse, notesResponse] = await Promise.all([
        axios.get(`${API_URL}/pdfs`),
        axios.get(`${API_URL}/images`),
        axios.get(`${API_URL}/notes`),
      ]);

      const pdfs = pdfsResponse.data.map((pdf) => ({
        type: "PDF",
        name: pdf.name,
        uploadedAt: pdf.uploadedAt,
        url: pdf.url,
      }));

      const images = imagesResponse.data.map((image) => ({
        type: "Image",
        name: image.name,
        uploadedAt: image.uploadedAt,
        url: image.url,
      }));

      const notes = notesResponse.data.map((note) => ({
        type: "Note",
        name: note.header,
        uploadedAt: note.createdAt,
        description: note.description,
      }));

      // Combine all items and sort by upload time (descending)
      const allItems = [...pdfs, ...images, ...notes].sort(
        (a, b) => new Date(b.uploadedAt) - new Date(a.uploadedAt)
      );

      // Slice to get the most recent 5 items
      setRecentItems(allItems.slice(0, 5));
    } catch (error) {
      console.error("Error fetching recent items:", error);
    }
  };

  useEffect(() => {
    fetchRecentItems();
  }, []);

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Recent Uploads</h1>
      <ul className="space-y-4">
        {recentItems.map((item, index) => (
          <li key={index} className="border p-4 rounded shadow-sm">
            <h2 className="text-lg font-semibold">{item.name || "Unnamed"}</h2>
            <p className="text-sm text-gray-500">
              Type: {item.type} | Uploaded on:{" "}
              {new Date(item.uploadedAt).toLocaleString()}
            </p>
            {item.type === "Note" ? (
              <p className="text-gray-700 mt-2">{item.description}</p>
            ) : (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View {item.type}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recent;
