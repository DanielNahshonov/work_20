import React, { useState } from "react";
import Card from "./Card";

export default function DeleteFlight({ list }) {
  const [flights, setFlights] = useState(list);
  const [findId, setFindId] = useState("");

  const inputFindId = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setFindId(value);
  };

  const deleteFlight = (_id) => {
    const idExists = flights.some((flight) => flight._id == _id);
    if (idExists) {
      const updatedFlights = flights.filter((item) => item._id !== parseFloat(_id))
      setFlights(updatedFlights);
      console.log('deletetd flight' ,updatedFlights, _id)
    } else {
      alert("No flight found!");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center mb-4">
        <input
          onChange={inputFindId}
          type="text"
          placeholder="Input ID"
          className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mr-2"
        />
        <button
          onClick={() => deleteFlight(findId)}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Delete
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {flights.map((item) => (
          <Card key={item._id} _id={item._id} name={item.name} ppl={item.ppl} />
        ))}
      </div>
    </div>
  );
}
