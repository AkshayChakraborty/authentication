import React from 'react'
import { useAuth } from '../Contex/Auth'

const Home = () => {
  const [auth,setAuth]=useAuth()
  return (
    <>
    <pre>{JSON.stringify(auth,null,4)}</pre>
    </>
  )
}

export default Home