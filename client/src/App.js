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
        <Route path='/'
          element={
            <PrivatRoute>
              <Laylout >
                <HomePage />
              </Laylout>
            </PrivatRoute>
          }
        />


        <Route
          path='/analytics'
          element={
            <PrivatRoute>
              <Analytics />
            </PrivatRoute>
          }
        />



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

        <Route
          path='/org-list'
          element={
            <PrivatRoute>
              <Laylout>
                <GetOrgList />
              </Laylout>
            </PrivatRoute>
          }
        />


        <Route
          path='/hospital-list'
          element={
            <PrivatRoute>
              <Laylout>
                <GetHospitalList />
              </Laylout>
            </PrivatRoute>
          }
        />

        <Route
          path='/donation'
          element={
            <PrivatRoute>
              <Laylout>
                <Donation />
              </Laylout>
            </PrivatRoute>
          }
        />


        <Route
          path='/consumer'
          element={
            <PrivatRoute>
              <Laylout>
                <Consumer />
              </Laylout>
            </PrivatRoute>
          }
        />


        <Route
          path='/organization'
          element={
            <PrivatRoute>
              <Laylout>
                <Organization />
              </Laylout>
            </PrivatRoute>
          }
        />

        <Route
          path='/donar'
          element={
            <PrivatRoute>
              <Laylout>
                <Donar />
              </Laylout>
            </PrivatRoute>
          }
        />

        <Route
          path='/hospital'
          element={
            <PrivatRoute>
              <Laylout>
                <Hospitals />
              </Laylout>
            </PrivatRoute>
          }
        />


        <Route path='/login'
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          } />

        <Route path='/register'
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />

      </Routes>
    </>
  )
}

export default App