import { Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import LoginAdvanced from './pages/login/LoginAdvanced';

function App() {

  return (
    <>
    <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/log-in" element={<LoginAdvanced />} />
    </Routes>
    </>
  )
}

export default App
