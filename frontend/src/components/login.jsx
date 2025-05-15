import React from "react";

function Login() {
  return (
    <div class="login-box">
      <h2>Login</h2>
      <form action="/login" method="POST">
        <div class="wrapper">
          <div class="container">
            <div class="email">
              <span class="email"> Email: </span>
              <input type="email" name="email" placeholder="Enter Email" />
            </div>
            <div class="password">
              <span class="password"> Password: </span>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
              />
            </div>
            <div class="btn-wrapper">
              <button type="submit">Submit</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
