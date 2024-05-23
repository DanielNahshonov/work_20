import React, { useState } from "react";
import Card from "./Card";

export default function AddFlight({ list }) {
  const [flights, setFlights] = useState(list);
  const [newFlight, setNewFlight] = useState({ _id: "", name: "", ppl: "" });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFlight({ ...newFlight, [name]: value });
  };

  const validateInputs = () => {
    const { _id, name, ppl } = newFlight;
    const idExists = flights.some(flight => flight._id === _id);

    if (!_id || _id.length < 1 || _id.length > 5) {
      return "ID must be between 1 and 5 characters long.";
    }
    if (idExists) {
      return "ID must be unique.";
    }
    if (!name) {
      return "Name is required.";
    }
    const numPpl = Number(ppl);
    if (isNaN(numPpl) || numPpl < 1 || numPpl > 450) {
      return "Number of passengers must be between 1 and 450.";
    }
    return null;
  };

  const addFlight = () => {
    const errorMessage = validateInputs();
    if (errorMessage) {
      setError(errorMessage);
    } else {
      setFlights([...flights, { ...newFlight, ppl: Number(newFlight.ppl) }]);
      setNewFlight({ _id: "", name: "", ppl: "" });
      setError("");
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          name="_id"
          value={newFlight._id}
          onChange={handleInputChange}
          placeholder="ID"
          className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4"
        />
        <input
          type="text"
          name="name"
          value={newFlight.name}
          onChange={handleInputChange}
          placeholder="Name"
          className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4"
        />
        <input
          type="text"
          name="ppl"
          value={newFlight.ppl}
          onChange={handleInputChange}
          placeholder="Passengers"
          className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4"
        />
        <button
          onClick={addFlight}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mb-4"
        >
          Add
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </div>
      <div className="flex flex-col items-center justify-center w-1/2 p-4">
        {flights.map((item) => (
          <Card key={item._id} _id={item._id} name={item.name} ppl={item.ppl} />
        ))}
      </div>
    </div>
  );
}
