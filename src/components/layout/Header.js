/**
    * @description      : 
    * @author           : Saif
    * @group            : 
    * @created          : 29/06/2022 - 15:55:07
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 29/06/2022
    * - Author          : Saif
    * - Modification    : 
**/
import React from 'react'
import { Link, NavLink } from "react-router-dom";
import Logo from '../../assets/images/logo.png';
import Flag from '../../assets/images/flag.png'
import ProfileImage from '../../assets/images/profile.png'

export const Header = () => {
    return (
        <div className="container-fluid bgPrimary">
            <nav className="navbar navbar-expand-lg navbar-light py-0 gap-15" >
                <div className='logo'>
                    <Link className="navbar-brand" to="/">
                        <img src={Logo} alt="Logo" />
                    </Link>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
                        <li className='px-4'>
                            <i className="bi bi-search text-light"></i>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-light active" aria-current="page" to="#">Home</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link text-light dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Industries
                            </NavLink>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><NavLink className="dropdown-item" to="#">Action</NavLink></li>
                                <li><NavLink className="dropdown-item" to="#">Another action</NavLink></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><NavLink className="dropdown-item" to="#">Something else here</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-light" to="#" tabindex="-1" aria-disabled="true">Market Place</NavLink  >
                        </li>
                    </ul>
                    <div class="d-flex align-items-center my-2 my-lg-0 gap-15">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center gap-15">
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link text-light dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={Flag} />
                                </NavLink>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><NavLink className="dropdown-item" to="#">Action</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="#">Another action</NavLink></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><NavLink className="dropdown-item" to="#">Something else here</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-light" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className='bi bi-chat'></i>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-light" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className='bi bi-bell'></i>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-light" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className='bi bi-gear'></i>
                                </NavLink>
                            </li>
                        </ul>
                        <div class="dropdown px-4">
                            <button class="border-0 bg-transparent dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={ProfileImage} className='profileImage'/>
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}