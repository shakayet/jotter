import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../Footer/Footer";
import moment from "moment-timezone";

const Notes = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ header: "", description: "", type: "note" });
  const [showItem, setShowItem] = useState(null);

  const API_URL = "https://jotter-backend.onrender.com/notes"; // Change API route to /notes

  // Fetch notes from server
  const fetchItems = async () => {
    try {
      const response = await axios.get(API_URL);
      setItems(response.data); // No need to filter since it's for notes only
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  // Add a new note
  const addItem = async () => {
    if (!newItem.header || !newItem.description) {
      alert("Please fill in both header and description.");
      return;
    }

    try {
      const response = await axios.post(API_URL, newItem);
      setItems((prevItems) => [...prevItems, response.data]);
      setNewItem({ header: "", description: "", type: "note" });
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  // Delete a note
  const deleteItem = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setItems((prevItems) => prevItems.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Notes</h1>

      {/* Add Note Section */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Header"
          value={newItem.header}
          onChange={(e) => setNewItem({ ...newItem, header: e.target.value })}
          className="w-full mb-2 px-3 py-2 border rounded"
        />
        <textarea
          placeholder="Description"
          value={newItem.description}
          onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
          className="w-full mb-2 px-3 py-2 border rounded"
        />
        <button
          onClick={addItem}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Note
        </button>
      </div>

      {/* Notes List */}
      {items.map((item) => (
        <div key={item._id} className="border-b mb-4 pb-4">
          <h2 className="font-bold">{item.header}</h2>
          <p className="text-sm text-gray-600">
            Created At:{" "}
            {moment.utc(item.createdAt).tz("Asia/Dhaka").format("YYYY-MM-DD HH:mm")}
          </p>
          <div className="flex justify-between mt-2">
            <button
              onClick={() => setShowItem(item)}
              className="text-blue-500 hover:underline"
            >
              Read Note
            </button>
            <button
              onClick={() => deleteItem(item._id)}
              className="text-red-500 hover:underline"
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      {/* Full Note Display */}
      {showItem && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg max-w-lg">
            <h2 className="font-bold text-xl">{showItem.header}</h2>
            <p className="mt-4">{showItem.description}</p>
            <button
              onClick={() => setShowItem(null)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Notes;
