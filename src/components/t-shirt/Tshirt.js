import React from "react";
import { Link } from "react-router-dom";
import './Tshirt.css'
import FormatCurrency from "../FormatCurrency";
function Tshirt() {
    const mouseover=()=>{
        document.getElementById('img').src='/pectures/kk.png';
    }
    const mouseover2=()=>{
        document.getElementById('img2').src='/pectures/kk.png';
    }
    const mouseover3=()=>{
        document.getElementById('img3').src='/pectures/9obia11-removebg-preview.png';
    }
    const mouseover4=()=>{
        document.getElementById('img4').src='/pectures/9obia222-removebg-preview.png';
    }
    const mouseout=()=>{
         document.getElementById('img').src="/pectures/kk2.png";
         }    
    const mouseout2=()=>{
            document.getElementById('img2').src="/pectures/kk3.png";
            }    
    const mouseout3=()=>{
            document.getElementById('img3').src="/pectures/9obia1-removebg-preview.png";
        }     
    const mouseout4=()=>{
            document.getElementById('img4').src="/pectures/gaming-gaming-cadeau-removebg-previewaa.png";
        }
    return (
        <main className="container">
            <h1 className="title">T-shirt Gaming</h1>
            <div class="row owenoo mb-2">
            <div class="col">
                            <div class="card shadow-sm box">
                                <img class="bd-placeholder-img card-img-top" src="/pectures/kk2.png" id="img"
                                width={"80px"}
                                onMouseOver={mouseover}
                                onMouseOut={mouseout}
                                 />
                                <div class="card-body">
                                    <p class="card-title">T-SHIRT GAMING</p>
                                    <p class="card-text">{FormatCurrency(20.00)}</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary">
                                            <Link to='/Tshirt1' className="Link2 test-secondar">Add to cart</Link>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><div class="col">
                                <div class="card shadow-sm box">
                                <img class="bd-placeholder-img card-img-top" src="/pectures/kk3.png"id="img2" 
                                onMouseOver={mouseover2} 
                                onMouseOut={mouseout2}
                                />
                                <div class="card-body">
                                    <p class="card-title">T-SHIRT GAMING</p>
                                    <p class="card-text">{FormatCurrency(20.00)}</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary">
                                            <Link to='/Tshirt2' className="Link2 test-secondar">Add to cart</Link>

                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><div class="col">
                                <div class="card shadow-sm box">
                                <img class="bd-placeholder-img card-img-top" src="/pectures/9obia1-removebg-preview.png" id="img3"
                                onMouseOver={mouseover3} 
                                onMouseOut={mouseout3}/>
                                <div class="card-body">
                                    <p class="card-title">Sweat</p>
                                    <p class="card-text">{FormatCurrency(40.00)}</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary">
                                            <Link to='/sweat1' className="Link2 test-secondar">Add to cart</Link>

                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><div class="col">
                                <div class="card shadow-sm box">
                                <img class="bd-placeholder-img card-img-top" src="/pectures/gaming-gaming-cadeau-removebg-previewaa.png"id="img4" 
                                onMouseOver={mouseover4}
                                onMouseOut={mouseout4}
                                 />
                                <div class="card-body">
                                    <p class="card-title">Sweat</p>
                                    <p class="card-text">{FormatCurrency(40.00)}</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                             <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary">
                                            <Link to='/sweat2' className="Link2 test-secondar">Add to cart</Link>

                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                 </div>
                    <div className="comment">
                        <h3>Newsletter</h3>
                        <p>We'll get in touch with you soon.</p>
                        <form>
                            <input type="text" placeholder="Email" className="email"/>
                            <button type="submit">submit</button>
                        </form>
                  </div>
        </main>

    )
}
export default Tshirt;

