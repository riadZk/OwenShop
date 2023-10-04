import React, { useState, useContext, useRef, useEffect } from "react";
import { Link } from "react-router-dom"
import { BsArrowLeft } from 'react-icons/bs'
import { ShopContext } from '../context/shop-context'
import emailjs from '@emailjs/browser';
import { RiUser3Fill } from 'react-icons/ri'
import { MdEmail } from 'react-icons/md'
import { BsTelephoneFill } from 'react-icons/bs'
import { IoIosHome } from 'react-icons/io'
import Swal from "sweetalert2";
import axios from "axios";
export const Contact = () => {
    const form = useRef();
    const { darkMode } = useContext(ShopContext);
    const [width, setWidth] = useState(window.innerWidth);
    const [user,setUser]=useState('');
    const [email,setEmail]=useState('');
    const [message,setMessage]=useState('');
    const click = () => {
        document.querySelector('#contact_info').style.display = 'none';
        document.querySelector('#contact_us').style.display = 'block';
    }
    const click2 = () => {
        document.querySelector('#contact_info').style.display = 'block';
        document.querySelector('#contact_us').style.display = 'none';
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

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_nxa382m',
            'template_o879su8',
            form.current, 'xcnn_4uIn6ZIxKtZN')
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    position: 'top-end',
                    background: "white",
                    color: "blue",
                    width: "40vh",
                    text: 'Message send',
                    showConfirmButton: false,
                    timer: 1000
                });
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    position: 'top-end',
                    background: "white",
                    color: "red",
                    width: "40vh",
                    text: 'Message not send',
                    showConfirmButton: false,
                    timer: 1000
                });
            });
            if(user === " " || email === ' ' || message === "" ){
                return alert('error')
            }else{
                const url = 'http://localhost/Ecommerce/AjouterMessage.php';
                let fData = new FormData();
                fData.append('user_name', user);
                fData.append('user_email', email);
                fData.append('message', message);
                axios.post(url, fData)
                .then(response=> alert(response.data))
                .catch(error=> alert(error));
            }
    }

  
    return (


        <div className={darkMode && "dark"} id="contactT">
            <div className="h-screen w-full dark:bg-slate-800  bg-slate-100 ">
                <div className="pl-10 pt-10 dark:text-white ">
                    <Link to='/'><BsArrowLeft size={20} /></Link>
                </div>
                <div className=" grid place-items-center pt-20">
                    <div className="bg-white rounded-md shadow-md flex flex-row">

                        {width >= 748 ?
                            (
                                <>
                                    {/* info */}
                                    <div className="p-8  rounded-md transition md:block" style={{
                                        background: "linear-gradient(90deg, rgba(131, 126, 226, 1) 24%, rgba(114, 114, 226, 1) 58%, rgba(0, 212, 255, 1) 100%)",
                                    }} id="contact_info">
                                        <div className="flex justify-between">
                                            <h2 className="text-white font-bold font-serif text-xl">Contact Information</h2>
                                            <button onClick={click} className="text-white text-xs flex flex-row md:hidden  cursor-pointer" id="swtich_to_contact_us">Contact Us <svg
                                                xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                    clip-rule="evenodd" />
                                            </svg></button>
                                        </div>
                                        <div className="mt-6 flex flex-row">
                                            <div>
                                                <RiUser3Fill size={25} className=" text-white mr-4" />
                                            </div>
                                            <div>
                                                <h2 className="text-slate-200 font-bold text-sm">Name :</h2>
                                                <p className="text-white text-xs">Riad Zakaria</p>
                                            </div>
                                        </div>

                                        <div className="mt-4 flex flex-row">
                                            <MdEmail size={25} className=" text-white mr-4" />
                                            <div>
                                                <h2 className="text-slate-200 font-bold text-sm">Email :</h2>
                                                <p className="text-white text-xs">riadzakaria48@gmail.com</p>
                                            </div>
                                        </div>

                                        <div className="mt-4 flex flex-row">
                                            <BsTelephoneFill size={25} className=" text-white mr-4" />
                                            <div>
                                                <h2 className="text-slate-200 font-bold text-sm">Phone :</h2>
                                                <p className="text-white text-xs">05 123 456 78</p>
                                            </div>
                                        </div>
                                        <div className="mt-5 flex flex-row">
                                            <IoIosHome size={30} className=" text-white mr-4" />
                                            <div>
                                                <h2 className="text-slate-200 font-bold text-sm">Address :</h2>
                                                <p className="text-white text-xs">
                                                    Maroc,Casablanca Derb Sultan Boulevard El fida.</p>
                                            </div>
                                        </div>

                                    </div>
                                    {/* contact */}
                                    <div className="px-6 py-8" id="contact_us">
                                        <div className="flex justify-between" >
                                            <h2 className="text-blue-800 text-xl">CONTACT US</h2>
                                            <a href="javascript:void(0)" onClick={click2} className="text-blue-800 text-xs flex flex-row md:hidden  cursor-pointer" id="swtich_to_contact_info">Contact Info <svg
                                                xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                    clip-rule="evenodd" />
                                            </svg></a>
                                        </div>
                                        <form ref={form} onSubmit={sendEmail} >
                                            <input type="text"
                                                placeholder="Enter Your Name"
                                                name="user_name"
                                                value={user}
                                                onChange={(e)=>{setUser(e.target.value)}}
                                                className="w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm" /><br />
                                            <input type="text"
                                                placeholder="Enter Your Email"
                                                value={email}
                                                onChange={(e)=>{setEmail(e.target.value)}}
                                                name="user_email"
                                                className="w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm" /><br />
                                            <textarea placeholder="Enter your Message here"
                                                name="message"
                                                value={message}
                                                onChange={(e)=>{setMessage(e.target.value)}}
                                                className="w-full text-xs px-3 py-2 h-20 my-2 outline-none rounded-md border focus:shadow-sm resize-none"></textarea><br />
                                            <input type="submit" value="Send"
                                                className="bg-blue-800 px-4 py-2 rounded-md text-white text-xs cursor-pointer hover:shadow-md" />
                                        </form>
                                    </div>
                                </>
                            )
                            :
                            (
                                <>
                                    <div className="p-8 md:hover:scale-y-110 rounded-md transition md:block" style={{
                                        display: "none",
                                        background: "linear-gradient(90deg, rgba(131, 126, 226, 1) 24%, rgba(114, 114, 226, 1) 58%, rgba(0, 212, 255, 1) 100%)"

                                    }} id="contact_info">
                                        <div className="flex justify-between">
                                            <h2 className="text-white  font-bold font-serif text-xl">Contact Information</h2>
                                            <button onClick={click} className="text-white text-xs flex flex-row md:hidden  cursor-pointer" id="swtich_to_contact_us">Contact Us <svg
                                                xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                    clip-rule="evenodd" />
                                            </svg></button>
                                        </div>
                                        <div className="mt-6 flex flex-row">
                                            <div>
                                                <RiUser3Fill size={25} className=" text-white mr-4" />
                                            </div>
                                            <div>
                                                <h2 className="text-slate-200 font-bold text-sm">Name :</h2>
                                                <p className="text-white text-xs">Riad Zakaria</p>
                                            </div>
                                        </div>

                                        <div className="mt-4 flex flex-row">
                                            <MdEmail size={25} className=" text-white mr-4" />
                                            <div>
                                                <h2 className="text-slate-200 font-bold text-sm">Email :</h2>
                                                <p className="text-white text-xs">riadzakaria48@gmail.com</p>
                                            </div>
                                        </div>

                                        <div className="mt-4 flex flex-row">
                                            <BsTelephoneFill size={25} className=" text-white mr-4" />
                                            <div>
                                                <h2 className="text-slate-200 font-bold text-sm">Phone :</h2>
                                                <p className="text-white text-xs">05 123 456 78</p>
                                            </div>
                                        </div>
                                        <div className="mt-5 flex flex-row">
                                            <IoIosHome size={30} className=" text-white mr-4" />
                                            <div>
                                                <h2 className="text-slate-200 font-bold text-sm">Address :</h2>
                                                <p className="text-white text-xs">
                                                    Maroc,Casablanca Derb Sultan Boulevard El fida.</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="px-6 py-8" id="contact_us">
                                        <div className="flex justify-between">
                                            <h2 className="text-blue-800  font-bold font-serif  text-xl">CONTACT US</h2>
                                            <a onClick={click2} className="text-blue-800 text-xs flex flex-row md:hidden  cursor-pointer" id="swtich_to_contact_info">Contact Info <svg
                                                xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                    clip-rule="evenodd" />
                                            </svg></a>
                                        </div>
                                        <form ref={form} onSubmit={sendEmail} >
                                            <input type="text"
                                                placeholder="Enter Your Name"
                                                name="user_name"
                                                value={user}
                                                onChange={(e)=>{setUser(e.target.value)}}
                                                className="w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm" /><br />
                                            <input type="text"
                                                placeholder="Enter Your Email"
                                                name="user_email"
                                                value={email}
                                                onChange={(e)=>{setEmail(e.target.value)}}
                                                className="w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm" /><br />
                                            <textarea placeholder="Enter your Message here"
                                                name="message"
                                                value={message}
                                                onChange={(e)=>{setMessage(e.target.value)}}
                                                className="w-full text-xs px-3 py-2 h-20 my-2 outline-none rounded-md border focus:shadow-sm resize-none"></textarea><br />
                                            <input type="submit" value="Send"
                                                className="bg-blue-800 px-4 py-2 rounded-md text-white text-xs cursor-pointer hover:shadow-md" />
                                        </form>
                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>  </div>
    )
};