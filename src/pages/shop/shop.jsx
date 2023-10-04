import React,{useEffect,useState,useContext} from "react";
import { Product } from "./product";
import Footer from "../../components/Footer";
import  Navbar  from "../../components/Navbar" 
import Home from "../../components/Home";
import { ShopContext } from "../../context/shop-context";
import Aos from "aos"
import 'aos/dist/aos.css';
import Page from "../../components/Page";
import Choos from "./Choos";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../../products"

export const Shop = () => {
  const { darkMode } = useContext(ShopContext);
  const [users, setUsers] = useState([]);

useEffect(() => {
    fetch("http://localhost/Ecommerce/Afficher.php")
      .then(response => response.json())
      .then(data => setUsers(data));
}, []);

  // const PRO = users.filter(producjt=> producjt.page == 1);
  // const PRO2 = users.filter(producjt=> producjt.page == 2);
  // const PRO3 = users.filter(producjt=> producjt.page == 3);

   const PRO = PRODUCTS.filter(producjt=> producjt.page == 1);
   const PRO2 = PRODUCTS.filter(producjt=> producjt.page == 2);
   const PRO3 = PRODUCTS.filter(producjt=> producjt.page == 3);

  useEffect(() => {
    Aos.init({
      duration: 3000
    });
  }, [])
  return (
<div className={darkMode && "dark"}>
      <div className="shop dark:bg-Cdark7  bg-Light">
        <Navbar />
        <Home />
        <div className="text-start mt-36" id="product">
        <div className="flex justify-between px-12">
        <h1 className=" text-gray-900 text-3xl zz font-bold  dark:text-white">Product </h1>
        <Link to='/products' className="dark:text-Light pr-5">View All</Link>
        </div>
        </div>
        <div className="products pl-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-10 gap-10 mx-12 shop" data-aos="zoom-in" >
          {PRO.map((product) => (
            <Product data={product} />
          ))}
        </div>
        <div className="text-start mt-36" id="accessoire">
        <div className="flex justify-between px-12">
        <h1 className=" text-gray-900 text-3xl zz font-bold  dark:text-white">Accessoire </h1>
        <Link to='/products' className="dark:text-Light pr-5">View All</Link>
        </div>
          <div className="products pl-12 grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 lg:grid-cols-4 mx-12 shop" data-aos="zoom-in">
          {PRO2.map((product) => (
            <Product data={product} />
          ))}
        </div>
        </div>
        <div className="text-start mt-36" id="clothes">
        <div className="flex justify-between px-12">
        <h1 className=" text-gray-900 text-3xl zz font-bold  dark:text-white">Clothes </h1>
        <Link to='/products' className="dark:text-Light pr-5">View All</Link>
        </div>          
        <div className="products pl-12 grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 lg:grid-cols-4 mx-12 shop" data-aos="zoom-in">
          {PRO3.map((product) => (
            <Product data={product} />
          ))}
        </div>
        </div>
        <Page/>
        <Choos />
        <Footer className=" fixed bottom-1"/>
      </div>
</div>
  );
};
