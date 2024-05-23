import React from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

const App = ({ list }) => {
  const navigate = useNavigate();

  const addFlight = () =>{
    navigate('/controlpanel/addFlight')
  }

  const deleteFlight = () =>{
    navigate('/controlepanel/delete')
  }

  const sortList = () => {
    navigate('/controlpanel/sort');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="flex w-full">
        {/* Column for buttons */}
        <div className="flex flex-col items-center justify-center w-1/2 p-4">
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mb-4">
            All Flights
          </button>
          <button 
            onClick={sortList}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mb-4"
          >
            Sort Flights
          </button>
          <button 
          onClick={addFlight}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mb-4">
            Add Flight
          </button>
          <button 
          onClick={deleteFlight}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mb-4">
            Delete Flight
          </button>
        </div>

        {/* Column for flight cards */}
        <div className="flex flex-col items-center justify-center w-1/2 p-4">
          {list.map((item) => (
            <Card
              key={item._id}
              _id={item._id}
              name={item.name}
              ppl={item.ppl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
