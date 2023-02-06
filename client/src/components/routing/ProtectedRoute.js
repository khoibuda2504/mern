import React, { useContext } from 'react'
import { Route, Navigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import Spinner from 'react-bootstrap/Spinner'


const ProtectedRoute = ({ element: Component, ...rest }) => {
  const { authState: { authLoading, isAuthenticated } } = useContext(AuthContext)
  // if (authLoading) {
  //   return <div className='spinner-container'>
  //     <Spinner variant='info' animation='border' />
  //   </div>
  // }
  return (
    <React.Fragment>
      <Route {...rest} element={
        isAuthenticated ? <Component {...rest} /> : <Navigate to='/login' />
      } />
    </React.Fragment>
  )
}

export default ProtectedRoute