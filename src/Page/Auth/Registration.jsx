import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Registration = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [phone, setPhone]=useState('')
    const [address, setAddress]=useState('')
    const [answer,setAnswer]=useState('')
    const navigate=useNavigate()

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
          const res = await axios.post(`${process.env.REACT_APP_API}/api/auth/register`, {
              name,
              email,
              password,
              phone,
              address,
              answer,
            });
            //console.log(res);
            if (res && res.data.success) {
             
              toast.success(res.data && res.data.message);
              navigate("/login");
            } else {
              toast.error(res.data.message);
            }

      } catch(error){
            toast.error(error.responce.data.massage)
            console.log(error);
        }
    }

  return (
    <>

    <div className='container' >
      <br/>
    <form onSubmit={handleSubmit}>
          <h4 className="title" style={{textAlign:'center'}}>REGISTER FORM</h4>

          <div className="mb-3">
              <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                className="form-control" placeholder="Enter Your Name" required autoFocus />
            </div>

            <div className="mb-3">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                className="form-control" placeholder="Enter Your Email " required />
            </div>

            <div className="mb-3">
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                className="form-control" placeholder="Enter Your Password" required />
            </div>

            <div className="mb-3">
              <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)}
                className="form-control" placeholder="Enter Your Phone" required />
            </div>

            <div className="mb-3">
              <input type="text" value={address} onChange={(e) => setAddress(e.target.value)}
                className="form-control" placeholder="Enter Your Address"
                required />
            </div>

            <div className="mb-3">
              <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)}
                className="form-control" placeholder="What is Your Favorite sports" required />
            </div>

          <button type="submit" className="btn btn-primary">
            REGISTER
          </button>
        </form>

    </div>
    
    </>
  )
}

export default Registration