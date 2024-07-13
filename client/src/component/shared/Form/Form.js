import React, { useState } from 'react'
import InputType from './InputType'
import { NavLink } from 'react-router-dom'
import { handleLoginController, handleRegistrationController } from '../../../services/authService'

function Form({ submitText, formTitle, formType }) {
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [name, setName] = useState('')
    let [role, setRole] = useState('donar')
    let [phone, setPhone] = useState('')
    let [address, setAddress] = useState('')
    let [hospitalName, setHospitalName] = useState('')
    let [organizationName, setOrganizationName] = useState('')

    function formSubmitHandler(e) {
        if (formType === "login") return handleLoginController(e, email, password, role)

        else if (formType === "register") return handleRegistrationController(
            e, email, password, name, role, phone, address, hospitalName, organizationName)


    }

    return (
        <div>
            <form>
                <h3>{formTitle}</h3>
                <hr />
                {/* {JSON.stringify(role, null, 4)} */}
                <div>
                    <div className='form-check form-check-inline'>
                        <input className='from-check-input' type='radio' name="role" id='donar' value="donar" defaultChecked
                            onChange={(e) => setRole(e.target.value)} />
                        <label className='from-check-label' for='donar'>Donar</label>
                    </div>
                    <div className='form-check form-check-inline'>
                        <input className='from-check-input' type='radio' name="role" id='admin' value="admin"
                            onChange={(e) => setRole(e.target.value)} />
                        <label className='from-check-label' for='admin'>Admin</label>
                    </div>
                    <div className='form-check form-check-inline'>
                        <input className='from-check-input' type='radio' name="role" id='hospital' value="hospital"
                            onChange={(e) => setRole(e.target.value)} />
                        <label className='from-check-label' for='hospital'>Hospital</label>
                    </div>
                    <div className='form-check form-check-inline'>
                        <input className='from-check-input' type="radio" name="role" id="OrganizationName" value="OrganizationName"
                            onChange={(e) => setRole(e.target.value)} />
                        <label className='from-check-label' for='OrganizationName'>OrganizationName</label>
                    </div>
                </div>
                {(() => {
                    //eslint-disable-next-line
                    switch (true) {
                        case formType === "login": {
                            return (
                                <>
                                    <InputType inputType="text" lableText="Email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" lableFor="email" />
                                    <InputType inputType="password" lableText="Password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" lableFor="password" />

                                </>
                            )

                        }

                        case formType === 'register': {
                            return (
                                <>
                                    {/* {name} */}
                                    {(role === "donar" || role === "admin") && (<InputType inputType="text" lableText="Name" value={name} onChange={(e) => setName(e.target.value)} name="name" lableFor="name" />)}
                                    {/* {hospitalname} */}
                                    {(role === "hospital") && (
                                        <InputType inputType="text" lableText="HospitalName" value={hospitalName} onChange={(e) => setHospitalName(e.target.value)} name="hospitalName" lableFor="hospitalName" />)}
                                    {/* {OrganizationName} */}
                                    {(role === "OrganizationName") && (
                                        <InputType inputType="text" lableText="OrganizationName" value={organizationName} onChange={(e) => setOrganizationName(e.target.value)} name="OrganizationName" lableFor="OrganizationName" />)}
                                    {/* {email} */}
                                    <InputType inputType="text" lableText="Email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" lableFor="email" />
                                    {/* {password} */}
                                    <InputType inputType="password" lableText="Password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" lableFor="password" />
                                    {/* {phone} */}
                                    <InputType inputType="text" lableText="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} name="phone" lableFor="phone" />
                                    {/* {address} */}
                                    <InputType inputType="text" lableText="Address" value={address} onChange={(e) => setAddress(e.target.value)} name="address" lableFor="address" />
                                </>
                            )
                        }
                    }
                })()}
                {formType === "login" &&
                    <>
                        Not registered yet ? Register <NavLink to="/register">Here !</NavLink>
                    </>
                }
                {formType === "register" &&
                    <>
                        Not registered yet ? Login <NavLink to="/login">Here !</NavLink>
                    </>
                }

                <button type='submit' className='btn btn-primary' onClick={formSubmitHandler}>{submitText}</button>
            </form>
        </div>
    )
}

export default Form






// import React from 'react'
// import { Formik, Field, Form as FormikForm, ErrorMessage, Form } from 'formik'
// import * as Yup from 'yup'
// import InputType from './InputType'
// import { NavLink } from 'react-router-dom'
// import { handleLoginController, handleRegistrationController } from '../../../services/authService'
// //import { reset } from 'colors'

// const From = ({ submitText, formTitle, formType }) => {
//     const initialValues = {
//         email: '',
//         password: '',
//         name: '',
//         role: 'donar',
//         phone: '',
//         address: '',
//         hospitalName: '',
//         organizationName: '',
//     }
//     const validationSchema = Yup.object().shape({
//         email: Yup.string().email('Invalid email address').required('Required'),
//         password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
//         ...(formType === 'register' && {
//             name: Yup.string().when('role', {
//                 is: (val) => val === 'donar' || val === 'admin',
//                 then: Yup.string().required('Required'),
//             }),
//             phone: Yup.string().required('Required'),
//             address: Yup.string().required('Required'),
//             hospitalName: Yup.string().when('role', {
//                 is: 'hospital',
//                 then: Yup.string().required('Required'),
//             }),
//             organizationName: Yup.string().when('role', {
//                 is: 'OrganizationName',
//                 then: Yup.string().required('Required'),
//             }),
//         }),
//     })

//     const formSubmitHandler = (values, { setSubmitting, resetForm }) => {
//         if (formType === 'login') {
//             handleLoginController(values)
//         }
//         else if (formType === 'register') {
//             handleRegistrationController(values)
//         }
//         setSubmitting(false)
//         resetForm()
//     }
//     return (
//         <div>
//             <h3>{formTitle}</h3>
//             <hr />
//             <Formik
//                 initialValues={initialValues}
//                 validationSchema={validationSchema}
//                 onSubmit={formSubmitHandler}
//             >
//                 {({ isSubmitting, values }) => (
//                     <FormikForm>
//                         <div>
//                             <div className='form-checkout form-check-inline'>
//                                 <input type='radio' name='role' value="donar" id='donar' className='form-check-input' />
//                                 <label className='form-check-label' for='donar'>Donar</label>
//                             </div>
//                             <div className='form-checkout form-check-inline'>
//                                 <input type='radio' name='role' value="admin" id='admin' className='form-check-input' />
//                                 <label className='form-check-label' for='admin'>admin</label>
//                             </div>
//                             <div className='form-checkout form-check-inline'>
//                                 <input type='radio' name='role' value="hospital" id='hospital' className='form-check-input' />
//                                 <label className='form-check-label' for='hospital'>Hospital</label>
//                             </div>
//                             <div className='form-checkout form-check-inline'>
//                                 <input type='radio' name='role' value="OrganizationName" id='OrganizationName' className='form-check-input' />
//                                 <label className='form-check-label' for='OrganizationName'>Organization</label>
//                             </div>
//                         </div>
//                         {formType === 'register' && (
//                             <>
//                                 {(values.role === 'donar' || values.role === 'admin') && (
//                                     <>
//                                         <InputType inputType='text' lableText='Name' name='name' />
//                                         <ErrorMessage name='name' component='div' className='error' />
//                                     </>
//                                 )}
//                                 {values.role === 'hospital' && (
//                                     <>
//                                         <InputType inputType='text' lableText='HospitalName' name='hospitalName' />
//                                         <ErrorMessage name='hospitalName' component='div' className='error' />
//                                     </>
//                                 )}
//                                 {values.role === 'OrganizationName' && (
//                                     <>
//                                         <InputType inputType='text' lableText='OrganizationName' name='organizationName' />
//                                         <ErrorMessage name='organizationName' component='div' className='error' />
//                                     </>
//                                 )}
//                                 <InputType inputType='text' lableText='Email' name='email' />
//                                 <ErrorMessage name='email' component='div' className='error' />

//                                 <InputType inputType='text' lableText='Password' name='password' />
//                                 <ErrorMessage name='password' component='sdiv' className='error' />

//                                 <InputType inputType='text' lableText='Phone' name='phone' />
//                                 <ErrorMessage name='phone' component='div' className='error' />

//                                 <InputType inputType='text' lableText='Address' name='address' />
//                                 <ErrorMessage name='address' component='div' className='error' />
//                             </>
//                         )}

//                         {formType === 'login' && (
//                             <div>Not registered yet? Register <NavLink to='./register'>Here !</NavLink></div>
//                         )}
//                         {formType === 'register' && (
//                             <div>Already registered? Login <NavLink to='./login'>Here !</NavLink></div>
//                         )}

//                         <button type='submit' className='btn btn-primary' disabled={isSubmitting}>{submitText}</button>
//                     </FormikForm>
//                 )}
//             </Formik>
//         </div>
//     )
// }
// export default Form