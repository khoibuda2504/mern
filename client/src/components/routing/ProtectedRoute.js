import React, { useContext } from 'react'
import { Route, Navigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import Spinner from 'react-bootstrap/Spinner'


const ProtectedRoute = ({ children }) => {
  const { authState: { authLoading, isAuthenticated } } = useContext(AuthContext)
  if (authLoading) {
    return <div className='spinner-container'>
      <Spinner variant='info' animation='border' />
    </div>
  }
  return (
    isAuthenticated ? children : <Navigate to='/login' />
  )
}

export default ProtectedRoute