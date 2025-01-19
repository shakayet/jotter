import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";
import moment from "moment-timezone";
import Footer from "../Footer/Footer";

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const API_URL = "https://jotter-backend.onrender.com/backend";

  // Fetch items for the selected date
  const fetchItemsForDate = async (date) => {
    setLoading(true);
    setMessage("");
    const formattedDate = moment(date).tz("Asia/Dhaka").format("YYYY-MM-DD"); // Format date in local timezone

    try {
      const [pdfsResponse, imagesResponse, notesResponse] = await Promise.all([
        axios.get(`${API_URL}/pdfs?date=${formattedDate}`),
        axios.get(`${API_URL}/images?date=${formattedDate}`),
        axios.get(`${API_URL}/notes?date=${formattedDate}`),
      ]);

      const pdfs = pdfsResponse.data.map((pdf) => ({
        type: "PDF",
        name: pdf.name,
        uploadedAt: moment.utc(pdf.uploadedAt).tz("Asia/Dhaka").format("YYYY-MM-DD HH:mm"),
        url: pdf.url,
      }));

      const images = imagesResponse.data.map((image) => ({
        type: "Image",
        name: image.name,
        uploadedAt: moment.utc(image.uploadedAt).tz("Asia/Dhaka").format("YYYY-MM-DD HH:mm"),
        url: image.url,
      }));

      const notes = notesResponse.data.map((note) => ({
        type: "Note",
        name: note.header,
        createdAt: moment.utc(note.createdAt).tz("Asia/Dhaka").format("YYYY-MM-DD HH:mm"),
        description: note.description,
      }));

      const allItems = [...pdfs, ...images, ...notes];

      if (allItems.length === 0) {
        setMessage("No items found on this date.");
      }

      setItems(allItems);
    } catch (error) {
      console.error("Error fetching items:", error);
      setMessage("Error fetching items. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle date change
  const handleDateChange = (date) => {
    setSelectedDate(date);
    fetchItemsForDate(date);
  };

  return (
    <div>
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Calendar</h1>
        <div className="flex flex-col items-center">
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            className="mb-6 border rounded shadow-md"
          />
          <h2 className="text-lg font-semibold mb-4">
            Selected Date: {selectedDate.toDateString()}
          </h2>
          {loading ? (
            <p className="text-blue-500">Loading...</p>
          ) : message ? (
            <p className="text-gray-500">{message}</p>
          ) : (
            <ul className="w-full space-y-4">
              {items.map((item, index) => (
                <li key={index} className="border p-4 rounded shadow-sm">
                  <h3 className="text-lg font-semibold">
                    {item.name || "Unnamed"} ({item.type})
                  </h3>
                  <p className="text-sm text-gray-500">
                    {item.type === "Note"
                      ? `Created on: ${item.createdAt}`
                      : `Uploaded on: ${item.uploadedAt}`}
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
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CalendarComponent;
