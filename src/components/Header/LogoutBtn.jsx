import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth_service'
import {logout} from '../../features/authSlice'
import { useNavigate } from 'react-router-dom'

function LogoutBtn() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logoutHandler = () => {
    authService.logoutUser()
    .then(() => {
      dispatch(logout())
      navigate('/')
    })
    .catch((err) => {console.error("Error in logoutBtn functionality", err)})
  }

  return (
    <button onClick={logoutHandler} className='inline-block px-6 py-2  duration-200 hover: bg-blue-100 rounded-full'>
      Logout
    </button>
  )
}

export default LogoutBtn
