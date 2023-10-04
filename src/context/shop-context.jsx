import { createContext, useEffect, useState } from "react";
import { PRODUCTS } from "../products";
import Swal from "sweetalert2";
export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let n = [];
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    n[i] = 0;
  }
  return n;
};
export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
const [filterProducts, setFilterProducts] = useState();
const [user, setUser] = useState();
  const [darkMode, setDarkMode] = useState(false);
  let [total, setTotal] = useState(0);
  console.log(cartItems.length )
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId , quantity) => {
    setCartItems(
      (prev) => ({ ...prev, [itemId]: prev[itemId] + 1 })
      )
      Swal.fire({
        position: 'top-end',
        background:"white",
        color:"green",
        width:"50vh",
        text: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1000
      })
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    Swal.fire({
      position: 'top-end',
      background:"white",
      color:"red",
      width:"50vh",
      text: 'Your work has been update',
      showConfirmButton: false,
      timer: 1000
    });
  };
  const Remove = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] = 0 }))
    Swal.fire({
      position: 'top-end',
      background:"white",
      color:"red",
      width:"50vh",
      text: 'Your work has been update',
      showConfirmButton: false,
      timer: 1000
    });
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart(
      []
    ));
  }
  const handleModeChange = (e) => {
    setDarkMode(
      e.target.checked
    );
  }
  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
    darkMode,
    handleModeChange,
    setTotal,
    total,
    Remove,
    filterProducts,
    setFilterProducts,
    user,
    setUser
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
