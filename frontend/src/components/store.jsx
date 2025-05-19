import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Store() {
  const navigate = useNavigate();
  const [showProduct, setShowProduct] = useState(false);

  const handleShowProduct = () => {
    setShowProduct(true);
  };

  return (
    <>
      <div>Product name : <input type="text" placeholder="Product name" className="bg-blue-300 border-1 outline-none" /></div>
      <div>Description : <input type="text" placeholder="Enter description" className="bg-blue-300 border-1 outline-none" /></div>
      <div>Catagory : <input type="text" placeholder="Enter catagory" className="bg-blue-300 border-1 outline-none" /></div>
      <div>Image : <input type="file" className="bg-blue-300 border-1 outline-none" /></div>
    </>
  );
}

export default Store;
