import React from 'react';
import Form from '../../component/shared/Form/Form'
function Login() {
    return (
        <>
            <div className='row g-0'>
                <div className='col-md-5'>
                    <img src='assest/BloodBank.jpg' alt='Blood Bank Login' className='img-fluid login-image' loading='lazy' />
                </div>
                <div className='col-md-6 form-container'>

                    <Form role="" submitText="submit" formTitle="Login" formType="login" />

                </div>
            </div>
        </>
    );
}

export default Login;