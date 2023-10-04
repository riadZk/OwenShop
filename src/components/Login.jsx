import { useState, useEffect ,useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from "../context/shop-context";

function Login(){
    const naviget = useNavigate();
    // const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");
    const {user, setUser} = useContext(ShopContext);

    useEffect(() => {
        let login = localStorage.getItem("login");
        
        if(login){
            naviget("/dashboard");
        }
        let loginStatus = localStorage.getItem("loginStatus");
        if(loginStatus){
            setError(loginStatus);
            setTimeout(function(){
                localStorage.clear();
                window.location.reload();
            }, 3000);
        }
        setTimeout(function(){
            setMsg("");
        }, 5000);
    }, [msg]);

    const handleInputChange = (e, type) => {
        switch(type){
            case "user":
                setError("");
                setUser(e.target.value);
                if(e.target.value === ""){
                    setError("Username has left blank");
                }
                break;
            case "pass":
                setError("");
                setPass(e.target.value);
                if(e.target.value === ""){
                    setError("Password has left blank");
                }
                break;
            default:
        }
    }

    function loginSubmit(){
        if(user !== "" && pass != ""){
            var url = "http://localhost/Ecommerce/login.php";
            var headers = {
                "Accept": "application/json",
                "Content-type": "application/json"
            };
            var Data = {
                user: user,
                pass: pass
            };
            fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(Data)
            }).then((response) => response.json())
            .then((response) => {
                if(response[0].result === "Invalid username!" || response[0].result === "Invalid password!"){
                    setError(response[0].result);
                }
                else{
                    setMsg(response[0].result);
                    setTimeout(function(){
                        localStorage.setItem("login", true);
                        naviget("/dashboard");
                    }, 5000);
                }
            }).catch((err) => {
                setError(err);
                console.log(err);
            })
        }
        else{
            setError("All field are required!")
        }
    }
    
    return(
        <div className="">
            <p>
                {
                    error !== "" ?
                    <span className="error">{error}</span> :
                    <span className="success">{msg}</span>
                }
            </p>
            <label>Username</label>
            <input 
                type="text" 
                value={user}
                onChange={(e) => handleInputChange(e, "user")}
            />
            <label>Password</label>
            <input 
                type="password" 
                value={pass}
                onChange={(e) => handleInputChange(e, "pass")}
            />
            <label></label>
            <input 
                type="submit"
                defaultValue="Login" 
                className="button"
                onClick={loginSubmit}
            />
        </div>
    );
}

export default Login;