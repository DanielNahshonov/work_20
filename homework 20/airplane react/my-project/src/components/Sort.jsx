import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

export default function Sort({ list }) {
  const navigate = useNavigate();
  const [sortedList, setSortedList] = useState(list);
  const [sortKey, setSortKey] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const inputSort = (event) => {
    const value = event.target.value;
    setSortKey(value);

    const filteredAndSorted = list
      .filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))

    setSortedList(filteredAndSorted);
  };

  const handleSortOrderChange = (event) => {
    const order = event.target.value;
    setSortOrder(order);

    let sorted = [...sortedList];
    if (order === "asc") {
      sorted.sort((a, b) => a.ppl - b.ppl);
    } else if (order === "desc") {
      sorted.sort((a, b) => b.ppl - a.ppl);
    }
    setSortedList(sorted);
  };

  const sortList = () => {
    const sorted = [...sortedList].sort((a, b) => a.ppl - b.ppl);
    setSortedList(sorted);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col items-center justify-center w-full p-4">
        <button
          onClick={sortList}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mb-4"
        >
          Sort by Passengers
        </button>
        <input
          onChange={inputSort}
          value={sortKey}
          type="text"
          placeholder="Enter company name"
          className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4"
        />
        <select
          value={sortOrder}
          onChange={handleSortOrderChange}
          className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4"
        >
          <option value="">Sort by Passengers</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <div className="flex flex-col items-center justify-center w-1/2 p-4">
        {sortedList.map((item) => (
          <Card key={item._id} _id={item._id} name={item.name} ppl={item.ppl} />
        ))}
      </div>
    </div>
  );
}
