import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../../actions/userActions";
import "./RegisterScreen.css";

function RegisterScreen({ history }) {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("")


    const dispatch = useDispatch();

    const userRegister = useSelector((state) => state.userRegister);
    const { loading, error, userInfo } = userRegister;
  
   
    useEffect(() => {
      if (userInfo) {
        history.push("/login");
      }
    }, [history, userInfo]);
  
    const submitHandler = (e) => {
      e.preventDefault();
  
      if (password !== confirmpassword) {
        setMessage("Passwords do not match");
      } else dispatch(register(name, email, password));
    };
  

  return (
    <>
    <div class="container h-100">
<div class="row h-100 justify-content-center align-items-center">
<form class="col-md-9" onSubmit={submitHandler}>
    <div class="AppForm shadow-lg">
        <div class="row">
            <div class="col-md-6 d-flex justify-content-center align-items-center">
                <div class="AppFormLeft">

                    <h1>Signup</h1>
                    <div class="form-group position-relative mb-4">
                        <input type="text" class="form-control border-top-0 border-right-0 border-left-0 rounded-0 shadow-none" id="name"
                            placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                            <i class="fa fa-user-o"></i>
                    </div>
                    <div class="form-group position-relative mb-4">
                        <input type="text" class="form-control border-top-0 border-right-0 border-left-0 rounded-0 shadow-none" id="username"
                            placeholder="Username" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            <i class="fa fa-user-o"></i>
                    </div>
                    <div class="form-group position-relative mb-4">
                        <input type="password" class="form-control border-top-0 border-right-0 border-left-0 rounded-0 shadow-none" id="password"
                            placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                            <i class="fa fa-key"></i>

                    </div>
                    <div class="form-group position-relative mb-4">
                        <input type="password" class="form-control border-top-0 border-right-0 border-left-0 rounded-0 shadow-none" id="password"
                            placeholder="Confirm Password" value={confirmpassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
                            <i class="fa fa-key"></i>

                    </div>
                    

                    <button class="btn btn-success btn-block shadow border-0 py-2 text-uppercase ">
                        Sign up
                    </button>

                    

                </div>

            </div>
            <div class="col-md-6">
                <div class="AppFormRight position-relative d-flex justify-content-center flex-column align-items-center text-center p-5 text-white">
                    <h2 class="position-relative px-4 pb-3 mb-4">Nexuses</h2>
                    <p>Welcome Team</p>
                </div>
            </div>
        </div>
    </div>

</form>
</div>
</div>
</>
  )
}

export default RegisterScreen;