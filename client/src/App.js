import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Landing from './components/layout/Landing'
import Auth from './views/Auth'
import AuthContextProvider from './contexts/AuthContext';
import Dashboard from './views/Dashboard';
import ProtectedRoute from './components/routing/ProtectedRoute';
function App(props) {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route exact path='/login' element={<Auth {...props} authRoute='login' />} />
          <Route exact path='/register' element={<Auth {...props} authRoute='register' />} />
          {/* <Route exact path='/dashboard' element={<Dashboard />} /> */}
          <ProtectedRoute exact path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
