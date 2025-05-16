import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!passwordRegex.test(password)) {
      alert(
        "Password must be at least 8 characters long and contain at least one letter and one number."
      );
      return;
    }
    const userdata = {
      email,
      password,
    };
    Login(userdata)
      .then((response) => {
        if (response.status === 200) {
          alert("Login successful");
          navigate("/home");
        } else {
          alert("Invalid credentials");
        }
      })
      .catch((error) => {
        console.error("Error during login:", error);
        alert("An error occurred. Please try again.");
      });
    navigate("/home");
  }

  return (
    <div className="max-w-md mx-auto mt-20 p-8 bg-gray-100 shadow-lg rounded-2xl">
      <h2 className="text-3xl font-bold text-black mb-6 text-center">Login</h2>
      <form action="/login" method="POST" className="space-y-5">
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
            placeholder="Enter Email"
            className="w-full px-4 py-2 bg-white text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-black font-semibold mb-1"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            className="w-full px-4 py-2 bg-white text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>

        <div>
          <button
            type="submit"
            onClick={handleLogin}
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
