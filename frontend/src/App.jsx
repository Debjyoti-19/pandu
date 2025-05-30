import { Route, Routes } from "react-router-dom";
import Page1 from "./components/page1";
import Signup from "./components/signup";
import Login from "./components/login";
import "./App.css";
import Home from "./components/home";
import Store from "./components/store";
import { useAuthStore } from "./store/useAuthStore";

function App() {
  const { authUser } = useAuthStore()

  return (
    <>
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Page1 /> } />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </>
  );
}

export default App;
