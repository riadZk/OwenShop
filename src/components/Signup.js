import React,{useState,useEffect,useContext} from 'react'
import { useNavigate } from 'react-router'
import { ShopContext } from "../context/shop-context";
const Signup = () => {

    const naviget = useNavigate()
  const login = () => {
    document.querySelector('#Sign').style.display = 'block';
    document.querySelector('#Login').style.display = 'none';
  }
  const sign = () => {
    document.querySelector('#Sign').style.display = 'none';
    document.querySelector('#Login').style.display = 'block';
  }
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
          var url = "http://localhost/react/login.php";
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
  return (
    <div className='py-20 lg:py-0'>
      <section className="h-screen my-2 flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center  mx-5 md:mx-0 md:my-0">

        <div className="md:w-1/3 max-w-sm">
          <img
            src="./images/Security On-bro.png"
            alt="Sample image" />
        </div>
        <div className="md:w-1/3 p-6 rounded-lg shadow max-w-sm" style={{ display: ' block' }} id='Login'>
          <div className="text-center mb-8">
            <p className="text-blue-700 text-center zz3 text-xl font-bold">Login </p>
          </div>
          <p>
                {
                    error !== "" ?
                    <span className="error">{error}</span> :
                    <span className="success">{msg}</span>
                }
            </p>
            <div className=' block'>
              <label className='text-md zz mb-6'>Email Address</label>
              <input className="text-sm w-full px-4 py-2 mt-2 mb-4 border border-solid border-gray-300 rounded" name='email'  type="email" value={user}
                onChange={(e) => handleInputChange(e, "user")} />
              <label className='text-md  zz'>Password</label>
              <input className="text-sm w-full mt-2 mb-4 px-4 py-2 border border-solid border-gray-300 rounded " name='password' type="password"  value={pass}
                onChange={(e) => handleInputChange(e, "pass")}/>
              <div className="text-center md:text-left">
                <div className=' flex justify-center'>
                  <button className="mt-10 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit" onClick={loginSubmit}>Login</button>
                </div>
              </div>
            </div>
          <div className="mt-4  flex justify-center font-semibold text-sm text-slate-500 text-center md:text-left">
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet? <a onClick={login} className="text-blue-600 hover:underline hover:underline-offset-4" href="#">Sign Up</a>
            </p>

          </div>
        </div>
        <div className="md:w-1/3 p-6 rounded-lg shadow max-w-sm" style={{ display: 'none' }} id='Sign'>
          <div className="text-center pb-4 md:text-left">
            <p className="text-blue-700 text-center zz3 text-xl font-bold">Create Compte</p>
          </div>
          <form>
            <div className=' block'>
              <label className='text-md zz mb-6'>Name :</label>
              <input className="text-sm w-full px-4 py-2 mb-4 border border-solid border-gray-300 rounded" type="text" />
              <label className='text-md zz mb-6'>Number Phone :</label>
              <input className="text-sm w-full px-4 py-2 mb-4 border border-solid border-gray-300 rounded" type="text" />
              <label className='text-md zz mb-6'>Email Address :</label>
              <input className="text-sm w-full px-4 py-2 mb-5  border border-solid border-gray-300 rounded" type="email" />
              <label className='text-md zz mt-3 '>Password :</label>
              <input className="text-sm w-full px-4 py-2  border border-solid border-gray-300 rounded" type="Password" />
              <div className="text-center md:text-left">
                <div className=' flex justify-center'>
                  <button className="mt-10 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Sign Up</button>
                </div>
              </div>
            </div>
          </form>
          <div className="mt-4  flex justify-center font-semibold text-sm text-slate-500 text-center md:text-left">
            <a onClick={sign} className="text-pink-600 hover:underline hover:underline-offset-4" href="#">Sign In</a>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Signup


