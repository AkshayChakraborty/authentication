import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const ForgetPassword = () => {
  const [email,setEmail]=useState("")
  const [answer,setAnswer]=useState("")
  const [newPassword,setNewPassword]=useState("")
  const navigate=useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/auth/forgot-password`, {
        email,
        newPassword,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);

        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <>
    
    
    <div className='container' >
      <br/>
    <form onSubmit={handleSubmit}>
          <h4 className="title" style={{textAlign:'center'}}>Forget Password</h4>
       
            <div className="mb-3">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                className="form-control" placeholder="Enter Your Email " required />
            </div>

            <div className="mb-3">
              <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}
                className="form-control" placeholder="Enter Your New Password" required />
            </div>   

             <div className="mb-3">
              <input type="password" value={answer} onChange={(e) => setAnswer(e.target.value)}
                className="form-control" placeholder="Enter Your Answer" required />
            </div>        
            
          <button type="submit" className="btn btn-primary">
          Submit
          </button>
        </form>

    </div>
    
    </>
  )
}

export default ForgetPassword