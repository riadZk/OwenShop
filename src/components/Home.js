import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import { ShopContext } from "../context/shop-context";
import 'aos/dist/aos.css';

const Home = () => {
  let imageURL ;
  const { darkMode } = React.useContext(ShopContext); 
  const [width, setWidth] = useState(window.innerWidth);

  if( darkMode === false){
    imageURL = './images/LightMode.png'
  }else{
    imageURL='./images/PagedarkMode2.png'
  }
  const size = () => {
    setWidth(window.innerWidth);
};

useEffect(() => {
    window.addEventListener('resize', size);
    return () => {
        window.removeEventListener('resize', size);
    };
}, []);
  return (
    <div className={darkMode && "dark"} id='dark'>
      <div id="home" className='h-[80vh] bg-white lg:h-screen bg-cover bg-center bg-no-repeat bg-fixe '
        style={{
          backgroundImage: `url(${imageURL})`,
        }}>
        <div className=' grid grid-cols-3 '>
          <div className=' lg:pt-52 pt-32 pl-10 lg:pl-20 col-span-3 lg:col-span-2'>
            <h1 className='text-2xl md:text-4xl lg:text-5xl text-gray-700 dark:text-white font-bold'
              data-aos-delay="100" data-aos="zoom-in">
              shop easy with
              <span className=' font-momo dark:white font-bold'> OWENSHOP </span>
            </h1>
            <div data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400">
              <p className='mt-10 mb-10 md:text-2xl lg:text-3xl dark:white font-bold dark:text-gray-200 text-gray-600 ml-4'
              >
                Search anything and get it<br />
                fast and fast
              </p>
              <Link to='product' spy={true} smooth={true} offset={50} duration={500}
                className='gradient_anim_btn ml-5'>
                Shop Now
              </Link>
            </div>
          </div>
          <div className='pt-40 hidden lg:block' data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400">
            <img src='./images/C.png'></img>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Home 
