import React, { lazy, Suspense } from 'react'
import './register.css'
import { useSelector } from 'react-redux'
import Spinner from '../../component/Spinner'
import { toast } from 'react-toastify'


const Form = lazy(() => import('../../component/shared/Form/Form'))
function Register() {
    let { error, loading } = useSelector(item => item.auth)
    return (
        <>
            {loading && <Spinner />}
            {
                !loading && error && toast.error(error.message)
            }
            {
                !loading && !error && <>
                    <div className='row g-0'>
                        <div className='col-md-5'>
                            <img src='./assest/BloodRegister.jpg' alt="blood_bank_login" className='Register-img' />
                        </div>
                        <div className='col-md-6 form-container'>
                            <Suspense fallback={<div>Loading.....</div>}>
                                <Form submitText="Register" formTitle="Register" formType="register" />
                            </Suspense>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default Register