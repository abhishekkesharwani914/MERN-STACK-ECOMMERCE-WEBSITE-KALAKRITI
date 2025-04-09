import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router'
import { sendResetPasswordOtp, resetPassword } from '../api/api'
import { toast } from 'react-toastify'

const ResetPassword = () => {

  const navigate = useNavigate()
  const inputRefs = useRef([])
  const [email, setEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [isEmailSent , setIsEmailSent] = useState('')
  const [otp, setOpt] = useState(0)
  const [isOtpSubmitted, setIsOptSubmitted] = useState(false)

  
  
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

  const onSubmitEmail = async (e) => {
    try{
      e.preventDefault();
      const response = await sendResetPasswordOtp(email);
      response.data.sucess ? toast.success(response.data.message) : toast.error(response.data.message)
      response.data.sucess && setIsEmailSent(true)
    }catch (err) {
      toast.error(err.message)
    }
  }

  const onSubmitOpt = (e) => {
    e.preventDefault()
    const otpArray = inputRefs.current.map(e => e.value)
    setOpt(otpArray.join(''))
    setIsOptSubmitted(true)
  }

  const onSubmitNewPassword = async (e) => {
    try{
      e.preventDefault()
      const response = await resetPassword(email, otp, newPassword)
      console.log(response)
      response.data.success ? toast.success(response.data.message) : toast.error(response.data.message)
      response.data.success && navigate('/login')
    }catch (err) {
      toast.error(err.message)
    }
  }

  return (
    <div className='flex  items-center justify-center min-h-screen px-6 sm:px-0'>

      {/* Sent otp for resetting password */}
      {!isEmailSent && 
      <div className='bg-[#332e2b] p-10 rounded-lg shadow-lg w-full sm:w-96 text-white text-sm'>
        
        <form onSubmit={onSubmitEmail}>
          <h1 className='text-white text-2xl font-semibold text-center mb-4'>Reset Password</h1>
          <p className='text-center mb-6 text-whited'>Enter your regestered email address</p>
          <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-white text-black  '>
            <i class="fa-regular fa-envelope"></i>
            <input type="email" name="" id="" required value={email} onChange={e => setEmail(e.target.value)} className='outline-none bg-transparent' placeholder='Email'/>
          </div>
          <button  className='w-full py-3 bg-white text-black rounded-full text-md font-medium cursor-pointer  hover:bg-[#f5f5f5]  transition-all'>Send</button>
        </form>

        
      </div>
      }

      {/* Enter opt for resetting Password */}
      {!isOtpSubmitted && isEmailSent && 
      <div className='bg-[#332e2b] p-10 rounded-lg shadow-lg w-full sm:w-96 text-white text-sm'>
        <form onSubmit={onSubmitOpt}>
          <h1 className='text-white text-2xl font-semibold text-center mb-4'>Reset Password OTP</h1>
          <p className='text-center mb-6 text-whited'>Enter 6-digit code sent to your email id.</p>
          <div className='flex justify-between mb-8' onPaste={handlePaste}>
            {Array(6).fill(0).map((_,index) => (
              <input type="text" maxLength="1" key={index} ref={e => inputRefs.current[index] = e} onInput={(e) => handelInput(e, index)} onKeyDown={(e) => handleKeyDown(e,index)} required className='w-12 h-12 bg-white text-black text-center text-xl rounded-md outline-none'/>
            ))}
          </div>
          <button className='w-full py-2.5 bg-white text-black rounded-full text-md font-medium cursor-pointer  hover:bg-[#f5f5f5]  transition-all'>Submit</button>
        </form>
      </div>
      }

      {/* Enter New Password */}
      {isOtpSubmitted && isEmailSent &&
      <div className='bg-[#332e2b] p-10 rounded-lg shadow-lg w-full sm:w-96 text-white text-sm'>
      <form onSubmit={onSubmitNewPassword}>
          <h1 className='text-white text-2xl font-semibold text-center mb-4'>New Password</h1>
          <p className='text-center mb-6 text-whited'>Enter new password</p>
          <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-white text-black  '>
            <i class="fa-regular fa-unlock"></i>
            <input type="password" name="" id="" required value={newPassword} onChange={e => setNewPassword(e.target.value)} className='outline-none bg-transparent' placeholder='New password'/>
          </div>
          <button  className='w-full py-3 bg-white text-black rounded-full text-md font-medium cursor-pointer  hover:bg-[#f5f5f5]  transition-all'>Reset</button>
        </form>
      </div>
      }
    </div>
  )
}

export default ResetPassword
