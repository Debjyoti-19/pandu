import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";


function Login() {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const { isLogining, login } = useAuthStore()

  const navigate = useNavigate()

  const handleLogin = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const userdata = {
      
    }
    login(userdata)
    navigate('/login')
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
            value={email}
            onChange={() => setEmail(e.target.value)}
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
            value={password}
            onChange={() => setPassword(e.target.value)}
            placeholder="Enter Password"
            className="w-full px-4 py-2 bg-white text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>

        <div>
          <button
            type="submit"
            onClick={ handleLogin}
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
