import React from 'react'
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { login } from "../../actions/userActions";
import "./LoginScreen.css";
function LoginScreen({ history }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { loading, error, userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            history.push("/dashboard");
        }
    }, [history, userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
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

                                <h1>Login</h1>
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
                                <div class="row  mt-4 mb-4">
                                    <div class="col-md-6">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                            <label class="form-check-label" for="defaultCheck1">
                                                Remember me
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-md-6 text-right">
                                        <a href="#">Forgot Password?</a>
                                    </div>
                                </div>

                                <button class="btn btn-success btn-block shadow border-0 py-2 text-uppercase ">
                                    Login
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

export default LoginScreen