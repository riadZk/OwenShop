import React, { useState,useContext } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link , useNavigate} from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { FiLogOut } from 'react-icons/fi';
import { ShopContext } from "../../../context/shop-context";
function Navbar() {
  const [sidebar, setSidebar] = useState(true);  
  const showSidebar = () => setSidebar(!sidebar);
  const {user} = useContext(ShopContext);

  const naviget = useNavigate()
  const logoutSubmit=()=>{
    localStorage.setItem("login", "");
    localStorage.setItem("loginStatus", "Logged out successfully!")
    console.log('gga')
    naviget("/");
}
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
    <div className='flex justify-between bg-[#060b26]'>
          <div className='navbar '>
            <Link to='#' className='menu-bars'>
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </div>
          <div>
          <div className='flex mr-10 mt-4'>
            <p className=' text-white mt-2 mr-6'> Riad Zakaria </p>
           <img src="https://img.icons8.com/color/48/000000/circled-user-male-skin-type-4--v1.png" alt="avatar" className="avatar rounded-circle" />
           </div> 
        </div>
    </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link  className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <div  className='flex ml-8'>
            <FiLogOut size={20} className='mr-3 mt-1 font-bold'/>
            <button onClick={logoutSubmit} className='text-white text-lg'>Logout</button>
            </div>
          </ul>
        </nav>

      </IconContext.Provider>
    </>
  );
}

export default Navbar;
