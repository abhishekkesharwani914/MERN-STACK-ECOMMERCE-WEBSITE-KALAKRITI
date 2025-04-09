import React, { useContext, useEffect, useRef } from 'react'
import { toast } from 'react-toastify';
import { AppContent } from '../Context/AppContext';
import { verifyEmail } from '../api/Api.jsx';
import { useNavigate } from 'react-router';

const VerifyEmail = () => {

  const {isLoggedIn, userData, getUserData} = useContext(AppContent);
  const inputRefs = useRef([])
  const navigate = useNavigate();

  const handelInput = (e, index) => {
    if(e.target.value.length > 0 && index < inputRefs.current.length-1){
      inputRefs.current[index + 1].focus();
    }
  }

  const handleKeyDown = (e,index) => {
    if(e.key === 'Backspace' && e.target.value === '' && index>0) {
      inputRefs.current[index - 1].focus();
    }
  }

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData('text')
    const pasteArray = paste.split('');
    pasteArray.forEach((char, index) => {
      if(inputRefs.current[index]) {
        inputRefs.current[index].value = char;
      }
    });
  }

  const onSubmitHander = async (e) => {
    try{
      e.preventDefault();
      const otpArray = inputRefs.current.map(e=>e.value)
      const otp = otpArray.join('') 
      const response = await verifyEmail(otp, {withCredentials: true});
      console.log(response)
      if(response.data.success) {
        getUserData();
        navigate('/items')
        toast.success(response.data.message)
      }else{
        toast.error(response.data.message)
      }
    }catch(err) {
      toast.error(err.message)
    }
  }

  useEffect(() => {
    isLoggedIn && userData && userData.isAccountVerifies && navigate('/items')
  },[isLoggedIn,userData]) 

  return (
    <div className='flex  items-center justify-center min-h-screen px-6 sm:px-0'>
      <div className='bg-[#332e2b] p-10 rounded-lg shadow-lg w-full sm:w-96 text-white text-sm'>
        <form onSubmit={onSubmitHander}>
          <h1 className='text-white text-2xl font-semibold text-center mb-4'>Email Verify OTP</h1>
          <p className='text-center mb-6 text-whited'>Enter 6-digit code sent to your email id.</p>
          <div className='flex justify-between mb-8' onPaste={handlePaste}>
            {Array(6).fill(0).map((_,index) => (
              <input type="text" maxLength="1" key={index} ref={e => inputRefs.current[index] = e} onInput={(e) => handelInput(e, index)} onKeyDown={(e) => handleKeyDown(e,index)} required className='w-12 h-12 bg-white text-black text-center text-xl rounded-md outline-none'/>
            ))}
          </div>
          <button className='w-full py-3 bg-white text-black rounded-full text-md font-medium cursor-pointer  hover:bg-[#f5f5f5]  transition-all'>Verify Email</button>
        </form>
      </div>
    </div>
  )
}

export default VerifyEmail
