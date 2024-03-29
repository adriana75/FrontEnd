import React,{useEffect,useState} from 'react'
import logo from '../images/logo.jpg'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import { useUser } from '../context/userContext';


const Navbar = () => {

    const { logout} = useAuth0();
    const {userData} = useUser()

    const handleClose = ()=>{
        logout({ returnTo: window.location.origin })
        localStorage.setItem('token',null)
    }


    
    return (
        <nav className="back-layout w-auto mb-4">
            <ul className="flex w-full items-start justify-around">
                <li className="px-3">
                <Link to="/">
                    <button className="w-28">
                    <img className="" src={logo} alt="logo" />
                    </button>
                </Link>
                </li>
                <li className=" flex w-full items-center justify-end mr-4">
                    <img src={userData.picture} alt="foto" className="rounded-full w-10 mr-4"/>
                    <span className="text-center mr-4 font-bold text-2xl">{`${userData.name} - ${userData.rol}`}</span>
                    <Link to="/">
                        <i className="fas fa-sign-out-alt fa-3x" onClick={handleClose}></i>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
