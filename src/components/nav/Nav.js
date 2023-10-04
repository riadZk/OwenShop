import React, { createElement } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import {FaUserAlt} from "react-icons/fa"
function Nav() {
    // let b = document.getElementsByClassName('prod');
    // const cteate=()=>{
    //     let a = document.createElement('div');
    //     a.innerHTML='zikos';
    //     a.style.color='white';
    //     b.appendChild(a); 
    // }
    return (
        <div className="nav2" >
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid ">

                            <div className="owen">
                                EGAMIA
                            </div>

                    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <Link to="/Products" className="nav-link prod"  href="#">Products</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/Tshirt" class="nav-link" href="#">Clothes</Link>
                            
                            </li>                          
                              <li class="nav-item">
                                <Link to="/Contact" class="nav-link" href="#">Contact us</Link>

                            </li>
                            <li class="nav-item">
                                <Link to="/Connexion" class="nav-link" href="#">Login <FaUserAlt/></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Nav