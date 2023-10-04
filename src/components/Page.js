import React from 'react'
import { Link } from 'react-scroll';
const Page = () => {
  const images = './images/Frame2.png'
  return (
    <div className=" min-h-screen px-20 ">
    <h1 className=' zz3 text-center text-gray-900 my-10 dark:text-Light text-2xl font-bold'>New Collections</h1>
    <div className='flex items-center justify-center'>
      <div className=" grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        <div className="group relative rounded-lg cursor-pointer bg-black items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div className=" h-96 w-72">
            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="./images/fa.jfif" alt="" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div className="absolute inset-0 pb-4 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="font-dmserif text-3xl  pb-2 font-bold text-white">PlayStation 5</h1>
            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Black and White version of the PS5 coming out on sale.</p>
            <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><Link spy={true} smooth={true} offset={50} duration={500} to='product'>Shop Now</Link></button>
          </div>
        </div>
        <div className="group relative rounded-lg bg-black cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div className=" w-72 h-96">
            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="./images/pe.jpg" alt="" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div className="absolute inset-0 pb-12 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="font-dmserif text-3xl pb-2 font-bold text-white">Speakers</h1>
            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"> wireless speakers.</p>
            <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><Link spy={true} smooth={true} offset={50} duration={500} to='accessoire'>Shop Now</Link></button>
          </div>
        </div>
        <div className="group relative rounded-lg cursor-pointer items-center justify-center overflow-hidden  transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div className="h-96 w-72">
            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="./images/-1117Wx1400H-460960227-black-MODEL.webp"  alt="" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div className="absolute inset-0 pb-5 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="font-dmserif text-3xl  pb-9 font-bold text-white">Men Collections</h1>
            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Featured men collections that give you another vibe.</p>
            <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><Link spy={true} smooth={true} offset={50} duration={500} to='clothes'>Shop Now</Link></button>
          </div>
        </div>
      </div>
    </div>
      </div>
  )
}

export default Page
