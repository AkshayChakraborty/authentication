import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Home from './Page/Home';
import Registration from './Page/Auth/Registration';
import Login from './Page/Auth/Login';
import ForgetPassword from './Page/Auth/ForgetPassword';
import Navbar from './Component/Navbar'
import About from './Page/About';
import Student from './Page/StudentCrud/Component/Student';
import AddUser from './Page/StudentCrud/Component/AddUser';
import UpdateUser from './Page/StudentCrud/Component/UpdateUser';
// import Student from './Page/Student';


function App() {
  const PriveteRoute=({children})=>{
    const token=localStorage.getItem('auth') || sessionStorage.getItem('auth')
    return token !== null && token !==undefined ?(
       children
    ):(
      <Navigate to='/login'/>
    )
  }

  //public route
  const publicRoute=[
    {
      path:'/login',
      Component:<Login/>
    },
    {
      path:'/registration',
      Component:<Registration/>
    },
    {
      path:'/forgetpassword',
      Component:<ForgetPassword/>
    }
  ]

  //privet route
  const privetRoute=[
    {
      path:'/',
      Component:<Home/>
    },
    {
      path:'/about',
      Component:<About/>
    },
    {
      path:'/student',
      Component:<Student/>
    },
    {
      path:'/add',
      Component:<AddUser/>
    },
    {
      path:'/update/:id',
      Component:<UpdateUser/>
    }
  ]
return (
    <>
       <ToastContainer/>
       <Navbar/>
       <Routes>
         {
          publicRoute?.map((item,index)=>{
            return(
              <>
              <Route key={index+1} exact path={item?.path} element={item?.Component}/>
              </>
            )
          })
         }
         {
          privetRoute?.map((item,index)=>{
            return(
              <>
              <Route key={index+1} exact path={item?.path} element={<PriveteRoute>{item?.Component}</PriveteRoute>}/>
              </>
            )
          })
         }
        </Routes>
    </>
  );
}

export default App;
