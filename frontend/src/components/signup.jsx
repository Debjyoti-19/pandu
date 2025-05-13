import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";

const Signup = ({ error }) => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState(null)

  const { isSigningup, signup } = useAuthStore()

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
  }
 
  return (
    <div className="container">
      <h2>
        Signup
      </h2>
      <form>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="bg-blue-200 outline-none" required />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} className="bg-blue-200 outline-none" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-blue-200 outline-none" required />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input type="number" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="bg-blue-200 outline-none" required />
        </div>
        <button type="tel" onClick={handleRegisterButton}>Register</button>
      </form>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default Signup;
