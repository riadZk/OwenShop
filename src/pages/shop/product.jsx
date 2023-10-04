import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { BsCartPlusFill } from 'react-icons/bs'

export const Product = (props) => {

  const { id, productName, price, productImage, description } = props.data;
  const { addToCart, setTotal, total, darkMode } = useContext(ShopContext);

  const handClick = () => {
    addToCart(id)
    setTotal(
      total + 1
    )
  }
  return (
    <div className={darkMode && 'dark'}>
      <div className="w-full max-w-sm">
        <div className="pt-3 flex justify-center bg-white rounded-2xl w-[180px] h-52">
          <img src={productImage} className="h-40 " alt="not images" />
        </div>
        <div className="px-5  py-5">
          <h5 className="text-xl  tracking-tight text-gray-900 dark:text-white"><b>{productName}</b></h5>
          <p className="text-gray-700 zz dark:text-gray-400">{description}</p>
          <div className="flex items-center zz">
            <span className="text-2xl font-bold pr-12 py-5  text-gray-900 dark:text-white">${price}</span>
            <button className="bg-gray-800  text-blue-50 duration-300 border border-gray-400  px-2 py-1 rounded-md"
              onClick={handClick}>
              <BsCartPlusFill />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
