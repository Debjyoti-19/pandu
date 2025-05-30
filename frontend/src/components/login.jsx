import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";

function Login() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  const { isLogining, login } = useAuthStore();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!firstName.trim()) {
      alert("Please enter your first name.");
      return;
    }
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const userdata = {
      firstName,
      email,
    };
    login(userdata);
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-8 bg-gray-100 shadow-lg rounded-2xl">
      <h2 className="text-3xl font-bold text-black mb-6 text-center">Login</h2>
      <form onSubmit={handleLogin} className="space-y-5">
        <div>
          <label
            htmlFor="firstName"
            className="block text-black font-semibold mb-1"
          >
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter First Name"
            className="w-full px-4 py-2 bg-white text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-black font-semibold mb-1"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            className="w-full px-4 py-2 bg-white text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-400 transition duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
