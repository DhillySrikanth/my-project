import React, { useState } from "react";
import SearchBar from "./SearchBar";
import RestaurantList from "./RestaurantList";

function App() {
const [restaurants] = useState([
  { id: 1, name: "Tamilnadu Sambar", cuisine: "Tamilian" },
  { id: 2, name: "Telangana Biryani", cuisine: "TelanganaBidda" },
  { id: 3, name: "Punjabi Rasoii", cuisine: "Punjabi" },
  { id: 4, name: "Telugu Spices", cuisine: "Andhra" },
  { id: 5, name: "Bengali Mishti Doi", cuisine: "Bengali" },
  { id: 6, name: "Gujarati Thali", cuisine: "Gujarati" },
  { id: 7, name: "Rajasthani Dal Baati", cuisine: "Rajasthani" },
  { id: 8, name: "Kashmiri Wazwan", cuisine: "Kashmiri" },
  { id: 9, name: "Kerala Sadya", cuisine: "Kerala" },
  { id: 10, name: "Hyderabadi Haleem", cuisine: "Hyderabadi" },
  { id: 11, name: "Maharashtrian Vada Pav", cuisine: "Maharashtrian" },
  { id: 12, name: "Goan Seafood Shack", cuisine: "Goan" },
  { id: 13, name: "Odisha Pakhala", cuisine: "Odia" },
  { id: 14, name: "Assamese Fish Curry", cuisine: "Assamese" },
  { id: 15, name: "Nagaland Smoked Pork", cuisine: "Naga" }
]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const filteredRestaurants = restaurants.filter((r) =>
    r.cuisine.toLowerCase().includes(searchQuery)
  );

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Restaurant List(23BAI70604)</h1>
      <SearchBar onSearch={handleSearch} />
      <RestaurantList data={filteredRestaurants} />
    </div>
  );
}

export default App;
