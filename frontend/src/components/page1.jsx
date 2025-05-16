import React from "react";
import { useNavigate } from "react-router-dom";

function Page1() {
  const navigation = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-6">
      <div className="w-64">
        <button
          onClick={() => navigation("/login")}
          className="w-full bg-black text-white py-3 rounded-lg font-semibold text-lg hover:bg-gray-500 transition duration-200"
        >
          Login
        </button>
      </div>
      <div className="w-64">
        <button
          onClick={() => navigation("/signup")}
          className="w-full bg-black text-white py-3 rounded-lg font-semibold text-lg hover:bg-gray-500 transition duration-200"
        >
          New Account
        </button>
      </div>
    </div>
  );
}

export default Page1;
