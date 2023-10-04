import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

const Accessoire = (props) => {
  const { id, acstName, price, acsImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product mt-10 py-5 bg-gray-200 w-64 rounded-lg ">
      <img src={acsImage} className="ml-10 w-40 h-40 "/>
      <div className="text-center pt-2">
        <p className=" text-gray-600">
          <b>{acstName}</b>
        </p>
        <p className=" text-gray-600 text-xl"> ${price}</p>
      </div>
      <div className="flex justify-center gap-8 mt-8 mb-3">
      <button className="bg-gray-800  text-blue-50 hover:bg-gray-50 hover:text-gray-400 duration-300 border border-gray-400 px-2 py-1 rounded-md" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
      <button className="bg-gray-800 text-blue-50 hover:bg-gray-50 hover:text-gray-400 duration-300 border border-gray-400 px-2 py-1 rounded-md">
         More info
      </button>
    
      </div>
    </div>
  );
};
export default Accessoire