import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'
import logo from '../Assets/logo.png'

const Header = () => {
    return (
        <div className='sticky top-0 z-50 w-full mx-auto'>
            <div className="navbar glassbg bg-opacity-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to='/home'>Home</NavLink></li>
                            <li><NavLink to='/services'>Services</NavLink></li>
                            <li><NavLink to='/blog'>Blog</NavLink></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case logo text-3xl text-success">
                        Peter McKinnon
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 text-success font-semibold">
                        <li><NavLink className="mr-2" to='/home'>Home</NavLink></li>
                        <li><NavLink className="mr-2" to='/services'>Services</NavLink></li>
                        <li><NavLink className="mr-2" to='/blog'>Blog</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/login' className="btn  btn-primary mr-2">Login</Link>
                    <Link to='/register' className="btn btn-primary ">Register</Link>
                </div>
            </div>
        </div>
    )
}

export default Header