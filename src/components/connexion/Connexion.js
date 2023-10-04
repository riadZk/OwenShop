import React from "react";
import "./Connexion.css";
import { Link } from "react-router-dom";
function Connexion() {
    return (
        <div className="cnx">
            <Link to='/' className="link-icons"><i className="bi bi-arrow-left icons"></i></Link>
            <div className="cnx-2">
                <h1 className="owen2">OwenGame</h1>
                <form className="form">
                    <input type="email" placeholder="email" className="email" /><br />
                    <input type="password" placeholder="password" className="password" /><br />
                    <button type="sumbit" className="button-form">Connexion</button>
                </form>
                <p className="para">Or you can login with:</p>
                <a href="https://www.facebook.com" id="facea">Facebook</a>
                <a href="https://www.linkedin.com" className="link">Linkedin</a>
                <p className="para2">Forgot your password ?
                  <span className="spaan">no account ?</span>
                </p>
                <p className="para3">Sign up.</p>
            </div>
        </div>
    )
}

export default Connexion;