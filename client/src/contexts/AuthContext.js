import { createContext, useReducer } from 'react'
import { authReducer } from '../reducers/authReducer'
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from './constants'
import axios from 'axios'

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {
    authLoading: true,
    isAuthenticated: false,
    user: null
  })
  const loginUser = async userForm => {
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, userForm)
      if (response.data.success) {
        localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.data.accessToken)
        return response.data
      }
    } catch (error) {
      if (error.response.data) {
        return error.response.data
      }
      return { success: false, message: error.message }
    }
  }
  const authContentData = { loginUser }
  return (
    <AuthContext.Provider value={authContentData}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthContextProvider
