import React, { useContext, useState , useEffect} from "react"
import { ShopContext } from "../../context/shop-context"
import { PRODUCTS } from "../../products"
import { CartItem } from "./cart-item"
import { Link, useNavigate } from "react-router-dom"
import { AiOutlineClose } from "react-icons/ai"
import { useCountries } from "use-react-countries";
import AOS from "aos"
import "aos/dist/aos.css"
import {  BsCreditCard2BackFill } from "react-icons/bs"
export const Cart = () => {
  const { cartItems, getTotalCartAmount , darkMode } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const [showModal, setShowModal] = useState(false);
  const [cardNumber, setCardNumber] = useState("")
  const { countries } = useCountries();

  if (cardNumber.length === 4)
    setCardNumber(cardNumber + " ")
  else if (cardNumber.length === 9) {
    setCardNumber(cardNumber + " ")
  } else if (cardNumber.length === 14) {
    setCardNumber(cardNumber + " ")
  } else if (cardNumber.length === 19) {
    setCardNumber(cardNumber + " ")
  }else if (cardNumber.length === 24) {
    setCardNumber(cardNumber + " ")
  }

  const navigate = useNavigate();
  // const imageURL = "./images/Macbook.png"
  
  const [displayCard, setDisplayCard] = useState(true);
  const [displayPaypal, setDisplayPaypal] = useState(false);

  const showCard = () => {
    setDisplayCard(true);
    setDisplayPaypal(false);
  };

  const showPaypal = () => {
    setDisplayCard(false);
    setDisplayPaypal(true);
  };

  
  return (
    <div className={darkMode && "dark"}>
      <div className="cart min-h-screen cartT dark:bg-Cdark7">
        <h1 className="text-center text-2xl font-bold dark:text-white">Your Cart Items</h1>
        <div>
        </div>
        <div className="cart bg-transparent">
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />;
            }
          })}
        </div>
        {totalAmount > 0 ? (
          <div className="mt-5">
            <p className="mb-5 font-bold dark:text-white"> <span className="text-xl">Total </span>: ${totalAmount} </p>
            <button onClick={() => navigate("/")} className="css-button-sliding-to-top--black mr-5"> Continue Shopping</button>
            <button
              className="css-button-sliding-to-top--black z-50"
              type="button"
              onClick={() => setShowModal(true)}
            >
              Buy Now
            </button>
            <div className="flex justify-center mt-10">
                        <img src='./images/payment2.png' className=" cursor-pointer my-2 center" alt="not images" width={"235px"} />
            </div> 
          </div>
        ) : (
          <div className="mt-20 text-center">
            <h1 className=" font-bold dark:text-white">Your Shopping Cart is Empty</h1>
            <Link to='/products' className=" mt-4 text-2xl  text-cyan-700 "> All Products</Link>
          </div>
      
        )}
        {showModal ? (
          <>
            <div
              className="justify-center  items-center pt-12  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative h-screen w-[500px] my-6  mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start text-black
                   justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-xl font-semibold">
                      BUY NOW
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-gray-900  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <AiOutlineClose size={22} />
                    </button>
                    
                  </div>
                  <div className="flex justify-center mt-4">
                  <button type="button" onClick={showCard} class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 mr-2 mb-2">
                   <BsCreditCard2BackFill size={18} className="mr-2"/>
                   Pay with Card
                  </button>
                  <button type="button" onClick={showPaypal} class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 mr-2 mb-2">
                  <svg class="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="paypal" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"></path></svg>
                  Pay with PayPal
                  </button>
                  </div>
                  <form>
                  {displayCard &&<div id="Card " >
                      <div class="my-2 px-5">
                        <label className="font-bold text-sm mb-2 ml-1 text-gray-800">Email</label>
                        <input type="text" id="email" className=" border border-gray-300 mb-6 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        <label className="font-bold text-sm  ml-1 text-gray-800">Name on card</label>
                        <input type="text" id="text" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name " required />
                      </div>
                      <div className="mb-6 px-5">
                        <label className="font-bold text-sm mb-2 ml-1 text-gray-800">Card Number</label>
                        <input type="text" id="text" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" max={20} value={cardNumber} onChange={(e) => { setCardNumber(e.target.value) }} placeholder="0000 0000 0000 0000" required />
                      </div>
                      <div className="mb-6 px-5">
                        <div className="flex justify-between">
                          <select id="countries" className="bg-gray-50 border mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option>MM</option>
                            <option>January (01)</option>
                            <option>February (02)</option>
                            <option>March (03)</option>
                            <option>April (04)</option>
                            <option>May (05)</option>
                            <option>June (06)</option>
                            <option>July (07)</option>
                            <option>August (08)</option>
                            <option>September (09)</option>
                            <option>October (10)</option>
                            <option>November (11)</option>
                            <option>December (12)</option>
                          </select>
                          <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option>YY</option>
                            <option>2023</option>
                            <option>2024</option>
                            <option>2025</option>
                            <option>2026</option>
                            <option>2027</option>
                            <option>2028</option>
                          </select>
                        </div>
      
                      </div>
                      <div class="mb-6 px-5">
                        <input type="text" id="text" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="CCV" required />
                      </div>
                      <div className="mb-6 px-5">
                   <button
                    className="w-full text-lg zz3 flex pt-2 justify-center text-white bg-paypal h-12 rounded-md hover:shadow-md hover:shadow-blue-400">
                                                    <BsCreditCard2BackFill size={24} className="text-white mt-[1.5px] mr-2"/>Pay Now
                  </button>
                   </div>
                    </div>}
                    {displayPaypal &&<div id="paypal">
                    <div class="my-2 px-5">
                       <div className="mb-6 px-5">
                         <label className="font-bold text-sm mb-2 ml-1 text-gray-800">Email</label>
                         <input type="text" id="email" className=" border border-gray-300 mb-6 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        
                       </div>
                       <div className=" mb-6 px-5">
                          <label className="font-bold text-sm  ml-1 text-gray-800">Country</label>
                          <select label="Country"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                          {countries.map(({ name }) => (
                          <option key={name} value={name}>
                            {name}
                          </option>
                        ))}
                      </select>
                      </div>
                   <div className="mb-6 px-5">
                     <label  className="font-bold text-sm mb-2 ml-1 text-gray-800">Postal Code </label>
                     <input type="text" id="email" className=" border border-gray-300 mb-6 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                   </div>
                   <div className="mb-6 px-5">
                   <button className="w-full bg-blue-500 h-12 rounded-md hover:shadow-md hover:shadow-blue-400">
                   <img src="./images/2560px.png" width={"80px"} className="ml-40"/>
                  </button>
                   </div>
                      </div>
                      
                    </div>}
                  </form>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    </div>
  );
};