import React from "react";

function RestaurantList({ data }) {
  if (data.length === 0) {
    return <p>No restaurants found.</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {data.map((r) => (
        <li key={r.id} style={{ margin: "10px 0", fontSize: "18px" }}>
          <b>{r.name}</b> - {r.cuisine}
        </li>
      ))}
    </ul>
  );
}

export default RestaurantList;
