import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PublicRoute from './component/Route/PublicRoute'
import PrivatRoute from './component/Route/PrivateRoute'
import Laylout from './component/shared/Layout/Layout'

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path='/' element={
          <PrivatRoute>
            <HomePage />
            <Laylout />
          </PrivatRoute>
        } />

        <Route path='/login' element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        } />
        <Route path='/register' element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        } />
      </Routes>
    </>
  )
}

export default App