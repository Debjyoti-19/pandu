import {useState} from "react"; 
import { Route, Routes } from "react-router-dom";
import Page1 from "./components/page1";
import Signup from "./components/signup";
import Login from "./components/login";
import "./App.css";
import Home from "./components/home";
import Store from "./components/store";
import Footer from "./components/footer";

function App() {
  const [products, setProducts] = useState([]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={
            <>
              <Home products={products} addproduct />
              <Footer />
            </>
          }
        />
        <Route path="/store" element={<Store products={products} setProducts={setProducts} />} />
      </Routes>
    </>
  );
}

export default App;
