import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useAuth } from '../../Contex/Auth';

const Login = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('')
    const [auth,setAuth] = useAuth()
    const navigate=useNavigate()

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
          const res = await axios.post(`${process.env.REACT_APP_API}/api/auth/login`, {
              email,
              password,
            });
            if (res && res.data.success) {
              toast.success(res.data && res.data.message);
              setAuth({
                ...auth,
                user: res.data.user,
                token: res.data.token,
              });
              console.log(res);
              navigate('/')
               localStorage.setItem("auth", JSON.stringify(res.data));
              // navigate(location.state || "/");
            } else {
              toast.error(res.data.message);
            }

      } catch (error){
            toast.error(error.res.data.message)
            console.log(error);
        }
    }
  return (
    <>
    
    <div className='container' >
      <br/>
    <form onSubmit={handleSubmit}>
          <h4 className="title" style={{textAlign:'center'}}>User Login</h4>
       
            <div className="mb-3">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                className="form-control" placeholder="Enter Your Email " required />
            </div>

            <div className="mb-3">
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                className="form-control" placeholder="Enter Your Password" required />
            </div>          
            
          <button type="submit" className="btn btn-primary">
           LOGIN
          </button>
           
        </form>
        <Link to='/forgetpassword'> Forget Password</Link>

    </div>
    
    </>
  )
}

export default Login