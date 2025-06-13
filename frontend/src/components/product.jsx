import { useParams } from "react-router-dom";
import { useAdminStore } from "../store/useAdminStore.js";

function Product() {
  const { productId } = useParams();
  const { getProductDetail } = useAdminStore()
  const handleEnter = () => {
    getProductDetail(productId)
  }
  return (
    <>
      Product ID: {productId}
      <button onClick={handleEnter} className="bg-blue-300 hover:bg-blue-400 p-2 mx-2 cursor-pointer transition">click</button>
    </>
  );
}

export default Product