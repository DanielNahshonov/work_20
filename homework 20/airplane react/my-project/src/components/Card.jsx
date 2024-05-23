import React from "react";

export default function Card({ _id, name, ppl }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-xl font-bold mb-2">Flight Number: {_id}</h2>
      <p className="text-gray-700 mb-1">Company: {name}</p>
      <p className="text-gray-700">Passengers: {ppl}</p>
    </div>
  );
}
