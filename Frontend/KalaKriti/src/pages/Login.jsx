import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router';
import { AppContent } from '../Context/AppContext';
import {login, register} from '../api/Api.jsx'
import { toast } from 'react-toastify';

const Login = () => {

  const navigate = useNavigate();

  const {setIsLoggedIn, getUserData,userData} = useContext(AppContent)

  const [state, setState] = useState("Sign Up");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    try{
      e.preventDefault();

      // credentials()
      

      if(state === "Sign Up"){
        const res = await register(userName, email, password,{
          withCredentials: true
        })
        if(res.data.success) {
          setIsLoggedIn(true)
          getUserData()
          navigate('/')
          toast.success(`Welcome to KalaKriti`)
        } else {
          toast.error(res.data.message)
        }
      }else{
        const res = await login(email, password,{
          withCredentials: true
        })
        if(res.data.success) {
          setIsLoggedIn(true)
          await getUserData()
          navigate('/')
          toast.success(`Welcome back! to KalaKriti`)
        } else {
          toast.error(res.data.message)
        }
        
      }
    } catch(err) {
      toast.error(err.message)
    }
  }

  return (
    <div className='flex  items-center justify-center min-h-screen px-6 sm:px-0 '>
      <div className='bg-[#332e2b] p-10 rounded-lg shadow-lg w-full sm:w-96 text-white text-sm'>
        <h2 className='text-3xl font-semibold text-white text-center mb-3'>{state === "Sign Up" ? "Create Account": "Login"}</h2>
        <p className='text-center text-sm mb-3'>{state === "Sign Up" ? "Create your account": "Login to your account!"}</p>

        <form onSubmit={submitHandler}>
          {state === "Sign Up" && (<div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-white text-black'>
            <i class="fa-regular fa-user" ></i>
            <input type="text" placeholder='Username' onChange={e=> setUserName(e.target.value)} value={userName} className='bg-transparent outline-none text-black' required />
          </div>
        )}
          
          <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-white text-black'>
            <i class="fa-regular fa-envelope"></i>
            <input type="email" placeholder='Email' onChange={e=> setEmail(e.target.value)} value={email} className='bg-transparent outline-none text-black' required />
          </div>
          <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-white text-black'>
            <i class="fa-regular fa-unlock"></i>
            <input type="password" placeholder='Password' onChange={e=> {setPassword(e.target.value)}} value={password} className='bg-transparent outline-none text-black' required />
          </div>
          <p onClick={() => navigate("/reset-password")} className='mb-4 cursor-pointer hover:text-blue-400 transition-all'>Forgot Password?</p>
          
          <button  className='w-full py-2.5 rounded-full bg-white  text-[#332e2b] font-medium cursor-pointer'>{state}</button>
        </form>

        {state === "Sign Up" ? (<p className='text-center text-xs mt-4'>Already have an account?{"  "}
          <span onClick={() => setState("Login")} className='text-blue-400 cursor-pointer underline'>Login here</span>
          </p>
        ) : (
          <p className='text-center text-xs mt-4'>Don't have an account?{"  "}
            <span onClick={() => setState("Sign Up")}  className='text-blue-400 cursor-pointer underline'>Sign up</span>
          </p>
        )}
        
        
      </div>
    </div>
  )
}

export default Login
