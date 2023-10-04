import { useNavigate } from 'react-router-dom';

function Dashboard(){
    const naviget = useNavigate();
    function logoutSubmit(){
        localStorage.setItem("login", "");
        localStorage.setItem("loginStatus", "Logged out successfully!")
        naviget("/");
    }
    return(
        <div className="form">
            <h3>Dashboard Page</h3>
            <p onClick={logoutSubmit}>Logout</p>
        </div>
    );
}

export default Dashboard;