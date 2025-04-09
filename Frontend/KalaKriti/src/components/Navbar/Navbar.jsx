import * as React from 'react';
import { useState, useEffect } from 'react';
import "./Navbar.css"
import { NavLink, useNavigate } from 'react-router';
import { useContext } from 'react';
import { AppContent } from '../../Context/AppContext';
import { logout, emailVerificationOtp } from '../../api/Api.jsx';
import { toast } from 'react-toastify';
import axios from 'axios';

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate();
    const {userData,isLoggedIn, setUserData, setIsLoggedIn, cart, cartItems} = useContext(AppContent);

    const items = cart?.items || [];

    const sendEmailVerifiationOpt = async () => {
        
        try{
            axios.defaults.withCredentials = true
            const response = await emailVerificationOtp({withCredentials: true})
            if(response.data.sucess) {
                navigate("/verify-email")
                toast.success(response.data.message)
            }else{
                toast.error(response.data.message)
            }
        }catch (err) {
            toast.error(err.message)
        }
    }

    const userLogout = async () => {
        try {
            const response = await logout({
                withCredentials : true
            })
            response.data.success && setIsLoggedIn(false)
            response.data.success && setUserData(false)
            navigate("/items")
            toast.success(`${response.data.message}`)
        }catch (err) {
            toast.error(err.message)
        }
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    useEffect(() => {
        if(userData || isLoggedIn) {
            cartItems()
        }

         
    },[cart, userData, isLoggedIn])

    return(
        <>
            <div className="navbar flex justify-between items-center p-6 h-16 bg-[#d26c3d] text-white sticky top-0 z-100">
                <div>
                    <NavLink to={"/items"} className="m-auto text-3xl font-bold">KalaKriti</NavLink>
                </div>
                <div className={`navbar-content flex justify-start  items-center w-2/3 lg:2/3 md:1/2 md:ml-4 md:justify-evenly`}>
                    <div className="flex justify-between items-center w-2/3 lg:2/3 md: 1/2 md:mr-4 md:justify-center"> 
                        <input type="text" placeholder=" Search" className="w-full text-xs font-semibold p-2 text-center mr-5 border-2 border-white rounded-full bg-white text-black focus:outline-none text-left" />
                        <button className="text-xs font-semibold p-2 border-2 border-[#332e2b] bg-[#332e2b] text-white rounded-full cursor-pointer  md:font-normal md:w-25"><i class="fa-solid fa-magnifying-glass mr-2"></i>Search</button>
                    </div>
                    <div className="nav-links ml-5 mr-5 text-lg font-normal">
                        <ul className="flex items-center">
                            <NavLink to={"/items"} className={`inline-block w-full p-4 text-medium hover:text-[#332e2b] transition duration-250 ease-in-out`}>Account</NavLink>
                            <NavLink to={"/orders"} className={`inline-block w-full p-4 text-medium hover:text-[#332e2b] transition duration-250 ease-in-out`}>Orders</NavLink>
                            {/* <NavLink to={"/items"} className={`inline-block w-full p-4 text-medium hover:text-[#332e2b] transition duration-250 ease-in-out`}>About</NavLink> */}
                            <NavLink to={"/cart"} className={`inline-block w-full p-4 text-medium hover:text-[#332e2b] transition duration-250 ease-in-out mr-2`}><i className="fa-solid fa-cart-plus relative"></i><span className='absolute text-sm'>{isLoggedIn? items.length: 0}</span></NavLink>
                            {userData? 
                            <NavLink className='p-4 h-8 w-8 flex justify-center items-center rounded-full bg-[#332e2b] text-white relative group'>
                                {userData.userName[0].toUpperCase()}
                                <div className='absolute hidden group-hover:block top-2 right-0 z-10 text-white rounded pt-10 w-30'>
                                    <ul className='list-none m-0 p-2 bg-[#332e2b] text-sm rounded'>
                                        {!userData.isAccountVerifies && <li onClick={sendEmailVerifiationOpt} className='py-1 px-2 hover:underline'>Verify email</li>}
                                        
                                        <li onClick={userLogout} className='py-1 px-2 hover:underline'>Logout</li>
                                    </ul>
                                </div>
                            </NavLink>:
                            <NavLink to={"/login"} className={`flex gap-1 border-2 border-[#332e2b] rounded-full items-center w-full px-4 py-1 h-8 text-xs font-semibold text-[#332e2b] hover:text-white hover:bg-[#332e2b] transition duration-250 ease-in-out`}>Login<i class="fa-solid fa-arrow-right-long"></i></NavLink>}
                            
                            
                        </ul>
                    </div>
                    
                </div>
                <div className="hamburger" onClick={toggleMenu}><i className="fa-solid fa-bars "></i></div>
            </div>
            <div>
                <ul className={`hamburger-menu flex flex-row justify-start items-center bg-[#d26c3d]/20 ${isOpen ? "activate" : ""}`}>
                    <li className="pl-4 border-b-1  border-[#d26c3d] text-[#d26c3d] font-medium w-full cursor-pointer"><a href="/items  ">Account</a></li>
                    <li className="pl-4 border-b-1  border-[#d26c3d] text-[#d26c3d] font-medium w-full cursor-pointer"><a href="/orders  ">Orders</a></li>
                    <li className="pl-4 border-b-1  border-[#d26c3d] text-[#d26c3d] font-medium w-full cursor-pointer"><a href="/cart  "><i className="fa-solid fa-cart-plus relative"><span className='absolute text-sm'>{items.length}</span></i></a></li>
                    <li className="pl-4 border-b-1  border-[#d26c3d] text-[#d26c3d] font-medium w-full cursor-pointer">
                        {userData?
                        <div>
                            <ul >
                                {!userData.isAccountVerifies && <li onClick={sendEmailVerifiationOpt} className='py-1 px-2 hover:underline'>Verify email</li>}
                                        
                                <li onClick={userLogout} className='py-1 px-2 hover:underline'>Logout</li>
                            </ul>
                        </div> :
                        <a href="/login  ">Login<i class="fa-solid fa-arrow-right-long"></i></a>}
                    </li>
                </ul>
            </div>
        </>
    )

};

export default Navbar;

