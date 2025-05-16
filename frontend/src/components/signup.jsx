import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";

const Signup = ({ error }) => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState(null)
  const [password, setPassword] = useState(null)

  const { isSigningup, signup } = useAuthStore()

  const navigate = useNavigate()

  const handleRegisterButton = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }
    const userdata = {
      firstName,
      lastName,
      email,
      phone
    }
    signup(userdata)
    navigate('/login')
  }
 
  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-gray-100 shadow-lg rounded-2xl">
      <h1 className="text-3xl font-bold text-black mb-6 text-center">Signup</h1>
      <form className="space-y-5">
        <div>
          <label
            htmlFor="firstName"
            className="block text-black font-semibold mb-1"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-4 py-2 bg-white text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="block text-black font-semibold mb-1"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
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
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 bg-white text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-black font-semibold mb-1"
          >
            Phone
          </label>
          <input
            type="number"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-2 bg-white text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-black font-semibold mb-1"
          >
            password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 bg-white text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>

        <button
          type="button"
          onClick={handleRegisterButton}
          className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-500 transition duration-200"
        >
          Register
        </button>
      </form>

      {error && (
        <div className="mt-4 text-sm text-red-600 font-medium text-center">
          {error}
        </div>
      )}
    </div>
  );
};

export default Signup;
