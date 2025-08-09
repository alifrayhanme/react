import React from 'react'
import { useNavigate } from 'react-router'

export const Contact = () => {
  const navigate = useNavigate()
  const handelGotoHome = () => {
    navigate("/")
  }
  
  return (  
    <>
        <h1>Welcome to Contact Page.</h1>
        <button onClick={handelGotoHome}>Home</button>
    </>
)
}
