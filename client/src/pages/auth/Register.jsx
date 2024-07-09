import React from 'react'
import Form from '../../component/shared/Form/Form'
function Register() {
    return (
        <>
            <div className='row g-0'>
                <div className='col-md-5'>
                    <img src='./assest/BloodRegister.jpg' alt="blood_bank_login" className='img-fluid login-image' />
                </div>
                <div className='col-md-6 form-container'>
                    <Form submitText="Register" formTitle="Register" formType="register" />
                </div>
            </div>
        </>
    )
}

export default Register