import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../actions/userActions";
import "./HeaderNew.css"
function HeaderNew() {
    const dispatch = useDispatch();
    const history = useHistory();
    
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    
    const logoutHandler = () => {
        dispatch(logout());
        history.push("/login");
    };

  return (
    <>    <body>
    <header>
        <figure className="brand"> <img id="" src="https://nexuses.in/wp-content/uploads/2019/05/logo-big-1.png" alt="..." height="70" /></figure>
        <nav className="menu">
            <input type="checkbox" id="menuToggle"/>
            <label for="menuToggle" className="menu-icon"><i className="fa fa-bars"></i></label>
            <ul>
            {userInfo ? ( <>
 


 <a style={{marginRight: "22px"}} href="/dashboard"><li>Dashboard</li></a>
 <a href="/upload"><li>Upload</li></a>
 <a href="/table"><li>Table</li></a>

  </>

  ):(<a href="/login">Login</a>)}
 <li> <button id="logout" className="button-59"  onClick={logoutHandler} variant="danger">Logout</button></li> 
            </ul>
        </nav>
    </header>
</body>
</>
  )
}

export default HeaderNew