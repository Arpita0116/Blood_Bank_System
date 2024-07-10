import React, { useEffect } from 'react'
import API from '../../services/API'
import store from '../../redux/store'
import { getCurrentUser } from '../../redux/fetures/auth/authAction'
import { Navigate } from 'react-router-dom'

function PrivateRoute({ childern }) {
    async function getCurrentUseHandler() {
        try {
            let res = await API.get('/auth/v1/current-user')
            if (res.data) {
                store.dispatch(getCurrentUser(res.data))
            }
        }
        catch (error) {
            console.log(error)
            localStorage.clear('blood-token')
        }
    }

    useEffect(() => {
        getCurrentUseHandler()
    }, [])
    if (localStorage.getItem('blood-token')) {
        return childern
    }
    else {
        <Navigate to='/login' />
    }
}
export default PrivateRoute