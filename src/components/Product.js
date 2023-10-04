import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Product } from "../pages/shop/product";
import Navbar from "./Navbar";
import { ShopContext } from "../context/shop-context";
import { PRODUCTS } from "../products"

const Products = () => {
  const { darkMode = false } = useContext(ShopContext);
  const [catPath, setCatPath] = useState("all");
  const [users, setUsers] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    fetch("http://localhost/Ecommerce/Afficher.php")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setFilterProducts(data);
      });
  }, []);

  const categories = [
    "smartphone",
    "laptop",
    "smartwatch",
    "casque",
    "PlayStation 5",
    "television",
    "camera",
    "Souris",
    "clavier",
    "clothes",
    "Speaker",
  ];

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setSelectedCategory(selectedCategory);

    if (selectedCategory === "all") {
      setFilterProducts(PRODUCTS);
      setCatPath("all");
    } else {
      const filters = PRODUCTS.filter((product) => product.category === selectedCategory);
      setFilterProducts(filters);
      setCatPath(selectedCategory);
    }
  };

  return (
    <div className={darkMode && "dark"}>
      <div className="container min-h-screen bg-Light mx-auto dark:bg-Cdark7 pb-20">
        <Navbar />
        <h2 className="text-center dark:text-white text-3xl pt-20">All Products</h2>
        <div className="flex gap-10 ">
          <div className="w-[20%] bg-Light dark:bg-Cdark7 flex flex-col gap-3 px-3 pt-2">
            <select
              className="select-none px cursor-pointer css-button-sliding-to-left--grey capitalize font-semibold"
              onChange={handleCategoryChange}
              value={selectedCategory}
            >
              <option value="all">All</option>
              {categories.map((cat, i) => (
                <option value={cat} key={i}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div>
            <span className="text-blue-900 px-1 dark:text-blue-300">{catPath}</span>
            <div className="grid grid-cols-1 md:grid-cols-2 pl-20 lg:grid-cols-3 gap-5">
              {filterProducts &&
                filterProducts.map((product) => <Product data={product} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
