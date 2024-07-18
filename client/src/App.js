import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PublicRoute from './component/Route/PublicRoute'
import PrivatRoute from './component/Route/PrivateRoute'
import Laylout from './component/shared/Layout/Layout'
import Donar from './pages/Dashboard/Donar'
import Hospitals from './pages/Dashboard/Hospitals'
import Organization from './pages/Dashboard/Organization'
import Donation from './pages/Dashboard/Donation'
import Consumer from './pages/Dashboard/Consumer'
import GetDonarList from './pages/Dashboard/Admin/GetDonarList'
import GetOrgList from './pages/Dashboard/Admin/GetOrgList'
import GetHospitalList from './pages/Dashboard/Admin/GetHospitalList'
import HomeAdmin from './pages/Dashboard/Admin/HomeAdmin';
import Analytics from './pages/Analytics';

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

        <Route
          path='/donar-list'
          element={
            <PrivatRoute>
              <Laylout>
                <GetDonarList />
              </Laylout>
            </PrivatRoute>
          }
        />

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