import React from 'react';
import Products from '../products/Products';
import Nav from '../nav/Nav';
import Accessoire from "../Accessoire/Accessoire";
import Footer from "../Footer/Footer";
import Tshirt from '../t-shirt/Tshirt';
function Home() {
    return(
        <div className='App-3'>
        <Nav />
        <img src="/pectures/head.jpg" alt="" className='img2'/>
        <div className='focus mb-6'>
        <h1>Power up your game Life </h1>
        <p>Games & accessories are available</p>
        <button type="submit">BUY NOW</button>
        </div>
      <Products />
      <Accessoire />
      <Tshirt />
      <Footer />
        </div>
    )
}

export default Home