import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAuth } from '../Contex/Auth'

const Navbar = () => {
    const [auth,setAuth]=useAuth()

    const handleLogout=async()=>{
        setAuth({
            ...auth,user:null,token:''
        })
        localStorage.removeItem('auth')
        toast('successfully logout')
    }
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <NavLink className="navbar-brand" to="/">Navbar</NavLink>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  to="/about">About</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink className="nav-link"  to="/student">Student</NavLink>
        </li>
       
         {
            !auth.user ?(
                <>
                <li className="nav-item">
          <NavLink className="nav-link"  to="/registration">Registration</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  to="/login">Login</NavLink>
        </li>
                </>
            ):(
                <>
                <li className="nav-item">
          <NavLink className="nav-link">{auth.user.name} </NavLink>
        </li>
        <li className="nav-item">
          <NavLink onClick={handleLogout} className="nav-link"  to="/login">Logout</NavLink>
        </li>
                </>
            )
         }
        
       
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar