import React from "react";
import { useNavigate } from "react-router-dom";

function Page1() {
  const navigation = useNavigate();

  return (
    <div class="main">
      <form action="/login" method="get">
        <div class="wrapper1 wrapper">
          <button type="submit" onClick={navigation("/login")}>
            <span>Login</span>
          </button>
        </div>
      </form>
      <form action="/signup" method="get">
        <div class="wrapper2 wrapper">
          <button type="submit" onClick={navigation("/signup")}>
            <span>New Account</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Page1;
