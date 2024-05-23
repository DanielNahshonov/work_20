import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Start() {
    const [password , setPassword] = useState('')
    const handlePassword = (e) =>{
        setPassword(e.target.value)
    }
    const navigate = useNavigate()

    const checkPassword = ()=>{
        if (password == 12345){
            console.log('good')
            navigate('main')

        }else{
            console.log('not good')
        }
    }
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <input
        onChange={handlePassword}
          type="password"
          className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="password"
        />
        <button
        onClick={checkPassword}
          className="bg-blue-500
         text-white 
         font-bold py-2 px-4 rounded
          hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          enter{" "}
        </button>
      </div>
    </div>
  );
}
