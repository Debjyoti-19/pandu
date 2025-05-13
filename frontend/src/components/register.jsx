import React from "react";
import "./style.css"; // Adjust path if needed

const Signup = ({ error }) => {
    

  return (
    <div className="container">
      <h2>
        Signup
      </h2>
      <form action="/register" method="POST">
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" required />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            minLength="6"
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default Signup;
