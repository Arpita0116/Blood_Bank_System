import React, { lazy, Suspense } from 'react'
import './Login.css'
// import { useSelectore } from 'react-redux'
import { useSelector } from 'react-redux'
import Spinner from '../../component/Spinner'
import { toast } from 'react-toastify'


const Form = lazy(() => import('../../component/shared/Form/Form'))

function Login() {
    let { error, loading } = useSelector(item => item.auth)
    return (
        <>
            {loading && <Spinner />}
            {!loading && error && toast.error(error.message)}
            {!loading && !error && <>

                <div className='row g-0'>
                    <div className='col-md-5'>
                        <img src='./assest/BloodBank.jpg' alt='Blood Bank Login' className='img-fluid login-image' />
                    </div>
                    <div className='col-md-6 form-container'>
                        <Suspense fallback={<div>Loading.....</div>}>
                            <Form role="" submitText="submit" formTitle="Login" formType="login" />
                        </Suspense>

                    </div>

                </div>
            </>}
        </>
    )
}

export default Login
