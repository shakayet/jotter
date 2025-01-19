import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../Footer/Footer';

const Favourites = () => {
  const [items, setItems] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const API_URL = 'https://jotter-backend.onrender.com/backend';

  // Fetch all items
  const fetchItems = async () => {
    try {
      const response = await axios.get(`${API_URL}/notes`);
      setItems(response.data);
      console.log('All items:', response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  // Fetch favourites
  const fetchFavourites = async () => {
    try {
      const response = await axios.get(`${API_URL}/favourites`);
      setFavourites(response.data); // Update state with fetched favourites
      console.log('Favourite items:', response.data);
    } catch (error) {
      console.error('Error fetching favourites:', error);
    }
  };

  // Toggle favourite status for any item (optional, if you want to toggle favourites)
  const markAsFavourite = async (id) => {
    try {
      await axios.post(`${API_URL}/favourite`, { id });
      fetchFavourites(); // Re-fetch favourites after marking an item as favourite
    } catch (error) {
      console.error('Error marking as favourite:', error);
    }
  };

  useEffect(() => {
    fetchItems();
    fetchFavourites();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Items</h1>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Items List</h2>
        <ul>
          {items.map((item) => (
            <li key={item._id} className="flex justify-between items-center mb-2">
              <span>{item.header}</span> {/* Display the header */}
              <button
                onClick={() => markAsFavourite(item._id)}
                className="text-blue-500 hover:underline"
              >
                Mark as Favourite
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Favourite Items</h2>
        <ul>
          {favourites.length === 0 ? (
            <p>No favourites added yet.</p>
          ) : (
            favourites.map((fav) => (
              <li key={fav._id} className="flex justify-between items-center mb-2">
                <span>{fav.header}</span> {/* Display the header of the favourite item */}
              </li>
            ))
          )}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Favourites;
