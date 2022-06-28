/**
    * @description      : 
    * @author           : Saif
    * @group            : 
    * @created          : 26/06/2022 - 17:42:50
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 26/06/2022
    * - Author          : Saif
    * - Modification    : 
**/
import React from 'react'
import { useNavigate, Link } from "react-router-dom";
import logo from '../../assets/images/logo.png'
import googleIcon from '../../assets/images/google.png'
import sideImage from '../../assets/images/man.png'

export const Header = () => {
    let navigate = useNavigate();
    const handleSubmit = (e) => {
        // e.preventDefault();
        //    navigate(`/profile`);
        localStorage.setItem("token", "12345");
    }
    return (
        <section className="d-flex align-items-center h-100vh">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="loginContent text-center">
                            <img alt="Logo" src={logo} />
                            <h1>Login</h1>
                            <p>Thank you for get back to our panem , lets access out the best recommendation for you.</p>
                            <button className='inputFeilds px-5'> <img alt="ButtonImage" src={googleIcon} className="mr-3" /> Sign in with your google account</button>
                        </div>
                        <form onSubmit={handleSubmit} className="mb-5">
                            <div className="form-group mt-4">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control inputFeilds" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div className="form-group mt-4">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control inputFeilds" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div className="text-center mt-4">
                                <button type="submit" className="btn btn-primary loginSubmit">Login</button>
                            </div>
                        </form>
                        <div className='d-flex flex-wrap justify-content-between'>
                            <div className='linkOptions'>
                                <Link to="/" className='text-dark'>Forget password ?</Link>
                            </div>
                            <div className='linkOptions'>
                                <Link to="/sign-up" className='text-dark'>Sign up</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 bgLogin'>
                        <div className='LoginImage'>
                            <img alt="LoginImage" src={sideImage} className="mw-100" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
