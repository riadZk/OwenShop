import React from "react";
import './Footer.css'
import {BsFillTelephoneFill, BsGithub, BsGoogle, BsInstagram,BsFacebook,BsTwitter} from "react-icons/bs"
import {SiGooglemaps} from "react-icons/si"
import {MdEmail} from "react-icons/md"
function Footer() {

    return (
        <div className="App-4">
                    <footer className="text-center text-lg-start bg-light text-muted  App-4">
            <section className=" conect d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block ">
                    <span className="text-white">Get connected with us on social networks : </span>
                </div>
                 <div>
                    <a href="" className="me-4 text-reset">
                    <BsFacebook  className="h5"/>
                    </a> 
                    <a href="" className="me-4 text-reset">
                    <i class="bi bi-twitter"></i>
                    <BsTwitter className="h5"/>
                    </a>
                    <a href="" className="me-4 text-reset">
                    <BsGoogle className="h5"/>
                    </a>
                    <a href="https://www.instagram.com/riad_zk/" className="me-4 text-reset">
                    <BsInstagram className="h5"/>
                    </a>
                    <a href="https://github.com/riadZk" className="me-4 text-reset">
                    <BsGithub className="h5"/>
                    </a>
                </div> 
            </section>
            <section className="mb-5">
                <div className="container text-center text-md-start conect-2">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-white fw-bold mb-4 ">
                                <i className="fas fa-gem me-3"></i>Company name
                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum
                                dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-white fw-bold mb-4">
                                Products
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Playstation 5</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">PC-Gamer</a>
                            </p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-white fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Pricing</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Settings</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Help</a>
                            </p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-white fw-bold mb-4">Contact</h6>
                            <p><SiGooglemaps className="pe-1 h5"/> Morocco,MOHEMMADIA</p>
                            <p>
                                <MdEmail className="pe-1 h5"/> Drhourhi.adam@gmail.com
                            </p>
                            <p><BsFillTelephoneFill className="pe-1 h5"/> +212 6 30 00 58 23</p> 
                        </div>
                    </div>
                </div>
            </section>
        </footer>
        </div>
    )
}

export default Footer;