import React from 'react'
import { TbTruckDelivery } from 'react-icons/tb'
import { RiCustomerService2Line } from 'react-icons/ri'
import { MdOutlineSecurity, MdOutlineSecurityUpdateGood } from 'react-icons/md'
const Choos = () => {
  return (
    <div className='w-full my-10 lg:-mt-24'>
      <h1 className='text-center zz3 text-gray-900 dark:text-Light text-2xl font-bold'>Why Choose Us</h1>
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-10'>
        <div className='text-center my-7 zz2'>
          <div className=' flex justify-center'>
            <p className=' text-center  dark:bg-Light dark:shadow-Light dark:text-black bg-gray-900 text-white pt-2 pl-2 shadow-md shadow-black w-14 h-14 rounded-full'><TbTruckDelivery size={40} /></p>
          </div>
          <p className=' text-xl font-bold pt-4 pb-1  dark:text-white'>FREE AND FAST DELIVERY</p>
          <p className=' text-sm dark:text-Light'>Free delivery for all orders over $140</p>
        </div>
        <div className='text-center my-7 zz2'>
          <div className=' flex justify-center '>
            <p className=' text-center dark:bg-Light dark:shadow-Light dark:text-black bg-gray-900 text-white pt-2 pl-2 shadow-md shadow-black w-14 h-14 rounded-full'><RiCustomerService2Line size={40} /></p>

          </div>
          <p className=' text-xl font-bold pt-4 pb-1  dark:text-white'>24/7 CUSTOMER SERVICE</p>
          <p className=' text-sm dark:text-Light'>Friendly 24/7 customer support</p>
        </div>
        <div className='text-center my-7 zz2'>
          <div className='flex justify-center'>
            <p className=' text-center dark:bg-Light dark:text-black dark:shadow-Light bg-gray-900 text-white pt-2 pl-2 shadow-md shadow-black w-14 h-14 rounded-full'><MdOutlineSecurityUpdateGood size={40} /></p>
          </div>
          <p className=' text-xl font-bold pt-4 pb-1 dark:text-white'>MONEY BACK GUARANTEE</p>
          <p className=' text-sm dark:text-Light'>We reurn money within 30 days</p>
        </div>
        <div className='text-center my-7 zz2'>
          <div className='flex justify-center'>
            <p className=' text-center dark:bg-Light dark:shadow-Light dark:text-black bg-gray-900 text-white pt-2 pl-2 shadow-md shadow-black w-14 h-14 rounded-full'><MdOutlineSecurity size={40} /></p>

          </div>
          <p className=' text-xl font-bold pt-4 pb-1 dark:text-white'>secure payment</p>
          <p className=' text-sm dark:text-Light'>100% secure payement</p>
        </div>
      </div>
    </div>
  )
}

export default Choos
