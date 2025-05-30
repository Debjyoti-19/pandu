import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";

const Signup = ({ error }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contact, setContact] = useState("");

  const { isSigningup, signup } = useAuthStore();
  const navigate = useNavigate(); 

  const handleRegisterButton = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    let email = "";
    let phone = "";

    if (emailRegex.test(contact)) {
      email = contact;
    } else if (phoneRegex.test(contact)) {
      phone = contact;
    } else {
      alert("Please enter a valid email address or 10-digit phone number.");
      return;
    }

    const userdata = {
      firstName,
      lastName,
      email,
      phone,
    };

    try {
      await signup(userdata);
      navigate("/");
    } catch (err) {
      alert("Signup failed. Please try again.");
      // Optionally set error state here
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-gray-100 shadow-lg rounded-2xl">
      <h1 className="text-3xl font-bold text-black mb-6 text-center">Sign up</h1>
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
            htmlFor="contact"
            className="block text-black font-semibold mb-1"
          >
            Email or Phone
          </label>
          <input
            type="text"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Enter your email or phone number"
            className="w-full px-4 py-2 bg-white text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>

        <button
          type="button"
          onClick={handleRegisterButton}
          disabled={isSigningup}
          className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-500 transition duration-200"
        >
          {isSigningup ? "Signing Up..." : "Sign Up"}
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
