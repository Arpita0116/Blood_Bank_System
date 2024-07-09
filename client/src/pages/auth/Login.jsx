import React, { lazy, Suspense } from 'react';

const Form = lazy(() => import('../../component/shared/Form/Form'));

function Login() {
    return (
        <>
            <div className='row g-0'>
                <div className='col-md-5'>
                    <img src='./assest/BloodBanklogin.png' alt='Blood Bank Login' className='img-fluid login-image' />
                </div>
                <div className='col-md-6 form-container'>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Form role="" submitText="submit" formTitle="Login" formType="login" />
                    </Suspense>
                </div>
            </div>
        </>
    );
}

export default Login;