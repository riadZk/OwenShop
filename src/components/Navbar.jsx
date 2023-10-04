import React, { useState , useContext , useEffect, useRef  } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiMenu4Line } from "react-icons/ri";
import { VscChromeClose } from "react-icons/vsc";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { ShopContext } from "../context/shop-context";
import {BsMoonStars} from 'react-icons/bs'
import {MdOutlineLightMode} from 'react-icons/md'
import Links from './data'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, handleModeChange , total,filterProducts,setFilterProducts } = useContext(ShopContext);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollIndicatorRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
// console.log(darkMode)
const handleScroll = () => {
  const position = window.pageYOffset;
  setScrollPosition(position);
};
useEffect(() => {
  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
const scrollPercentage = Math.round(
  (scrollPosition / (document.documentElement.scrollHeight - window.innerHeight)) * 100
);

const scrollIndicatorStyle = {
  width: `${scrollPercentage}%`
};
const [users, setUsers] = useState([]);

useEffect(() => {
  fetch("http://localhost/Ecommerce/Afficher.php")
    .then(response => response.json())
    .then(data => setUsers(data));
}, []);
  return (

  <div className={darkMode && "dark"} >
      <nav className=" bg-white z-50 w-full fixed top-0 dark:bg-black " >
        <div className="max-w-7xl mx-auto  px-4 md:px-6 lg:px-8" >
          <div className="flex justify-between h-16">
            <div className="logo">
            <ScrollLink to="home" spy={true} smooth={true} offset={50} duration={500} className="cursor-pointer" >
            <img src="./images/logo.png" className=" -mt-14 " width={"130px"} />
            </ScrollLink>
            </div>
              <div className="hidden pt-3 md:ml-6 lg:flex md:space-x-8">
                <Link
                  to="/home" 
                  className="text-gray-900 dark:text-white hover:text-gray-700 px-3 py-2 cursor-pointer rounded-md text-md font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-900 dark:text-white hover:text-gray-700 pl-  py-2 rounded-md text-md font-medium"
                >
                  Contact
                </Link>
              <div className="dropdown z-50" >
                <button className="dropbtn border-none w-[120px] dark:text-white  text-gray-900 hover:text-gray-700 py-2 rounded-md text-md
                  font-medium">Shop <i className="fa fa-caret-down"></i></button>
                  <div className="dropdown-content">
                      {Links.map(link =>{
                        <ScrollLink key={link.id} to={link.to} spy={true} smooth={true} offset={50} duration={500} className={link.className} >{link.scrol}</ScrollLink>
                      })}
              </div>
            </div>
                <Link
                  to="/products"
                    onClick={() => {
                    setFilterProducts(users)
                    }}
                  className="text-gray-900 dark:text-white hover:text-gray-700 py-2 rounded-md text-md font-medium pr-20"
                >
                  All Products
                </Link>
                <div className=" flex justify-end pt-[8px] pr-10 ">
              <Link to="/cart" className='text-gray-900 dark:text-white pr-7 md:text-2xl lg:text-lg hover:text-gray-400 duration-500'>
                <AiOutlineShoppingCart size={22} />
                <span className=" absolute right-44 rounded-full bg-slate-800 dark:bg-white dark:text-slate-700 w-5 h-5 text-sm text-center text-white top-2">{total}</span>
                </Link>
                <Link to="/menu" className='text-gray-900 dark:text-white md:text-2xl lg:text-lg hover:text-gray-400 duration-500'>
                <FaRegUser size={20} className="dark:text-white"/>
                </Link>
                <label className=" mr-4 pl-7">
                  <input type="checkbox" className="sr-only peer hidden" onChange={handleModeChange} />
                  {darkMode == 0 ?
                  <div><BsMoonStars size={22} className="dark:text-white cursor-pointer font-bold"/></div>
                  :
                  <div><MdOutlineLightMode size={24} className="dark:text-white cursor-pointer font-bold"/></div>
                  }
                  
              </label>
            </div>
              </div>
    
            <div className="-mr-2 flex items-center lg:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <VscChromeClose className="block h-6 w-6" />
                ):(
                  <RiMenu4Line className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
          <div className="scroll-indicator" style={scrollIndicatorStyle} ref={scrollIndicatorRef}></div>
        </div>
        {isOpen && (
          <div className="lg:hidden" id="mobile-menu">
            <div className="px-2 text-center pt-2 pb-3 space-y-1">
              <Link
                to="/home"
                className="text-gray-900 dark:text-white hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </Link>
          <Link
            to="/contact"
            className="text-gray-900 dark:text-white hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </Link>
          <div class="dropdown">
                <button class="dropbtn border-none w-[120px] dark:text-white text-gray-900 hover:text-gray-700 py-2 rounded-md text-md
                  font-medium">Shop <i class="fa fa-caret-down"></i></button>
                  <div class="dropdown-content">
                     <ScrollLink to="product" spy={true} smooth={true} offset={50} duration={500} className="cursor-pointer" >Product</ScrollLink>
                     <ScrollLink to="accessoire" spy={true} smooth={true} offset={50} duration={500} className="cursor-pointer" >Accessoire</ScrollLink>
                     <ScrollLink to="clothes" spy={true} smooth={true} offset={50} duration={500} className="cursor-pointer" >clothes</ScrollLink>
               </div>
            </div>
          <Link
            to="/products"
            className="text-gray-900 dark:text-white hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            All Products
          </Link>
          <div className=" flex justify-center pt-[8px]  ">
              <Link to="/cart" className='text-gray-900 dark:text-white pr-7 md:text-2xl lg:text-lg hover:text-gray-400 duration-500'>
                <AiOutlineShoppingCart size={22} />
                <span className=" absolute rounded-full bg-slate-800 dark:bg-white dark:text-slate-700 w-5 h-5 text-sm text-center left-80 text-white bottom-7 ">{total}</span>
                </Link>
                <Link to="/menu" className='text-gray-900 dark:text-white md:text-2xl lg:text-lg hover:text-gray-400 duration-500'>
                <FaRegUser size={20} className="dark:text-white"/>
                </Link>
                <label className=" mr-4 pl-7">
                  <input type="checkbox" className="sr-only peer hidden" onChange={handleModeChange} />
                  {darkMode == 0 ?
                  <div><BsMoonStars size={22} className="dark:text-white cursor-pointer font-bold"/></div>
                  :
                  <div><MdOutlineLightMode size={24} className="dark:text-white cursor-pointer font-bold"/></div>
                  }
                  
              </label>
            </div>
        </div>
      </div>
    )}
    </nav>
    
  </div> )
}
export default Navbar;

